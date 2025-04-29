import dbConnect from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

export default async function handler(req, res) {
  const {
    query: { id },
    method
  } = req;

  await dbConnect();

  switch (method) {
    // Get a single contact message by ID
    case 'GET':
      try {
        const contact = await Contact.findById(id);
        if (!contact) {
          return res.status(404).json({ success: false, error: 'Message not found' });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // Update a contact message (e.g., mark as read/replied)
    case 'PUT':
      try {
        const contact = await Contact.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });
        if (!contact) {
          return res.status(404).json({ success: false, error: 'Message not found' });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // Delete a contact message
    case 'DELETE':
      try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
          return res.status(404).json({ success: false, error: 'Message not found' });
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
