const { auth } = require("../server");

const authHandler = require('../handlers/auth.handler');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: authHandler.login,
  },
];
