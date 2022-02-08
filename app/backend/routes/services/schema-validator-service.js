const Ajv = require('ajv');

const register_car = require('../json-schemas/register_car');
const register_driver = require('../json-schemas/register_driver');
const register = require('../json-schemas/register');
const changePassword = require('../json-schemas/change-password');
const login = require('../json-schemas/login');
const recoverPassword = require('../json-schemas/recover-password');
const newRide = require('../json-schemas/new_ride');

class SchemaValidatorService {

  constructor() {
    this.ajv = Ajv({
      allErrors: true,
      removeAdditional: 'all'
    });

    this.ajv.addSchema(register, 'register');
    this.ajv.addSchema(changePassword, 'change-password');
    this.ajv.addSchema(login, 'login');
    this.ajv.addSchema(recoverPassword, 'recover-password');
    this.ajv.addSchema(register_driver, 'register_driver');
    this.ajv.addSchema(register_car, 'register_car');
    this.ajv.addSchema(newRide, 'new_ride');

  }

  customSchemaValidation(schemaName, body) {
    return new Promise((resolve, reject) => {
      let valid = this.ajv.validate(schemaName, body);
      if (!valid) {
        let error = this.errorResponse(this.ajv.errors);
        error.code = 400;
        return reject(error);
      }
      resolve('success');
    });
  }

  errorResponse(schemaErrors) {
    let errors = schemaErrors.map((error) => {
      return {
        path: error.dataPath.slice(1),
        message: error.message
      };
    });
    return {
      message: 'Validation failed',
      errors: errors
    };
  }
}

module.exports = SchemaValidatorService;
