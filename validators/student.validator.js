// Import Joi library for input validation
const Joi = require('joi');

/**
 * Joi validation schema for creating or updating a Student.
 * 
 * Fields:
 * - firstName: Required string, student's first name.
 * - lastName: Required string, student's last name.
 * - email: Required string in valid email format.
 * - dateOfBirth: Optional date, student's birthdate.
 * - schoolId: Required string, references the School the student belongs to.
 * 
 * This schema helps validate incoming student data to ensure it
 * follows the expected structure before storing it in the database.
 */
exports.studentInputSchema = Joi.object({
  firstName: Joi.string().required(),      // `firstName` is required and must be a string
  lastName: Joi.string().required(),       // `lastName` is required and must be a string
  email: Joi.string().email().required(),  // `email` is required and must be a valid email address
  dateOfBirth: Joi.date().optional(),      // `dateOfBirth` is optional but must be a valid date if provided
  schoolId: Joi.string().required()        // `schoolId` is required and must be a string (MongoDB ObjectId in string format)
});
