const JWT = require('../utils/token');
const hash = require('../utils/encrypt');
const ERR = require('../utils/errorTypes');
const cache = require('../repositories/cache.repository');
const { findByEmail, delCache } = require('../repositories/users.repository');

const login = async (email, password) => {
  const user = await findByEmail(email);
  const passCheck = await hash.compare(password, user.password);

  if (passCheck === false) {
    throw { error: new Error(), func: ERR.types.INVALID_CREDENTIALS };
  }

  const tokenPayload = {
    iss: JWT.DEFAULT_ISSUER,
    sub: user.id,
    exp: JWT.LOGIN_EXP_TIME,
  };

  const token = await JWT.generate(tokenPayload);
  return {
    user,
    token,
  };
};

const logout = (userId, token) => {
  delCache(userId);
  cache.set(cache.PREFIX.blacklistToken(token), 1, JWT.LOGIN_EXP_TIME);
};

module.exports = {
  login,
  logout,
};
