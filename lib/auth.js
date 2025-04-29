import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret-key';

/**
 * Verify JWT token and return decoded data
 * @param {string} token - JWT token
 * @returns {Object} Decoded token
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

/**
 * Generate JWT token for a user
 * @param {Object} user - User object
 * @returns {string} JWT token
 */
export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email, 
      role: user.role 
    },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};

/**
 * Middleware for protected routes (API)
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @param {Function} next - Next middleware function
 * @returns {Function} Next middleware or error response
 */
export const protect = async (req, res, next) => {
  try {
    let token;
    
    // Check if token exists in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    
    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      });
    }
    
    // Verify token
    const decoded = verifyToken(token);
    
    // Find user by ID
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Attach user to request
    req.user = user;
    
    // Continue to next middleware
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
};

/**
 * Middleware for admin-only routes
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @param {Function} next - Next middleware function
 * @returns {Function} Next middleware or error response
 */
export const adminOnly = (req, res, next) => {
  // Check if user exists and is admin
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'Admin access required for this route'
    });
  }
  
  // Continue to next middleware
  next();
};

/**
 * Higher-order function for role-based access control
 * @param {string[]} roles - Array of allowed roles
 * @returns {Function} Middleware function
 */
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    // Check if user role is included in allowed roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: 'You do not have permission to perform this action'
      });
    }
    
    // Continue to next middleware
    next();
  };
};

/**
 * Check if user is authenticated (for client-side)
 * @param {string} token - JWT token
 * @returns {Object|null} User object or null
 */
export const checkAuth = async (token) => {
  if (!token) return null;
  
  try {
    // Verify token
    const decoded = verifyToken(token);
    
    // Find user by ID
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) return null;
    
    return user;
  } catch (error) {
    return null;
  }
};