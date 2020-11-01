const bcrypt = require('bcryptjs');

const hash = (value) => bcrypt.hash(value, 10);

const compare = (value, hashValue) => bcrypt.compare(value, hashValue);

module.exports = {
  hash,
  compare,
};
