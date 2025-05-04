// Add this to pages/api/debug.js
import dbConnect from '../../lib/mongodb';
import Volunteer from '../../models/Volunteer';

export default async function handler(req, res) {
  await dbConnect();
  try {
    const collections = await Volunteer.db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    const volunteerCount = await Volunteer.countDocuments();
    
    res.status(200).json({ 
      success: true, 
      collections: collectionNames,
      volunteerCount,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}