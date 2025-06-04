// Import the Student model from the models directory
const Student = require('../models/Student');

/**
 * Create a new student document in the database.
 * @param {Object} data - The student data (e.g., name, age, school, etc.)
 * @returns {Promise<Object>} - The newly created student document
 */
exports.createStudent = async (data) => {
  return await Student.create(data);
};

/**
 * Update an existing student document by its ID.
 * @param {String} id - The ID of the student to be updated
 * @param {Object} updates - The fields to be updated
 * @returns {Promise<Object|null>} - The updated student document, or null if not found
 */
exports.updateStudent = async (id, updates) => {
  return await Student.findByIdAndUpdate(id, updates, { new: true }); // `new: true` returns the updated version
};

/**
 * Soft delete a student by setting the `deletedAt` field to the current timestamp.
 * This way the student isn't removed from the database but is excluded from normal queries.
 * @param {String} id - The ID of the student to soft delete
 * @returns {Promise<Object|null>} - The updated student document with `deletedAt`, or null if not found
 */
exports.softDeleteStudent = async (id) => {
  return await Student.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};

/**
 * Get all students that have not been soft deleted (i.e., `deletedAt` is null).
 * @returns {Promise<Array>} - List of active student documents
 */
exports.getStudents = async () => {
  return await Student.find({ deletedAt: null }); // Only return students who are not soft-deleted
};

/**
 * Get a student by their ID.
 * Note: This includes both active and soft-deleted students.
 * @param {String} id - The ID of the student to retrieve
 * @returns {Promise<Object|null>} - The student document or null if not found
 */
exports.getStudentById = async (id) => {
  return await Student.findById(id);
};
