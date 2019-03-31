const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  id: Number,
  type: String,
  typeId: Number,
  createdAt:{type: Date, default: Date.now},
  thumbnail: String,
  title: String,
  description: String,
  tag: String,
  multiMedia: Array,
  bibleSection: String,
  scripture: String,
  originalLink: String
}, {
  strict: false,
  timestamps: false,
  collection: 'card'
});

module.exports = mongoose.model('card', cardSchema);