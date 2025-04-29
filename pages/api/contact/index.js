import dbConnect from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    // For admin purposes - to retrieve all contact messages
    case 'GET':
      try {
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // For submitting a new contact form
    case 'POST':
      try {
        const contact = await Contact.create(req.body);
        res.status(201).json({
          success: true,
          data: contact,
          message: 'Your message has been sent successfully!'
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          error: error.message || 'Failed to submit contact form'
        });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
