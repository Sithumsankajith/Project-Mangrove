import dbConnect from '../../../lib/mongodb';
import Resource from '../../../models/Resource';
import { protect, restrictTo, verifyToken } from '../../../lib/auth';
import User from '../../../models/User';

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
  const {
    query: { id },
    method
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const resource = await Resource.findById(id).populate('author', 'name email');
        
        if (!resource) {
          return res.status(404).json({
            success: false,
            error: 'Resource not found'
          });
        }
        
        // If resource is not published, only allow admins, or the author to view it
        if (resource.status !== 'published') {
          if (!req.user || (req.user.role !== 'admin' && req.user._id.toString() !== resource.author?._id.toString())) {
            return res.status(404).json({
              success: false,
              error: 'Resource not found'
            });
          }
        }
        
        // Increment view count
        if (req.query.view === 'true') {
          resource.viewCount += 1;
          await resource.save();
        }
        
        res.status(200).json({
          success: true,
          data: resource
        });
      } catch (error) {
        console.error('GET Resource Error:', error);
        res.status(500).json({
          success: false,
          error: 'Server error'
        });
      }
      break;

    case 'PUT':
      try {
        const resource = await Resource.findById(id);
        
        if (!resource) {
          return res.status(404).json({
            success: false,
            error: 'Resource not found'
          });
        }
        
        // Check if user is authorized to update (admin or the author)
        if (req.user.role !== 'admin' && req.user._id.toString() !== resource.author?.toString()) {
          return res.status(403).json({
            success: false,
            error: 'Not authorized to update this resource'
          });
        }
        
        // Update the resource
        const updatedResource = await Resource.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        }).populate('author', 'name email');
        
        res.status(200).json({
          success: true,
          data: updatedResource
        });
      } catch (error) {
        console.error('PUT Resource Error:', error);
        
        if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(val => val.message);
          return res.status(400).json({
            success: false,
            error: messages.join(', ')
          });
        }
        
        res.status(500).json({
          success: false,
          error: 'Failed to update resource'
        });
      }
      break;

    case 'DELETE':
      try {
        const resource = await Resource.findById(id);
        
        if (!resource) {
          return res.status(404).json({
            success: false,
            error: 'Resource not found'
          });
        }
        
        // Only admins or the author can delete a resource
        if (req.user.role !== 'admin' && req.user._id.toString() !== resource.author?.toString()) {
          return res.status(403).json({
            success: false,
            error: 'Not authorized to delete this resource'
          });
        }
        
        await resource.remove();
        
        res.status(200).json({
          success: true,
          data: {}
        });
      } catch (error) {
        console.error('DELETE Resource Error:', error);
        res.status(500).json({
          success: false,
          error: 'Server error'
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

// Apply appropriate middleware based on request method
export default async (req, res) => {
  // For GET requests, try to authenticate but don't require it
  if (req.method === 'GET') {
    return applyMiddleware([
      // Optional auth middleware
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
  }
  
  // For PUT and DELETE requests, require authentication
  if (['PUT', 'DELETE'].includes(req.method)) {
    return applyMiddleware([protect])(req, res);
  }
  
  // For any other method, just call the handler directly
  return handler(req, res);
};