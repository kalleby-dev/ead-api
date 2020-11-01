const bcrypt = require('bcryptjs');

const hash = (value) => bcrypt.hash(value, 10);

module.exports = {
  hash,
};
