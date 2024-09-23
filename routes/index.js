const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/signup");
const {
  validateEmail,
  validatePassword,
  validateBirthday,
  validatePhone,
} = require("@n00bst3r/pwa-week-2-validator");
const { getAll } = require("../controllers/getAll");
const { getOne } = require("../controllers/getOne");
const { editUser } = require("../controllers/edit");
const { deleteUser } = require("../controllers/delete");

// Testing Route
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome to my api`,
  });
});

// SignUp Route
router.post(
  "/signup",
  validateEmail,
  validatePassword,
  validateBirthday,
  validatePhone,
  signup,
);
//GetAll Route
router.get("/users", getAll);
router.get("/users/:id", getOne);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser)

module.exports = router;
