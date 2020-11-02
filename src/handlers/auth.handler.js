const ERR = require('../utils/errorTypes');
const auth = require('../auth/authenticate.auth');

const login = async (req, res) => {
  try {
    const { email, password } = req.payload;
    const token = await auth.login(email, password);

    return res.response({ token }).code(200);
  } catch (err) {
    return ERR.send(err);
  }
};

module.exports = {
  login,
};
