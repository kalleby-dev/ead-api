const Redis = require('../services/redis.service').get();

const set = (key, value, seconds) => {
  Redis.set(key, value, 'EX', seconds);
};

const del = (key) => Redis.del(key);

const exists = (key) => Redis.exists(key);

module.exports = {
  set,
  del,
  exists,
};
