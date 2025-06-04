// Import the User model from the models directory
const User = require('../models/User');

/**
 * Create a new user in the database.
 * @param {Object} data - The user data (e.g., username, email, password, role, etc.)
 * @returns {Promise<Object>} - The newly created user document
 */
exports.createUser = async (data) => {
  return await User.create(data);
};

/**
 * Update an existing user document by its ID.
 * @param {String} id - The ID of the user to be updated
 * @param {Object} updates - Fields and values to update
 * @returns {Promise<Object|null>} - The updated user document, or null if not found
 */
exports.updateUser = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true }); // `new: true` ensures the returned document is the updated one
};

/**
 * Soft delete a user by setting the `deletedAt` field.
 * The user remains in the database but is excluded from active queries.
 * @param {String} id - The ID of the user to soft delete
 * @returns {Promise<Object|null>} - The updated user document with `deletedAt` set, or null if not found
 */
exports.softDeleteUser = async (id) => {
  return await User.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};

/**
 * Retrieve all users who have not been soft-deleted (i.e., `deletedAt` is null).
 * @returns {Promise<Array>} - List of active user documents
 */
exports.getUsers = async () => {
  return await User.find({ deletedAt: null }); // Filter out users who have been soft-deleted
};

/**
 * Get a user by their ID.
 * Note: This includes both active and soft-deleted users.
 * @param {String} id - The ID of the user to retrieve
 * @returns {Promise<Object|null>} - The user document or null if not found
 */
exports.getUserById = async (id) => {
  return await User.findById(id);
};
