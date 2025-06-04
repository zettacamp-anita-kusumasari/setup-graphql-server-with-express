const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Student', studentSchema);
