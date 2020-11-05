// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv-safe').config();
require('./services/mongo.service');
require('./services/redis.service').connect();

const hapiAuthJwt2 = require('hapi-auth-jwt2');
const jwtStrategy = require('./auth/strategies/jwt.strategies');
const server = require('./server');
const routes = require('./routes');

const init = async () => {
  server.route(routes);

  // JWT auth config
  await server.register(hapiAuthJwt2);
  server.auth.strategy(jwtStrategy.name, jwtStrategy.schema, jwtStrategy.options);
  server.auth.default(jwtStrategy.name);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
