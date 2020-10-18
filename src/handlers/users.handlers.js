const usersRepository = require('../repositories/users.repository');

const create = async (req, res) => {
  const user = await usersRepository.create(req.payload);
  return res.response(user).code(201);
};

module.exports = {
  create,
};
