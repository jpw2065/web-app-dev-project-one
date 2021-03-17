const doesNotExist = (request, response) => {
  response.responseData = { status: 404, body: 'Page you are requesting was not found.' };
};

module.exports.doesNotExist = doesNotExist;
