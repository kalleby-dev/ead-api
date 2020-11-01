const usersRepository = require('../repositories/users.repository');
const ERR = require('../utils/errorTypes');

const create = async (req, res) => {
  try {
    const user = await usersRepository.create(req.payload);
    return res.response(user).code(201);
  } catch (err) {
    return ERR.send(err);
  }
};

module.exports = {
  create,
};
