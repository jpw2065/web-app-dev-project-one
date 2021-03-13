const fs = require('fs'); // pull in the file system module

const indexFile = fs.readFileSync(`${__dirname}/../../client/index.html`);
const cssFile = fs.readFileSync(`${__dirname}/../../client/style.css`);

const index = (request, response) => {
  response.responseData = {status: 200, body: indexFile, type: 'text/html'};
};


const css = (request, response) => {
  response.responseData = {status: 200, body: cssFile, type: 'text/css'};
};

module.exports.index = index;
module.exports.css = css;
