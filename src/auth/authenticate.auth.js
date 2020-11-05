const JWT = require('../utils/token');
const hash = require('../utils/encrypt');
const ERR = require('../utils/errorTypes');
const userRepository = require('../repositories/users.repository');

const login = async (email, password) => {
  const user = await userRepository.findByEmail(email);
  const passCheck = await hash.compare(password, user.password);

  if (passCheck === false) {
    throw { error: new Error(), func: ERR.types.INVALID_CREDENTIALS };
  }

  const tokenPayload = {
    iss: JWT.DEFAULT_ISSUER,
    sub: user.id,
    exp: JWT.LOGIN_EXP_TIME,
  };
  userRepository.setCache(user);
  return JWT.generate(tokenPayload);
};

module.exports = {
  login,
};
