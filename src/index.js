require('dotenv-safe').config();
require('./services/mongo.service');
const server = require('./server');
const routes = require('./routes');

const init = async () => {
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
