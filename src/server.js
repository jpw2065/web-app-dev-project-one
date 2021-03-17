const http = require('http');
const router = require('./Services/router.js');
const convertReponseMiddleware = require('./Middleware/convertResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const middlewareStack = [
  convertReponseMiddleware,
];

const callMiddlewareStack = (request, response, methodCalledOnMiddleware) => {
  for (let i = 0; i < middlewareStack.length; i++) {
    middlewareStack[i][methodCalledOnMiddleware](request, response);
  }
};

const onRequest = (request, response) => {
  callMiddlewareStack(request, response, 'inbound');

  router.route(request, response).then(() => {
    callMiddlewareStack(request, response, 'outbound');
    response.end();
  });
};

http.createServer(onRequest).listen(port);
