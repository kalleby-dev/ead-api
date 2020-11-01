const boom = require('@hapi/boom');

const ERROR_TYPES = {
  NOT_FOUND: '404',
  DUPLICATED_EMAIL: '422',
  INVALID_CREDENTIALS: '422',
};

const sendError = (exception) => {
  switch (exception.message) {
    case ERROR_TYPES.NOT_FOUND:
      return boom.notFound('This user not exists');

    case ERROR_TYPES.INVALID_CREDENTIALS:
      return boom.badData('Invalid credentials');

    default:
      return boom.badImplementation(exception);
  }
};

module.exports = {
  sendError,
  ERROR_TYPES,
};
