const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  id: Number,
  type: String,
  typeId: Number,
  createdAt: Date,
  thumbnail: String,
  title: String,
  content: String,
  tag: String,
  multiMedia: {
    id: Number,
    type: String,
    url: String
  }
}, {
  strict: false,
  timestamps: false,
  collection: 'card'
});

module.exports = mongoose.model('card', cardSchema);