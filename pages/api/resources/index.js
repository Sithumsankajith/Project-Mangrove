import dbConnect from '../../../lib/mongodb';
import Resource from '../../../models/Resource';
import { protect, restrictTo } from '../../../lib/auth';

// Middleware composition helper function
const applyMiddleware = middlewares => async (req, res) => {
  // Use reduce to chain middleware functions
  return middlewares.reduce((promise, middleware) => {
    return promise.then(() => new Promise((resolve) => {
      middleware(req, res, resolve);
    }));
  }, Promise.resolve())
    .then(() => handler(req, res))
    .catch(error => {
      console.error('Middleware error:', error);
      return res.status(500).json({ success: false, error: 'Server error' });
    });
};

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        // Get query parameters for filtering
        const { 
          type, 
          language, 
          tag, 
          status, 
          limit = 20, 
          page = 1, 
          sort = '-createdAt' 
        } = req.query;
        
        let query = {};
        
        // Add filters if provided
        if (type) query.type = type;
        if (language) query.language = language;
        if (tag) query.tags = { $in: [tag] };
        if (status) {
          // Only allow admins to see drafts and archived resources
          if (req.user && req.user.role === 'admin') {
            query.status = status;
          } else {
            // For non-admins, only show published resources
            query.status = 'published';
          }
        } else {
          // By default, only show published resources to non-admins
          if (!req.user || req.user.role !== 'admin') {
            query.status = 'published';
          }
        }
        
        // Calculate pagination
        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        // Get total count for pagination
        const total = await Resource.countDocuments(query);
        
        // Fetch resources with pagination and sorting
        const resources = await Resource.find(query)
          .sort(sort)
          .skip(skip)
          .limit(parseInt(limit))
          .populate('author', 'name email');
        
        res.status(200).json({
          success: true,
          count: resources.length,
          pagination: {
            total,
            page: parseInt(page),
            pages: Math.ceil(total / parseInt(limit))
          },
          data: resources
        });
      } catch (error) {
        console.error('GET Resources Error:', error);
        res.status(500).json({
          success: false,
          error: 'Server error'
        });
      }
      break;

    case 'POST':
      try {
        // Check if user is authorized (admin, ngo, or researcher)
        if (!req.user || !['admin', 'ngo', 'researcher'].includes(req.user.role)) {
          return res.status(403).json({
            success: false,
            error: 'Not authorized to create resources'
          });
        }
        
        // Add user as author
        req.body.author = req.user._id;
        
        // Create the resource
        const resource = await Resource.create(req.body);
        
        res.status(201).json({
          success: true,
          data: resource
        });
      } catch (error) {
        console.error('POST Resource Error:', error);
        
        if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(val => val.message);
          return res.status(400).json({
            success: false,
            error: messages.join(', ')
          });
        }
        
        res.status(500).json({
          success: false,
          error: 'Failed to create resource'
        });
      }
      break;

    default:
      res.status(405).json({
        success: false,
        error: 'Method not allowed'
      });
      break;
  }
}

// Apply authentication middleware for POST requests
export default (req, res) => {
  // Only apply auth middleware for POST
  if (req.method === 'POST') {
    return applyMiddleware([protect])(req, res);
  }
  
  // For GET requests, try to authenticate but don't require it
  return applyMiddleware([
    // Optional auth middleware for GET requests
    async (req, res, next) => {
      try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
          const token = req.headers.authorization.split(' ')[1];
          if (token) {
            try {
              const decoded = verifyToken(token);
              // Find user by ID
              const user = await User.findById(decoded.id);
              if (user) {
                req.user = user;
              }
            } catch (error) {
              // Continue without user if token is invalid
            }
          }
        }
        next();
      } catch (error) {
        next();
      }
    }
  ])(req, res);
};