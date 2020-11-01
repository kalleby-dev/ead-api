/* Users Validation schema */
const Joi = require('@hapi/joi');

module.exports = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});
