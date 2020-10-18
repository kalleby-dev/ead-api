const usersModel = require('../models/users.model');

const create = (userData) => {
  const user = new usersModel(userData);
  return user.save();
};

module.exports = {
  create,
};
