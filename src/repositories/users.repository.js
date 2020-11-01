const usersModel = require('../models/users.model');
const encrypt = require('../utils/encrypt');
const ERR = require('../utils/errorTypes');

const create = async (data) => {
  const userData = data;

  const exists = await usersModel.exists({ email: userData.email });
  if (exists) throw new Error(ERR.DUPLICATED_EMAIL);

  userData.password = await encrypt.hash(userData.password, 10);
  const user = new usersModel(userData);
  return user.save();
};

const findByEmail = async (email) => {
  const user = await usersModel.find({ email });

  if (Array.isArray(user) === false || user.length === 0) {
    throw new Error(ERR.NOT_FOUND);
  }
  return user;
};

module.exports = {
  create,
  findByEmail,
};
