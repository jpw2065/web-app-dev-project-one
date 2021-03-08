const fs = require('fs'); // pull in the file system module

const indexFile = fs.readFileSync(`${__dirname}/../../client/client.html`);
const companyFile = fs.readFileSync(`${__dirname}/../../client/client2.html`);
const cssFile = fs.readFileSync(`${__dirname}/../../client/style.css`);

const index = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(indexFile);
  response.end();
};

const companies = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(companyFile);
  response.end();
};

const css = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(cssFile);
  response.end();
};

module.exports.index = index;
module.exports.companies = companies;
module.exports.css = css;
