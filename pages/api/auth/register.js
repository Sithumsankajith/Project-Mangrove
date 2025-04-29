import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req;
  
  await dbConnect();
  
  if (method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }
  
  try {
    const { name, email, password, role, organization, phone } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'Email already registered. Please login instead.'
      });
    }
    
    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
      role: role || 'user',
      organization,
      phone
    });
    
    // Generate token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET || 'your-default-secret-key',
      { expiresIn: '1d' }
    );
    
    // TODO: In production, implement email verification here
    
    // Send response without exposing password
    const userWithoutPassword = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      organization: newUser.organization,
      phone: newUser.phone,
      createdAt: newUser.createdAt
    };
    
    res.status(201).json({
      success: true,
      data: {
        user: userWithoutPassword,
        token
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message || 'Registration failed'
    });
  }
}