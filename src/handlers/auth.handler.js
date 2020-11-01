const hash = require('../utils/encrypt');
const ERROR = require('../utils/errorTypes');
const { findByEmail } = require('../repositories/users.repository');

const login = async (req, res) => {
  try {
    const data = req.payload;
    const user = await findByEmail(data.email);

    const pwdCheck = await hash.compare(data.password, user.password);

    if (pwdCheck === false) {
      throw new Error(ERROR.ERROR_TYPES.INVALID_CREDENTIALS);
    }

    return res.response('ok').code(200);
  } catch (err) {
    return ERROR.sendError(err);
  }
};

module.exports = {
  login,
};
