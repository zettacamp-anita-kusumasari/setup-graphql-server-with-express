const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: String,
  address: String,
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('School', schoolSchema);
