// Import the School model from the models directory
const School = require('../models/School');

/**
 * Create a new school document in the database.
 * @param {Object} data - The data used to create the school (e.g., name, address, etc.)
 * @returns {Promise<Object>} - The newly created school document
 */
exports.createSchool = async (data) => {
  return await School.create(data);
};

/**
 * Update an existing school document by its ID.
 * @param {String} id - The ID of the school to be updated
 * @param {Object} updates - The fields to update
 * @returns {Promise<Object|null>} - The updated school document, or null if not found
 */
exports.updateSchool = async (id, updates) => {
  return await School.findByIdAndUpdate(id, updates, { new: true }); // `new: true` returns the updated document
};

/**
 * Soft delete a school by setting the `deletedAt` field instead of removing it from the database.
 * This allows the record to be preserved but hidden from normal queries.
 * @param {String} id - The ID of the school to soft delete
 * @returns {Promise<Object|null>} - The updated school document with `deletedAt` set, or null if not found
 */
exports.softDeleteSchool = async (id) => {
  return await School.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};

/**
 * Retrieve all schools that have not been soft-deleted.
 * @returns {Promise<Array>} - List of school documents where `deletedAt` is null
 */
exports.getSchools = async () => {
  return await School.find({ deletedAt: null }); // Only return schools not marked as deleted
};

/**
 * Retrieve a specific school by its ID.
 * Note: This returns the school even if it is soft-deleted (deletedAt is set).
 * @param {String} id - The ID of the school to retrieve
 * @returns {Promise<Object|null>} - The school document or null if not found
 */
exports.getSchoolById = async (id) => {
  return await School.findById(id);
};
