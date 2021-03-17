const fileController = require('./Controllers/file.js');

const routes = [

  ['GET', '/', fileController.index],
  ['GET', '/index', fileController.index],

  ['GET', '/users', fileController.users],
  ['GET', '/users/new', fileController.newUser],
  ['GET', '/users/{id}', fileController.user],
  ['GET', '/users/{id}/edit', fileController.editUser],

  ['GET', '/companies', fileController.companies],
  ['GET', '/companies/new', fileController.newCompany],
  ['GET', '/companies/{id}', fileController.company],
  ['GET', '/companies/{id}/edit', fileController.editCompany],

  ['GET', '/style.css', fileController.css],
  ['GET', '/logo.svg', fileController.svg],
  ['GET', '/bundle.js', fileController.js],

];

module.exports.routes = routes;
