const hash = require('../utils/encrypt');
const ERR = require('../utils/errorTypes');
const { findByEmail } = require('../repositories/users.repository');

const login = async (email, password) => {
  const user = await findByEmail(email);
  const passCheck = await hash.compare(password, user.password);

  if (passCheck === false) {
    throw { error: new Error(), func: ERR.types.INVALID_CREDENTIALS };
  }

  return true;
};

module.exports = {
  login,
};
