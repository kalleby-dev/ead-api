const UserHandler = require('../handlers/users.handlers');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: UserHandler.create,
  },
];
