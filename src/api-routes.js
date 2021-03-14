const userController = require('./Controllers/user.js');

const routes = [

  ['GET', '/api/users', userController.index],
  ['POST', '/api/users', userController.store],
  ['GET', '/api/users/{id}', userController.show],
  // ['PATCH', 'api/users/{id}', userController.update],
  // ['DELETE', 'api/users/{id}', userController.destroy],

  // ['GET', 'api/companies', companyController.index],
  // ['POST', 'api/companies', companyController.store],
  // ['GET', 'api/companies/{id}', companyController.show],
  // ['PATCH', 'api/companies/{id}', companyController.update],
  // ['DELETE', 'api/companies/{id}', companyController.destroy]

];

module.exports.routes = routes;
