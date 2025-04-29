import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  type: {
    type: String,
    enum: ['article', 'guide', 'manual', 'species', 'research', 'video'],
    required: [true, 'Please specify resource type']
  },
  language: {
    type: String,
    enum: ['english', 'sinhala', 'tamil'],
    default: 'english'
  },
  tags: [String],
  featuredImage: {
    type: String,
    default: '/images/default-resource.jpg'
  },
  attachments: [
    {
      name: String,
      file: String,
      type: String
    }
  ],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  viewCount: {
    type: Number,
    default: 0
  },
  author: {
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
export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);