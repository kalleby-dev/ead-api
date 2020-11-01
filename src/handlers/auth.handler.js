const boom = require('@hapi/boom');
const ERR = require('../utils/errorTypes');
const { findByEmail } = require('../repositories/users.repository');

const login = async (req, res) => {
  try {
    const user = await findByEmail(req.payload.email);
    return res.response('ok').code(200);
  } catch (err) {
    switch (err.message) {
      case ERR.NOT_FOUND:
        return boom.notFound('This user not exists');

      default:
        return boom.badImplementation(err);
    }
  }
};

module.exports = {
  login,
};
