const fs = require('fs'); // pull in the file system module

const indexFile = fs.readFileSync(`${__dirname}/../../client/index.html`);

const userFile = fs.readFileSync(`${__dirname}/../../client/html/users/user.html`);
const usersFile = fs.readFileSync(`${__dirname}/../../client/html/users/users.html`);
const newUserFile = fs.readFileSync(`${__dirname}/../../client/html/users/new-user.html`);
const editUserFile = fs.readFileSync(`${__dirname}/../../client/html/users/edit-user.html`);

const companyFile = fs.readFileSync(`${__dirname}/../../client/html/companies/company.html`);
const companiesFile = fs.readFileSync(`${__dirname}/../../client/html/companies/companies.html`);
const newCompanyFile = fs.readFileSync(`${__dirname}/../../client/html/companies/new-company.html`);
const editCompanyFile = fs.readFileSync(`${__dirname}/../../client/html/companies/edit-company.html`);

const cssFile = fs.readFileSync(`${__dirname}/../../client/style.css`);
const jsFile = fs.readFileSync(`${__dirname}/../../client/bundle.js`);
const svgFile = fs.readFileSync(`${__dirname}/../../client/media/logo.svg`);

const index = (request, response) => {
  response.responseData = { status: 200, body: indexFile, type: 'text/html' };
};

const user = (request, response) => {
  response.responseData = { status: 200, body: userFile, type: 'text/html' };
};

const users = (request, response) => {
  response.responseData = { status: 200, body: usersFile, type: 'text/html' };
};

const newUser = (request, response) => {
  response.responseData = { status: 200, body: newUserFile, type: 'text/html' };
};

const editUser = (request, response) => {
  response.responseData = { status: 200, body: editUserFile, type: 'text/html' };
};

const company = (request, response) => {
  response.responseData = { status: 200, body: companyFile, type: 'text/html' };
};

const companies = (request, response) => {
  response.responseData = { status: 200, body: companiesFile, type: 'text/html' };
};

const newCompany = (request, response) => {
  response.responseData = { status: 200, body: newCompanyFile, type: 'text/html' };
};

const editCompany = (request, response) => {
  response.responseData = { status: 200, body: editCompanyFile, type: 'text/html' };
};

const css = (request, response) => {
  response.responseData = { status: 200, body: cssFile, type: 'text/css' };
};

const js = (request, response) => {
  response.responseData = { status: 200, body: jsFile, type: 'text/javascript' };
};

const svg = (request, response) => {
  response.responseData = { status: 200, body: svgFile, type: 'image/svg+xml' };
};

module.exports.index = index;

module.exports.user = user;
module.exports.users = users;
module.exports.newUser = newUser;
module.exports.editUser = editUser;

module.exports.company = company;
module.exports.companies = companies;
module.exports.newCompany = newCompany;
module.exports.editCompany = editCompany;

module.exports.css = css;
module.exports.js = js;
module.exports.svg = svg;
