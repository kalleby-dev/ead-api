const usersHandler = require('../handlers/users.handlers');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: usersHandler.create,
  },
];
