const fileController = require('./Controllers/file.js');

const routes = [

  ['GET', '/', fileController.index],
  ['GET', '/index', fileController.index],
  ['GET', '/style.css', fileController.css],
  
];

module.exports.routes = routes;
