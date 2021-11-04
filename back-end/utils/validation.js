const Joi = require('joi');

const validateTask = Joi.object({
  task: Joi.string().required(),
  userId: Joi.string().required(),
});

module.exports = {
  validateTask,
};
