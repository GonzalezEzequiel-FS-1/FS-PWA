const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/signup");
const {
  validateEmail,
  validatePassword,
  validateBirthday,
  validatePhone
} = require("../middlewares/userValidator")

// Testing Route
router.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: `Welcome to my api`,
  });
});

// SignUp Route
router.post("/signup", 
  validateEmail,
  validatePassword,
  validateBirthday,
  validatePhone,
  signup);

module.exports = router;
