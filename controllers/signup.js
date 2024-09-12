const Users = require('../models/users.js');
const bcrypt = require('bcrypt'); 

const signup = async (req, res) => {
  try {
    const { email, phone, birthday, password } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({ email, phone, birthday, password: hashedPassword });

    res.json({
      message: "User has successfully signed up!",
      user: { email, phone, birthday, password: "●●●●●●●●●●●" }, 
      data: newUser
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `${req.method} failed, consult error >>> ${error}`
    });
  }
};

module.exports = { signup };
