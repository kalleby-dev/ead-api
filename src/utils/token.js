const JWT = require('jsonwebtoken');
const ERR = require('./errorTypes');

const generate = (payload) => (
  new Promise((resolve) => {
    JWT.sign(payload, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        throw { error: new Error(), func: ERR.types.BAD_TOKEN };
      }

      resolve(token);
    });
  })
);

module.exports = {
  generate,
  BASE_TIME: Math.floor(Date.now() / 1000),
  LOGIN_EXP_TIME: Math.floor(Date.now() / 1000) + 3600,
  DEFAULT_ISSUER: 'ead-api',
};
