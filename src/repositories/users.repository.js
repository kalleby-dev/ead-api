const usersModel = require('../models/users.model');
const encrypt = require('../utils/encrypt');
const { ERROR_TYPES } = require('../utils/errorTypes');

const create = async (data) => {
  const userData = data;

  const exists = await usersModel.exists({ email: userData.email });
  if (exists) throw new Error(ERROR_TYPES.DUPLICATED_EMAIL);

  userData.password = await encrypt.hash(userData.password, 10);
  const user = new usersModel(userData);
  return user.save();
};

const findByEmail = async (email) => {
  const user = await usersModel.findOne({ email });

  if (user === null) {
    throw new Error(ERROR_TYPES.NOT_FOUND);
  }

  return user;
};

module.exports = {
  create,
  findByEmail,
};
