const ERR = require('../utils/errorTypes');
const auth = require('../auth/authenticate.auth');

const login = async (req, res) => {
  try {
    const { email, password } = req.payload;
    await auth.login(email, password);

    return res.response('Logado com sucesso').code(200);
  } catch (err) {
    return ERR.send(err);
  }
};

module.exports = {
  login,
};
