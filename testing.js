const axios = require("axios");

const sayHi = async () => {
  try {
    const response = await axios.get("http://localhost:3000");
    console.log(response.code);
  } catch (error) {
    console.log(error);
  }
};

sayHi();
