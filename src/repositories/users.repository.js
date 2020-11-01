const usersModel = require('../models/users.model');
const ERR = require('../utils/errorTypes');

const create = async (userData) => {
  const exists = await usersModel.exists({ email: userData.email });
  if (exists) throw new Error(ERR.DUPLICATED_EMAIL);

  const user = new usersModel(userData);
  return user.save();
};

module.exports = {
  create,
};
