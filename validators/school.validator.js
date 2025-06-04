// Import Joi library for input validation
const Joi = require('joi');

/**
 * Joi validation schema for creating or updating a School.
 * 
 * Fields:
 * - name: Required string, represents the name of the school.
 * - address: Optional string, represents the location/address of the school.
 * 
 * This schema ensures that any data sent to create or update a school
 * meets the expected format and prevents invalid data from being saved.
 */
exports.schoolInputSchema = Joi.object({
  name: Joi.string().required(),     // `name` is required and must be a string
  address: Joi.string().optional()   // `address` is optional but must be a string if provided
});
