/* Users Validation schema */
const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi.string().min(3).required(),
  dateOfBirth: Joi.date().iso(),
  docType: Joi.string(),
  docNumber: Joi.string().min(3),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  status: Joi.string(),
  address: {
    street: Joi.string(),
    country: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
    zipCode: Joi.string(),
    number: Joi.string(),
    complement: Joi.string(),
  },
  timestamps: Joi.any().forbidden,
});
