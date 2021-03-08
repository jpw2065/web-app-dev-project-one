const doesNotExist = (request, response) => {
  response.writeHead(404);
  response.end();
};

module.exports.doesNotExist = doesNotExist;
