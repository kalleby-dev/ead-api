require('dotenv-safe').config();
require('./services/mongo.service');
const server = require('./server');

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'MAJDEE!',
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
