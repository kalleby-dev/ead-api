const authHandler = require('../handlers/auth.handler');
const authSchema = require('../schemas/auth.schema');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: authHandler.login,
    options: {
      auth: false,
      validate: {
        payload: authSchema,
      },
    },
  },
  {
    method: 'POST',
    path: '/logout',
    handler: authHandler.logout,
  },
];
