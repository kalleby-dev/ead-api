const usersHandler = require('../handlers/users.handlers');
const userSchema = require('../schemas/users.schema');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: usersHandler.create,
    options: {
      validate: {
        payload: userSchema,
      },
    },
  },
];
