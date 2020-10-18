const UserModel = require('../models/users.model');

const create = (userData) => {
  const userObject = new UserModel(userData);
  return userObject.save();
};

module.exports = {
  create,
};
