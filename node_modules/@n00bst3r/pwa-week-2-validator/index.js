const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const bdayValidator = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
const phoneValidator = /^(\+1\s?)?\(?([2-9][0-9]{2})\)?[\s.-]?([2-9][0-9]{2})[\s.-]?([0-9]{4})$/;

const validateInput = (field, value, regex, res, next) => {
  if (!value) {
    return res.status(422).json({
      success: false,
      message: `Please provide a valid ${field}`
    });
  } else if (!regex.test(value)) {
    return res.status(422).json({
      success: false,
      message: `Invalid ${field} provided: ${value}`
    });
  } else {
    next();
  }
};

const validateEmail = (req, res, next) => {
  validateInput('email', req.body.email, emailValidation, res, next);
};

const validatePassword = (req, res, next) => {
  validateInput('password', req.body.password, passValidation, res, next);
};

const validateBirthday = (req, res, next) => {
  validateInput('birthday', req.body.birthday, bdayValidator, res, next);
};

const validatePhone = (req, res, next) => {
  validateInput('phone number', req.body.phone, phoneValidator, res, next);
};

module.exports = { 
  validateEmail,
  validatePassword,
  validateBirthday,
  validatePhone
};



