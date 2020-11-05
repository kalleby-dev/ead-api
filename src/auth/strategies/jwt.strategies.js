// JWT auth SCHEMA
const Cache = require('../../repositories/cache.repository');

module.exports = {
  name: 'jwt-auth',
  schema: 'jwt',
  options: {
    key: process.env.SECRET_KEY,
    validate: async (decoded, header) => {
      const isLogged = await Cache.exists(Cache.PREFIX.blacklistToken(header.auth.token));
      return { isValid: !isLogged };
    },
  },
};
