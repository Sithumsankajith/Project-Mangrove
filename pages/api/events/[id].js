// File: /pages/api/events/[id].js
import dbConnect from '../../../lib/mongodb';
import Event from '../../../models/Event'; // Make sure this model exists

export default async function handler(req, res) {
  const {
    query: { id },
    method
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      // Your existing GET code
      break;

    case 'PUT':
      try {
        const event = await Event.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });
        
        if (!event) {
          return res.status(404).json({ success: false, error: 'Event not found' });
        }
        
        res.status(200).json({ success: true, data: event });
      } catch (error) {
        console.error('Error updating event:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // Other methods
  }
}