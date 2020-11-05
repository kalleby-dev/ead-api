const Redis = require('../services/redis.service').get();

const set = (key, value, seconds) => {
  Redis.set(key, value, 'EX', seconds);
};

const del = (key) => Redis.del(key);

const exists = (key) => Redis.exists(key);

const toCache = (value) => JSON.stringify(value);

const PREFIX = {
  user: (userId) => `userId:${userId}`,
  blacklistToken: (token) => `blacklistToken:${token}`,
};

module.exports = {
  set,
  del,
  exists,
  toCache,
  PREFIX,
};
