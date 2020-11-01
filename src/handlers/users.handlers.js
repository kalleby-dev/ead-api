const boom = require('@hapi/boom');
const usersRepository = require('../repositories/users.repository');
const ERR = require('../utils/errorTypes');

const create = async (req, res) => {
  try {
    const user = await usersRepository.create(req.payload);
    return res.response(user).code(201);
  } catch (err) {
    switch (err.message) {
      case ERR.DUPLICATED_EMAIL:
        return boom.badData('This e-mail already exists');

      default:
        return boom.badImplementation(err);
    }
  }
};

module.exports = {
  create,
};
