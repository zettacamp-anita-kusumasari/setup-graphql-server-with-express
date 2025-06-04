// *************** IMPORT DATA LOADER ***************
const DataLoader = require('dataloader');
// *************** IMPORT STUDENT MODELS ***************
const Student = require('../models/Student');

/**
 * This function batches student records based on a list of school IDs.
 * It is used by DataLoader to minimize redundant database calls.
 *
 * @param {Array} schoolIds - An array of school ID values to fetch students for
 * @returns {Array} - An array where each element is an array of students belonging to the corresponding schoolId
 */
const batchStudentsBySchoolId = async (schoolIds) => {
  // Query all students that belong to any of the given schoolIds and are not soft-deleted
  const students = await Student.find({ schoolId: { $in: schoolIds }, deletedAt: null });

  // Map each schoolId to its corresponding list of students
  const studentsMap = schoolIds.map(id =>
    students.filter(student => student.schoolId.toString() === id.toString())
  );

  return studentsMap; // Return a nested array matching the order of input schoolIds
};

// Export the DataLoader instance with the batching function
// This loader can be used in resolvers to batch and cache student fetching by schoolId
module.exports = {
  studentsLoader: new DataLoader(batchStudentsBySchoolId)
};
