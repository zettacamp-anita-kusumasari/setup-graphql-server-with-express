// Import Joi library for input validation
const Joi = require('joi');

/**
 * Joi validation schema for creating or updating a User.
 * 
 * Fields:
 * - firstName: Required string, user's first name.
 * - lastName: Required string, user's last name.
 * - email: Required string in valid email format.
 * - password: Required string with a minimum length of 6 characters.
 * - role: Required string, must be either "admin" or "user".
 * 
 * This schema ensures that user data is properly structured and safe
 * before it's used for registration, updates, or other backend operations.
 */
exports.userInputSchema = Joi.object({
  firstName: Joi.string().required(),                // `firstName` is required and must be a string
  lastName: Joi.string().required(),                 // `lastName` is required and must be a string
  email: Joi.string().email().required(),            // `email` is required and must be a valid email address
  password: Joi.string().min(6).required(),          // `password` is required, must be at least 6 characters
  role: Joi.string().valid("admin", "user").required() // `role` must be either "admin" or "user"
});
