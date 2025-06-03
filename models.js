
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  deletedAt: Date,
});

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  dateOfBirth: Date,
  schoolId: mongoose.Schema.Types.ObjectId,
  deletedAt: Date,
});

const schoolSchema = new mongoose.Schema({
  name: String,
  address: String,
  deletedAt: Date,
});

const User = mongoose.model('User', userSchema);
const Student = mongoose.model('Student', studentSchema);
const School = mongoose.model('School', schoolSchema);

module.exports = { User, Student, School };
