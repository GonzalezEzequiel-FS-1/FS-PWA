const {Users} = require("../models");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { email, phone, birthday, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      email,
      phone,
      birthday,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(400).json({ message: "User not created" });
    }

    res.json({
      message: "User has successfully signed up!",
      user: { email, phone, birthday, password: "●●●●●●●●" }, // Masked password
      data: newUser,
    });

    console.log("User created successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: `${req.method} failed, consult error >>> ${error}`,
    });
  }
};

module.exports = { signup };
