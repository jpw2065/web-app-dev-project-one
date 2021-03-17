const http = require('http');
const router = require('./Services/router.js');
const convertReponseMiddleware = require('./Middleware/convertResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const middlewareStack = [
  convertReponseMiddleware,
];

/**
 * Call a method on the middleware stack. Used for inbound, and outbound calls.
 * @param {http.ClientRequest} request 
 * @param {http.ServerResponse} response
 * @param {string} methodCalledOnMiddleware 
 */
const callMiddlewareStack = (request, response, methodCalledOnMiddleware) => {
  for (let i = 0; i < middlewareStack.length; i++) {
    middlewareStack[i][methodCalledOnMiddleware](request, response);
  }
};

/**
 * Handlem an incoming request
 * @param {http.ClientRequest} request 
 * @param {http.ServerResponse} response
 */
const onRequest = (request, response) => {
  callMiddlewareStack(request, response, 'inbound');

  router.route(request, response).then(() => {
    callMiddlewareStack(request, response, 'outbound');
    response.end();
  });
};

http.createServer(onRequest).listen(port);
