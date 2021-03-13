const userController = require('./Controllers/user.js');

const routes = [

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

module.exports.routes = routes;
