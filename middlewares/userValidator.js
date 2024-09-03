const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const bdayValidator = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
const phoneValidator = /^(\+1\s?)?\(?([2-9][0-9]{2})\)?[\s.-]?([2-9][0-9]{2})[\s.-]?([0-9]{4})$/;

/*
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  try {

    // Check if the user provided an email, if not respond with a error code and a message
    if (!email) {
      return res.status(400).json({
        success: false,
        message: `${req.method} failed, please provide an email`
      })
      // If the user did provide an email, test for validation, if it does not follow the format respond with an error code and a message
    } else if (!emailValidation.test(email)) {
      return res.status(400).json({
        success: false,
        message: `Invalid email provided, email : ${email}`
      })
      // If both test pass proceed with the next step on the middleware.
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${req.method} failed, consult error : ${error}`
    })
  }
};


const validatePassword = (req, res, next) => {
  const { password } = req.body;
  try {

    // Check if the user provided a password, if not respond with a error code and a message
    if (!password) {
      return res.status(400).json({
        success: false,
        message: `${req.method} failed, please provide a password`
      })
      // If the user did provide a password, test for validation, if it does not follow the format respond with an error code and a message
    } else if (!passValidation.test(password)) {
      return res.status(400).json({
        success: false,
        message: `Invalid password provided`
      })
      // If both test pass proceed with the next step on the middleware.
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${req.method} failed, consult error : ${error}`
    })
  }
};
const validateBirthday = (req, res, next) => {
  const { birthday } = req.body;
  try {

    // Check if the user provided a birth date, if not respond with a error code and a message
    if (!birthday) {
      return res.status(400).json({
        success: false,
        message: `${req.method} failed, please provide a birthday`
      })
      // If the user did provide an birth date, test for validation, if it does not follow the format respond with an error code and a message
    } else if (!bdayValidator.test(birthday)) {
      return res.status(400).json({
        success: false,
        message: `Invalid Birth Date provided, Birth Date : ${birthday}`
      })
      // If both test pass proceed with the next step on the middleware.
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${req.method} failed, consult error : ${error}`
    })
  }
};
const validatePhone = (req, res, next) => {
  const { phone } = req.body;
  try {

    // Check if the user provided a phone number with US format 123-456-7890, if not respond with a error code and a message
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: `${req.method} failed, please provide a Phone Number`
      })
      // If the user did provide a phone number, test for validation, if it does not follow the format respond with an error code and a message
    } else if (!phoneValidator.test(phone)) {
      return res.status(400).json({
        success: false,
        message: `Invalid Phone Number provided, Phone Number : ${phone}`
      })
      // If both test pass proceed with the next step on the middleware.
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${req.method} failed, consult error : ${error}`
    })
  }
};

module.exports = { 
  validateEmail,
  validatePassword,
  validateBirthday,
  validatePhone
}
*/

// *** REFACTORED VERSION *** //
const validateInput = (field, value, regex, res, next) => {
  if (!value) {
    return res.status(400).json({
      success: false,
      message: `Please provide a valid ${field}`
    });
  } else if (!regex.test(value)) {
    return res.status(400).json({
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



