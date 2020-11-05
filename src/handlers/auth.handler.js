const ERR = require('../utils/errorTypes');
const auth = require('../auth/authenticate.auth');
const { setCache } = require('../repositories/users.repository');

const login = async (req, res) => {
  try {
    const { email, password } = req.payload;
    const { user, token } = await auth.login(email, password);

    setCache(user);
    return res.response({ token }).code(200);
  } catch (err) {
    return ERR.send(err);
  }
};

const logout = async (req, res) => {
  const { credentials, token } = req.auth;
  try {
    console.log(credentials);
    return res.response({ credentials, token }).code(200);
  } catch (err) {
    return ERR.send(err);
  }
};

module.exports = {
  login,
  logout,
};
