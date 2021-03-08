const users = {};
let lastId = 0;

function index(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(users));
  response.end();
}

function store(request, response, args) {
  lastId++;
  users[lastId] = args;

  response.writeHead(201, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(users[lastId]));
  response.end();
}

function show(request, response, args) {
  if (!users[args.id]) {
    response.writeHead(404);
    response.end();
  } else {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(users[args.id]));
    response.end();
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
