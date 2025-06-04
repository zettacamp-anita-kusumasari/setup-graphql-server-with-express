const Joi = require('joi');

exports.studentInputSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().optional(),
  schoolId: Joi.string().required()
});