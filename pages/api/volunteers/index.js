import dbConnect from '../../../lib/mongodb';
import Volunteer from '../../../models/volunteer';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    // For admin purposes - to retrieve all volunteers
    case 'GET':
      try {
        const volunteers = await Volunteer.find({}).sort({ createdAt: -1 });
        console.log('Found volunteers:', volunteers.length); 
        res.status(200).json({ success: true, data: volunteers });
      } catch (error) {
        console.error('Error fetching volunteers:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // For submitting a new volunteer application
    case 'POST':
      try {
        const volunteer = await Volunteer.create(req.body);
        res.status(201).json({
          success: true,
          data: volunteer,
          message: 'Your volunteer application has been submitted successfully!'
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          error: error.message || 'Failed to submit volunteer application'
        });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}