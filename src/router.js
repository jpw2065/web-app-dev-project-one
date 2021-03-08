const url = require('url');
const query = require('querystring');
const fileController = require('./Controllers/file.js');
const errorController = require('./Controllers/error.js');
const userController = require('./Controllers/user.js');
// var companyController = require('./Controllers/company.js');

const webUrlStruct = [

  ['GET', '/', fileController.index],
  ['GET', '/index', fileController.index],
  ['GET', '/style.css', fileController.css],
];

const apiUrlStruct = [

  ['GET', '/users', userController.index],
  ['POST', '/users', userController.store],
  ['GET', '/users/{id}', userController.show],
  // ['PATCH', '/users/{id}', userController.update],
  // ['DELETE', '/users/{id}', userController.destroy],

  // ['GET', '/companies', companyController.index],
  // ['POST', '/companies', companyController.store],
  // ['GET', '/companies/{id}', companyController.show],
  // ['PATCH', '/companies/{id}', companyController.update],
  // ['DELETE', '/companies/{id}', companyController.destroy]

];

const dneUrl = errorController.doesNotExist;

function handleRoute(request, response, resolvedRoute) {
  if (request.method === 'POST') {
    const body = [];

    request.on('error', (err) => {
      console.dir(err);
      response.statusCode = 400;
      response.end();
    });

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);

      resolvedRoute.controller(request, response, bodyParams);
    });
  } else {
    resolvedRoute.controller(request, response, resolvedRoute.args);
  }
}

function cleanRoute(uncleanedRoute) {
  return uncleanedRoute.replace(/\/+$/, '').replace(/^\/+/, '');
}

function isWildcardRoute(templateRoute, incomingRoute) {
  const templateRouteCleaned = templateRoute.split('/');
  const incomingRouteCleaned = incomingRoute.split('/');

  if (templateRouteCleaned.length !== incomingRouteCleaned.length) return false;

  for (let i = 0; i < templateRouteCleaned.length; i++) {
    if (templateRouteCleaned[i] !== incomingRouteCleaned[i] && !/^\{.*\}$/.test(templateRouteCleaned[i])) return false;
  }

  return true;
}

function templateMatchesIncoming(templateRoute, incomingRoute) {
  const templateRouteClean = cleanRoute(templateRoute);
  const incomingRouteClean = cleanRoute(incomingRoute);

  return templateRouteClean === incomingRouteClean
            || isWildcardRoute(templateRouteClean, incomingRouteClean);
}

function getRouteParameters(templateRoute, incomingRoute) {
  const params = {};

  const templateRouteCleaned = templateRoute.split('/');
  const incomingRouteCleaned = incomingRoute.split('/');

  for (let i = 0; i < templateRouteCleaned.length; i++) {
    if (/^\{.*\}$/.test(templateRouteCleaned[i])) params[templateRouteCleaned[i].substring(1, templateRouteCleaned[i].length - 1)] = incomingRouteCleaned[i];
  }

  return params;
}

function findRoute(method, incomingRoute) {
  const templateRoutes = webUrlStruct.concat(apiUrlStruct);

  for (let i = 0; i < templateRoutes.length; i++) {
    const templateRoute = templateRoutes[i];

    if (method === templateRoute[0] && templateMatchesIncoming(templateRoute[1], incomingRoute)) {
      const routeParams = getRouteParameters(templateRoute[1], incomingRoute);

      return { controller: templateRoute[2], args: routeParams };
    }
  }

  return { controller: dneUrl, args: {} };
}

function route(request, response) {
  const parsedUrl = url.parse(request.url);
  const incomingRoute = parsedUrl.pathname;

  handleRoute(request, response, findRoute(request.method, incomingRoute));
}

module.exports.route = route;
