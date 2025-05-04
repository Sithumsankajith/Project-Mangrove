import dbConnect from '../../../lib/mongodb';
import Volunteer from '../../../models/Volunteer';

export default async function handler(req, res) {
  const {
    query: { id },
    method
  } = req;

  await dbConnect();

  switch (method) {
    // Get a single volunteer by ID
    case 'GET':
      try {
        const volunteer = await Volunteer.findById(id);
        if (!volunteer) {
          return res.status(404).json({ success: false, error: 'Volunteer not found' });
        }
        res.status(200).json({ success: true, data: volunteer });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // Update a volunteer record
    case 'PUT':
      try {
        const volunteer = await Volunteer.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });
        if (!volunteer) {
          return res.status(404).json({ success: false, error: 'Volunteer not found' });
        }
        res.status(200).json({ success: true, data: volunteer });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // Delete a volunteer record
    case 'DELETE':
      try {
        const deletedVolunteer = await Volunteer.findByIdAndDelete(id);
        if (!deletedVolunteer) {
          return res.status(404).json({ success: false, error: 'Volunteer not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}