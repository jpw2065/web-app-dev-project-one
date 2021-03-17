const validatorService = require('../Services/validation');

const companies = [];
let lastId = 0;



/**
 * Find the company with the id.
 * @param {string} userId 
 * @returns 
 */
function findCompany(companyId) {
  const foundCompany = companies.filter((company) => company.id === companyId);
  return foundCompany.length > 0 ? foundCompany[0] : null;
}



/**
 * Error could not find user.
 * @param {string} errorMessageText 
 * @param {http.ServerResponse} response
 */
function returnCouldNotFindCompany(response) {
  response.responseData = { status: 404, body: { message: 'Could not find company with ID!' } };
}



/**
 * Error message for validation error
 * @param {string} errorMessageText 
 * @param {http.ServerResponse} response
 */
function validatorError(errorMessageText, response) {
  response.responseData = {
    status: 400,
    body: { message: errorMessageText + validatorService.errorsToString() },
  };
}



/**
 * Search for the name in the companies array. Filter response
 * @param {string} name 
 * @returns 
 */
function searchByName(name) {
  return companies.filter((company) => company.name.includes(name));
}

/**
 * INDEX: Get a list of all companies.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 */
function index(request, response, args) {
  let returnedCompanies = companies;
  if (args.search) returnedCompanies = searchByName(args.search);

  response.responseData = { status: 200, body: returnedCompanies };
}

/**
 * STORE: Create a new company
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function store(request, response, args) {
  validatorService.validate(args,
    ['contact_name', 'contact_email', 'contact_phone', 'name', 'industry', 'size', 'address', 'info'],
    ['name', 'industry', 'size', 'address']);

  if (validatorService.getError()) {
    validatorError('Could not create company.', response);
  } else {
    const validatedValues = validatorService.getValues();

    lastId++;
    validatedValues.id = lastId.toString();
    companies.push(validatedValues);

    response.responseData = { status: 201, body: args };
  }
}

/**
 * SHOW: Get a single company.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function show(request, response, args) {
  const company = findCompany(args.id);

  if (!company) {
    returnCouldNotFindCompany(response);
  } else {
    response.responseData = { status: 200, body: company };
  }
}

/**
 * UPDATE: Update a companies values.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function update(request, response, args) {
  validatorService.validate(args,
    ['id', 'contact_name', 'contact_email', 'contact_phone', 'name', 'industry', 'size', 'address', 'info'],
    ['id']);

  if (validatorService.getError()) {
    validatorError('Could not update company.', response);
  } else {
    const validatedValues = validatorService.getValues();
    const company = findCompany(validatedValues.id);

    if (!company) {
      returnCouldNotFindCompany(response);
    } else {
      const updatedCompany = { ...company, ...validatedValues };

      companies[companies.indexOf(company)] = updatedCompany;
      response.responseData = { status: 201, body: updatedCompany };
    }
  }
}

/**
 * DESTROY: Remove a company.
 * @param {http.ClientRequest} request
 * @param {http.ServerResponse} response
 * @param {array} args
 */
function destroy(request, response, args) {
  const company = findCompany(args.id);

  if (!company) {
    returnCouldNotFindCompany(response);
  } else {
    const companyIndex = companies.indexOf(company);
    companies.splice(companyIndex, 1);

    response.responseData = { status: 204 };
  }
}

module.exports.index = index;
module.exports.store = store;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
