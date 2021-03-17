const convertJSON = (body) => JSON.stringify(body);

const convertXML = (body) => {
  let xmlString = '<response>';
  const keys = Object.keys(body);

  for (let i = 0; i < keys.length; i++) {
    xmlString += `<${keys[i]}> ${body[keys[i]]} </${keys[i]}>`;
  }

  xmlString += '</response>';

  return xmlString;
};

const convertBody = (body) => {
  let parsedBody = body;
  if (!(body instanceof Buffer) && !(typeof body === 'string')) {
    parsedBody = convertJSON(body);
  }

  return parsedBody;
};

const bodyParse = (body, type) => {
  switch (type) {
    case 'application/json':
      return convertJSON(body);
    case 'application/xml':
      return convertXML(body);
    default:
      return convertBody(body);
  }
};

const inbound = () => {
};

const outbound = (request, response) => {
  const { responseData } = response;

  if (!Object.prototype.hasOwnProperty.call(responseData, 'status')) {
    responseData.status = 500;
    responseData.body = "{ id='Controller did not return a status', message: 'Could not find status on response'}";
    responseData.type = 'application/json';
  }

  if (!Object.prototype.hasOwnProperty.call(responseData, 'type')) {
    const requestType = request.headers.accept.split(',')[0];

    if (requestType === '*/*') {
      responseData.type = 'application/json';
    } else {
      responseData.type = requestType;
    }
  }

  let headers = { 'Content-Type': responseData.type };
  if (Object.prototype.hasOwnProperty.call(responseData, 'header')) {
    headers = {
      ...headers,
      ...responseData.header,
    };
  }

  response.writeHead(responseData.status, headers);

  if (Object.prototype.hasOwnProperty.call(responseData, 'body')) {
    response.write(bodyParse(responseData.body, responseData.type));
  }
};

module.exports.inbound = inbound;
module.exports.outbound = outbound;
