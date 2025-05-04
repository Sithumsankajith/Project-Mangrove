import mongoose from 'mongoose';

const GeoJSONPointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point',
    required: true
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, 'Please provide an event name'],
    trim: true,
    maxlength: [100, 'Event name cannot be more than 100 characters']
  },
  organizer: {
    type: String,
    required: [true, 'Please provide an organizer name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date']
  },
  time: {
    type: String,
    required: [true, 'Please provide a time'],
    trim: true
  },
  location: {
    type: GeoJSONPointSchema,
    required: [true, 'Please provide a location'],
    index: '2dsphere' // Create a geospatial index
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true
  },
  plantCount: {
    type: Number,
    default: 0
  },
  plantSpecies: {
    type: String,
    default: 'Mixed'
  },
  survivalRate: {
    type: Number,
    min: 0,
    max: 100,
    default: null
  },
  lastChecked: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  images: [String],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create the model if it doesn't exist already
export default mongoose.models.Event || mongoose.model('Event', EventSchema);