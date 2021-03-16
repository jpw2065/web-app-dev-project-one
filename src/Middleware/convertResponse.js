const parsedJSON = (body) => JSON.stringify(body);

const parsedXML = (body) => {
  let xmlString = '<response>';
  const keys = Object.keys(body);

  for (let i = 0; i < keys.length; i++) {
    xmlString += `<${keys[i]}> ${body[keys[i]]} </${keys[i]}>`;
  }

  xmlString += '</response>';

  return xmlString;
};

const parsedBody = (body) => {
  if (!(body instanceof Buffer) && !(typeof body === 'string')) {
    body = parsedJSON(body);
  }

  return body;
};

const bodyParse = (body, type) => {
  switch (type) {
    case 'application/json':
      return parsedJSON(body);
    case 'application/xml':
      return parsedXML(body);
    default:
      return parsedBody(body);
  }
};

const inbound = (request, response) => {

};

const outbound = (request, response) => {
  const { responseData } = response;

  if (!responseData.hasOwnProperty('status')) {
    responseData.status = 500;
    responseData.body = "{ id='Controller did not return a status', message: 'Could not find status on response'}";
    responseData.type = 'application/json';
  }

  if (!responseData.hasOwnProperty('type')) {
    let requestType = request.headers.accept.split(',')[0];

    if(requestType === "*/*")
    {
      responseData.type = 'application/json';
    }
    else
    {
      responseData.type = requestType;
    }
  }

  responseData.body = bodyParse(responseData.body, responseData.type);

  response.writeHead(responseData.status, { 'Content-Type': responseData.type });
  response.write(responseData.body);
};

module.exports.inbound = inbound;
module.exports.outbound = outbound;
