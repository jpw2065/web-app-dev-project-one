const http = require('http');
const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  router.route(request, response);
};

http.createServer(onRequest).listen(port);
