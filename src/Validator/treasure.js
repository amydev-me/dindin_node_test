const Ajv = require('Ajv');

const ajv = new Ajv({allErrors: true});

var schema = require('../ValidationSchema/Treasure');

const validate = ajv.compile(schema);
const validateRequest = () =>{
    return (req, res, next) => {
        const isValid = validate(req.body);
        if(!isValid){
            return res.send(validate.errors);
        }
        next();
    };
 }
module.exports = {
    validateRequest
}