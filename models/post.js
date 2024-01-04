const mongoose = require('mongoose');

// Define the allowed category values in an enum
const categoryEnum = ['Electronics', 'Mattrices', 'Books', 'Automotive', 'Other'];

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      // You can add additional validation for image URLs if needed.
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: categoryEnum,
    required: true,
  },
  location: String,
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the User model for the seller.
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
