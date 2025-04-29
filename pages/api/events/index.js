import dbConnect from '../../../lib/mongodb';
import Event from '../../../models/Event';
import { verifyToken } from '../../../lib/auth';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        // Get query parameters for filtering
        const { status, organizer, limit = 100, sort = '-createdAt' } = req.query;
        
        let query = {};
        
        // Add filters if provided
        if (status) query.status = status;
        if (organizer) query.organizer = organizer;
        
        // Fetch events with pagination and sorting
        const events = await Event.find(query)
          .sort(sort) // Sort by createdAt date in descending order by default
          .limit(Number(limit));
        
        res.status(200).json({ 
          success: true, 
          count: events.length, 
          data: events 
        });
      } catch (error) {
        console.error('GET Events Error:', error);
        res.status(500).json({ 
          success: false, 
          error: 'Server error' 
        });
      }
      break;

    case 'POST':
      try {
        // Optional: Verify user authentication for creating events
        // const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header
        // if (token) {
        //   try {
        //     const decoded = verifyToken(token);
        //     // Add user ID to event data
        //     req.body.createdBy = decoded.id;
        //   } catch (err) {
        //     // Continue without assigning user ID if token is invalid
        //     console.warn('Invalid token provided:', err.message);
        //   }
        // }
        
        // Create the event
        const event = await Event.create(req.body);
        
        res.status(201).json({ 
          success: true, 
          data: event,
          message: 'Event created successfully'
        });
      } catch (error) {
        console.error('POST Event Error:', error);
        
        // Validation errors
        if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(val => val.message);
          return res.status(400).json({ 
            success: false, 
            error: messages.join(', ') 
          });
        }
        
        // Other errors
        res.status(500).json({ 
          success: false, 
          error: 'Failed to create event' 
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