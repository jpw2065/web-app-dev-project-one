const users = {};
let lastId = 0;

function index(request, response) {
  response.responseData = { status: 200, body: users };
}

function store(request, response, args) {
  lastId++;
  users[lastId] = args;

  response.responseData = { status: 201, body: users[lastId] };
}

function show(request, response, args) {
  if (!users[args.id]) {
    response.responseData = { status: 404, body: { message: 'Could not find user with ID!' } };
  } else {
    response.responseData = { status: 200, body: users[args.id] };
  }
}

// function update(request, response, args) {

// }

// function destroy(request, response, args) {

// }

module.exports.index = index;
module.exports.store = store;
module.exports.show = show;
// module.exports.update = update;
// module.exports.destroy = destroy;
