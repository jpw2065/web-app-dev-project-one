
const validatorService = require('../Services/validation');

const users = [];
let lastId = 0;

function index(request, response) {
  response.responseData = { status: 200, body: users };
}

function store(request, response, args) {

  validatorService.validate(args, 
    {
      "name"  : "notnull|required",
      "email" : "notnull|required",
      "phone" : "notnull|required",
      "trade" : "notnull|required",
      "info"  : "notnull",
    });

  if(validatorService.hadError())
  {
    response.responseData = { status: 400, body: {message: "Could not create user."} };
  }
  else
  {
    lastId++;
    args['id'] = lastId.toString();
    users.push(args);

    response.responseData = { status: 201, body: args };
  }

}

function show(request, response, args) {

  let user = users.filter(function(user) {
    return user.id === args.id;
  });

  if (!user) {
    response.responseData = { status: 404, body: { message: 'Could not find user with ID!' } };
  } else {
    response.responseData = { status: 200, body: user[0] };
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
