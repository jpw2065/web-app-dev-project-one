const fileController = require('./Controllers/file.js');

const routes = [

  ['GET', '/', fileController.index],
  ['GET', '/index', fileController.index],

  ['GET', '/users', fileController.users],
  ['GET', '/users/new', fileController.newUser],
  ['GET', '/users/{id}', fileController.user],
  ['GET', '/users/{id}/edit', fileController.userEdit],

  ['GET', '/companies', fileController.companies],
  ['GET', '/companies/new', fileController.newCompany],
  ['GET', '/companies/{id}', fileController.companies],
  ['GET', '/companies/{id}/edit', fileController.companyEdit],

  ['GET', '/style.css', fileController.css],
  ['GET', '/bundle.js', fileController.js],
  
];

module.exports.routes = routes;
