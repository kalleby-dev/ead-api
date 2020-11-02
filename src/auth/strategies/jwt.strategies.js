module.exports = {
  name: 'jwt-auth',
  schema: 'jwt',
  options: {
    key: process.env.SECRET_KEY,
    validate: () => ({ isValid: true }),
  },
};
