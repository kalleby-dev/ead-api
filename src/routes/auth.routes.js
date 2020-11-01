const authHandler = require('../handlers/auth.handler');
const authSchema = require('../schemas/auth.schema');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: authHandler.login,
    options: {
      validate: {
        payload: authSchema,
      },
    },
  },
];
