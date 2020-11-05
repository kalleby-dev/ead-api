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

module.exports = {
  login,
};
