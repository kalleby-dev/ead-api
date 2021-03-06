const Redis = require('ioredis');
const ERR = require('../utils/errorTypes');

let redis = null;

const connect = () => {
  redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  });
};

const get = () => {
  if (redis === null) {
    throw { err: new Error(), func: ERR.types.REDIS_NOT_INITIALIZED };
  }

  return redis;
};

module.exports = {
  redis,
  connect,
  get,
};
