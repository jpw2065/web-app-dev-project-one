let validFields; let error; let
  errorMessages;



/**
 * Set an error message from the validator.
 * @param {string} message 
 */
const setError = (message) => {
  error = true;
  errorMessages.push(message);
};



/**
 * Reset the service
 */
const resetService = () => {
  validFields = {};
  error = false;
  errorMessages = [];
};



/**
 * Test input object against the required fields.
 * @param {Object} object 
 * @param {Array} requiredFields 
 */
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



/**
 * Remove an unused parameters from the input object
 * @param {Object} object 
 * @param {Array} allFields 
 */
const removeUnusedParams = (object, allFields) => {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    const parameter = keys[i];
    if (allFields.includes(parameter)) {
      validFields[parameter] = object[parameter];
    }
  }
};



/**
 * Validate the incoming data against required rules, also remove extraneous values
 * @param {Object} object Incoming data
 * @param {Array} allFields 
 * @param {Array} requiredFields 
 */
const validate = (object, allFields, requiredFields) => {
  resetService();
  testRequiredFields(object, requiredFields);
  removeUnusedParams(object, allFields);
};



/**
 * Get if the validator returned an error.
 * @returns 
 */
const getError = () => error;



/**
 * Get the errors as a string.
 * @returns 
 */
const errorsToString = () => errorMessages.join(', ');



/**
 * Get the validated fields.
 * @returns validFields
 */
const getValues = () => validFields;

module.exports.validate = validate;
module.exports.getError = getError;
module.exports.errorsToString = errorsToString;
module.exports.getValues = getValues;
