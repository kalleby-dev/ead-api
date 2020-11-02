const boom = require('@hapi/boom');

const types = {
  NOT_FOUND: () => boom.notFound('Data not found'),
  INVALID_CREDENTIALS: () => boom.badData('Invalid data'),
  BAD_TOKEN: () => boom.badImplementation('Token generation error'),
  DUPLICATED_EMAIL: () => boom.badData('This user already exists'),
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
