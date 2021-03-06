const url = require('url');
const query = require('querystring');
const sizeof = require('object-sizeof');

const webRoutes = require('../web-routes.js');
const apiRoutes = require('../api-routes.js');

const errorController = require('../Controllers/error.js');

const dneUrl = errorController.doesNotExist;



/**
 * Route any POST, PATCH request
 * @param {http.ClientRequest} request 
 * @param {http.ServerResponse} response
 * @param {array} resolvedRoute - {controller: controllerMethod,
 *                                       args: Arguments passed into the route}
 * @returns Promise
 */
function routePostOrPatch(request, response, resolvedRoute) {
  return new Promise((resolve) => {
    const body = [];

    request.on('error', () => {
      response.responseData = { status: 400 };
    });

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);
      const mergeParams = {
        ...bodyParams,
        ...resolvedRoute.args,
      };

      resolvedRoute.controller(request, response, mergeParams);

      resolve('Route Found');
    });
  });
}



/**
 * Route any HEAD request
 * @param {http.ClientRequest} request 
 * @param {http.ServerResponse} response
 * @param {array} resolvedRoute - {controller: controllerMethod,
 *                                       args: Arguments passed into the route}
 * @returns Promise
 */
function routeHead(request, response, resolvedRoute) {
  return new Promise((resolve) => {
    resolvedRoute.controller(request, response, resolvedRoute.args);

    const responseStatus = response.responseData.status;
    const responseBody = response.responseData.body;

    response.responseData = { status: responseStatus, header: { 'Content-Length': sizeof(responseBody) } };
    resolve('Route Found');
  });
}



/**
 * Route any request that is not POST, PATCH, or HEAD
 * @param {http.ClientRequest} request 
 * @param {http.ServerResponse} response
 * @param {array} resolvedRoute - {controller: controllerMethod,
 *                                       args: Arguments passed into the route}
 * @returns Promise
 */
function routeDefault(request, response, resolvedRoute) {
  return new Promise((resolve) => {
    const queryParameters = url.parse(request.url, true).query;
    const mergeParams = {
      ...queryParameters,
      ...resolvedRoute.args,
    };

    resolvedRoute.controller(request, response, mergeParams);
    resolve('Route Found');
  });
}



/**
 * Handle the route if it is either a GET or POST route. We have to use a special setup
 * for POST requests where we listen to the response coming in.
 * @param {http.ClientRequest} request - The request into the program.
 * @param {http.ServerResponse} response - The response from the program.
 * @param {array} resolvedRoute - {controller: controllerMethod,
 *                                       args: Arguments passed into the route}
 */
function handleRoute(request, response, resolvedRoute) {
  switch (request.method) {
    case 'POST':
    case 'PATCH':
      return routePostOrPatch(request, response, resolvedRoute);
    case 'HEAD':
      return routeHead(request, response, resolvedRoute);
    default:
      return routeDefault(request, response, resolvedRoute);
  }
}



/**
 * Clean the route trailing slashes, and the beginning slashes.
 * This is so we can split the route easier in the wildcard methods.
 * @param {string} uncleanedRoute
 * @returns
 */
function cleanRoute(uncleanedRoute) {
  return uncleanedRoute.replace(/\/+$/, '').replace(/^\/+/, '');
}



/**
 * Test to see if the route is matches a wildcard route.
 * @param {string} templateRoute - Route we are testing against
 * @param {string} incomingRoute - Route that is incoming into the application.
 * @returns
 */
function isWildcardRoute(templateRoute, incomingRoute) {
  const templateRouteCleaned = templateRoute.split('/');
  const incomingRouteCleaned = incomingRoute.split('/');

  if (templateRouteCleaned.length !== incomingRouteCleaned.length) return false;

  for (let i = 0; i < templateRouteCleaned.length; i++) {
    if (templateRouteCleaned[i] !== incomingRouteCleaned[i]
        && !/^\{.*\}$/.test(templateRouteCleaned[i])) return false;
  }

  return true;
}



/**
 * Test to see if the template ruote matches the incoming route,
 * or if the template route is a wild card route.
 * @param {string} templateRoute - Route we are testing agaisnt
 * @param {string} incomingRoute - Route that is incoming into the application
 * @returns
 */
function templateMatchesIncoming(templateRoute, incomingRoute) {
  const templateRouteClean = cleanRoute(templateRoute);
  const incomingRouteClean = cleanRoute(incomingRoute);

  return templateRouteClean === incomingRouteClean
            || isWildcardRoute(templateRouteClean, incomingRouteClean);
}



/**
 * Get the route parameters from the matching template route.
 * @param {string} templateRoute - Route we are testing against
 * @param {string} incomingRoute - Route that is coming into the applicationo
 * @returns
 */
function getRouteParameters(templateRoute, incomingRoute) {
  const params = {};

  const templateRouteCleaned = templateRoute.split('/');
  const incomingRouteCleaned = incomingRoute.split('/');

  for (let i = 0; i < templateRouteCleaned.length; i++) {
    if (/^\{.*\}$/.test(templateRouteCleaned[i])) {
      const routeParameterName = templateRouteCleaned[i]
        .substring(1, templateRouteCleaned[i].length - 1);
      params[routeParameterName] = incomingRouteCleaned[i];
    }
  }

  return params;
}



/**
 * Find the route
 * @param {string} method - Route method (POST, GET)
 * @param {string} incomingRoute - Requested route path
 * @returns { controller: controllerMethod, args: Arguments past into route}
 */
function findRoute(method, incomingRoute) {
  const templateRoutes = webRoutes.routes.concat(apiRoutes.routes);

  for (let i = 0; i < templateRoutes.length; i++) {
    const templateRoute = templateRoutes[i];

    if (method === templateRoute[0] && templateMatchesIncoming(templateRoute[1], incomingRoute)) {
      const routeParams = getRouteParameters(templateRoute[1], incomingRoute);

      return { controller: templateRoute[2], args: routeParams };
    }
  }

  return { controller: dneUrl, args: {} };
}



/**
 * Handle the incoming request.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 */
function route(request, response) {
  const parsedUrl = url.parse(request.url);
  const incomingRoute = parsedUrl.pathname;

  return handleRoute(request, response, findRoute(request.method, incomingRoute));
}

module.exports.route = route;
