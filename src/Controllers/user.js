const validatorService = require('../Services/validation');

const users = [];
let lastId = 0;

function findUser(userId) {
  const foundUser = users.filter((user) => user.id === userId);
  return foundUser.length > 0 ? foundUser[0] : null;
}

function returnCouldNotFindUser(response) {
  response.responseData = { status: 404, body: { message: 'Could not find user with ID!' } };
}

function validatorError(errorMessageText, response) {
  response.responseData = {
    status: 400,
    body: { message: errorMessageText + validatorService.errorsToString() },
  };
}

function searchByName(name) {
  return users.filter((user) => user.name.includes(name));
}

/**
 * INDEX: Get a list of all users.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 */
function index(request, response, args) {
  let returnedUsers = users;
  if (args.search) returnedUsers = searchByName(args.search);

  response.responseData = { status: 200, body: returnedUsers };
}

/**
 * STORE: Create a new user
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function store(request, response, args) {
  validatorService.validate(args,
    ['name', 'email', 'phone', 'trade', 'employed', 'employer', 'info'],
    ['name', 'email', 'phone', 'trade', 'employed']);

  if (validatorService.getError()) {
    validatorError('Could not create user.', response);
  } else {
    const validatedValues = validatorService.getValues();

    lastId++;
    validatedValues.id = lastId.toString();
    users.push(validatedValues);

    response.responseData = { status: 201, body: args };
  }
}

/**
 * SHOW: Get a single user.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function show(request, response, args) {
  const user = findUser(args.id);

  if (!user) {
    returnCouldNotFindUser(response);
  } else {
    response.responseData = { status: 200, body: user };
  }
}

/**
 * UPDATE: Update a users values.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function update(request, response, args) {
  validatorService.validate(args,
    ['id', 'name', 'email', 'phone', 'trade', 'employed', 'employer', 'info'],
    ['id']);

  if (validatorService.getError()) {
    validatorError('Could not update user.', response);
  } else {
    const validatedValues = validatorService.getValues();
    const user = findUser(validatedValues.id);

    if (!user) {
      returnCouldNotFindUser(response);
    } else {
      const updatedUser = { ...user, ...validatedValues };

      users[users.indexOf(user)] = updatedUser;
      response.responseData = { status: 201, body: updatedUser };
    }
  }
}

/**
 * DESTROY: Remove a user.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function destroy(request, response, args) {
  const user = findUser(args.id);

  if (!user) {
    returnCouldNotFindUser(response);
  } else {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);

    response.responseData = { status: 204 };
  }
}

module.exports.index = index;
module.exports.store = store;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
