const Joi = require('joi');

exports.schoolInputSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().optional()
});