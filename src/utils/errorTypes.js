const boom = require('@hapi/boom');

const types = {
  NOT_FOUND: () => boom.notFound('Data not found or dosen\'t exists'),
  DUPLICATED_EMAIL: () => boom.notFound('This user already exists'),
  INVALID_CREDENTIALS: () => boom.badData('Invalid data'),
};

const send = (error) => {
  if (typeof error.func === 'function') {
    return error.func();
  }
  return boom.badImplementation(error);
};

module.exports = {
  send,
  types,
};
