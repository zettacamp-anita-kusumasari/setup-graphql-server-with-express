const School = require('../models/School');

exports.createSchool = async (data) => {
  return await School.create(data);
};

exports.updateSchool = async (id, updates) => {
  return await School.findByIdAndUpdate(id, updates, { new: true });
};

exports.softDeleteSchool = async (id) => {
  return await School.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};

exports.getSchools = async () => {
  return await School.find({ deletedAt: null });
};

exports.getSchoolById = async (id) => {
  return await School.findById(id);
};