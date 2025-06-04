const User = require('../models/User');

exports.createUser = async (data) => {
  return await User.create(data);
};

exports.updateUser = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true });
};

exports.softDeleteUser = async (id) => {
  return await User.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};

exports.getUsers = async () => {
  return await User.find({ deletedAt: null });
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};