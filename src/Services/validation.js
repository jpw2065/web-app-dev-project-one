let validFields; let error; let
  errorMessages;

const setError = (message) => {
  error = true;
  errorMessages.push(message);
};

const resetService = () => {
  validFields = {};
  error = false;
  errorMessages = [];
};

const testRequiredFields = (object, requiredFields) => {
  for (let i = 0; i < requiredFields.length; i++) {
    const testingField = requiredFields[i];

    if (testingField in object && object[testingField] !== '') {
      validFields[testingField] = object[testingField];
    } else {
      setError(` Request did not contain required field: ${testingField}`);
    }
  }
};

const removeUnusedParams = (object, allFields) => {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    const parameter = keys[i];
    if (allFields.includes(parameter)) {
      validFields[parameter] = object[parameter];
    }
  }
};

const validate = (object, allFields, requiredFields) => {
  resetService();
  testRequiredFields(object, requiredFields);
  removeUnusedParams(object, allFields);
};

const getError = () => error;

const errorsToString = () => errorMessages.join(', ');

const getValues = () => validFields;

module.exports.validate = validate;
module.exports.getError = getError;
module.exports.errorsToString = errorsToString;
module.exports.getValues = getValues;
