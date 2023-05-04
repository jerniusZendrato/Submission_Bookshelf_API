/* eslint-disable import/no-unresolved */
const Hapi = require('@hapi/hapi');

// eslint-disable-next-line import/extensions
const routes = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
