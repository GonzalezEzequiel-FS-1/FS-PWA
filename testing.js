const axios = require("axios");
const email = "test@email.com";
const phone = "223-456-7890";
const birthday = "01/23/4567";
const password = "asdf1234";

/*
 curl -X POST --data "email=jworkman@fullsail.com&phone=407-555-5555&birthday=12/12/1980&password=asdf1234" http://localhost:3000/signup


 */

const sayHi = async () => {
  try {
    const response = await axios.post("http://localhost:3000/signup", {
      email,
      phone,
      birthday,
      password,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

//sayHi();

const sayhi2 = async () => {
  try {
    const response = await axios.post("http://localhost:3000/signup", {
      email: "1234.com",
      phone,
      birthday,
      password,
    });
    const passwordToValidate = response.data.user.password;
    console.log(passwordToValidate.length);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
sayHi();
