const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  areaName: {
    type: String,
    required: true,
  },
  seller_id: {
    type: String,
    required: true
  },
  plotSize: {
    type: Number,
    required: true,
    min: 0, 
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 0, 
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 0, 
  },
  amenities: {
    type: [String],
  },
  // Like and Dislike information
  likes: {
    type: [String], // Array of user IDs who liked
    default: []
  },
  dislikes: {
    type: [String], // Array of user IDs who disliked
    default: []
  },
});

module.exports = mongoose.model('Property', propertySchema);
