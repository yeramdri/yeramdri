const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  id: Number,
  type: String,
  typeId: Number,
  createdAt:{type: Date, default: Date.now},
  thumbnail: String,
  title: String,
  content: String,
  tag: String,
  multiMedia: Array
}, {
  strict: false,
  timestamps: false,
  collection: 'card'
});

module.exports = mongoose.model('card', cardSchema);