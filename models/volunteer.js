import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
      trim: true,
    },
    interests: {
      type: [String],
      required: [true, 'Please select at least one area of interest'],
    },
    experience: {
      type: String,
      required: [true, 'Please provide your previous experience'],
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    adminNotes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Volunteer || mongoose.model('Volunteer', VolunteerSchema);