const Student = require('../models/Student');

exports.createStudent = async (data) => {
  return await Student.create(data);
};

exports.updateStudent = async (id, updates) => {
  return await Student.findByIdAndUpdate(id, updates, { new: true });
};

exports.softDeleteStudent = async (id) => {
  return await Student.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};

exports.getStudents = async () => {
  return await Student.find({ deletedAt: null });
};

exports.getStudentById = async (id) => {
  return await Student.findById(id);
};