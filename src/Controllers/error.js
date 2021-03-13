const doesNotExist = (request, response) => {
  response.responseData = [404];
};

module.exports.doesNotExist = doesNotExist;
