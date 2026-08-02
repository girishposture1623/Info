const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  photos: [String],
  capacity: Number,
  amenities: [String]
});

module.exports = mongoose.model('Room', roomSchema);
