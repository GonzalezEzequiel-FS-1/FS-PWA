const axios = require("axios");
const classTests = require("@jworkman-fs/test/user.test");
const email = "test@email.com";
const phone = "323-456-7890";
const birthday = "01/23/1990";
const password = "aasdf123";

test("Test #1 API is running", () => {
  const response = axios.get("http://localhost:3000");
  return response
    .then(({ status }) => {
      expect(status).toBe(200);
    })
    .catch((response) => {
      expect(response).not.toBe("ECONNREFUSED");
    });
});

test("Test #2 Signup endpoint is setup", () => {
  const response = axios.post("http://localhost:3000/signup");
  return response.catch(({ response }) => {
    expect(response.code).not.toBe(404);
  });
});

test("User data validates correctly", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email,
    phone,
    birthday,
    password,
  });
  return response.catch(({ response }) => {
    expect(response.data.message).toBe("User has sucessfully signed up!");
    expect(response.code).toBeGreaterThanOrEqual(200);
    expect(response.code).toBeLessThanOrEqual(299);
  });
});

test("Password contains the correct ammount of characters", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email,
    phone,
    birthday,
    password,
  });
  return response.catch(({ response }) => {
    expect(response.data.user.password.lenght).toBeGreaterThanOrEqual("8");
    console.log(response.data.message);
  });
});

test("Test #4 Email Validation Works", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email: "qqq.com",
    phone,
    birthday,
    password,
  });
  return response.catch(({ response }) => {
    expect(response.status).toBe(422);
  });
});
test("Test #5 Phone Validation Works", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email,
    phone: "111-111-1111",
    //10 digit phone number may not start with 1
    birthday,
    password,
  });
  return response.catch(({ response }) => {
    expect(response.status).toBe(422);
  });
});

test("Test #5 birthday Validation Works", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email,
    phone,
    birthday: "22/22/22",
    //22 months?
    password,
  });
  return response.catch(({ response }) => {
    expect(response.status).toBe(422);
  });
});
test("Test #6 Password Validation Works", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email,
    phone,
    birthday,
    password: "asd12345678",
    // Correct ammount of characters, but none are special
  });
  return response.catch(({ response }) => {
    expect(response.status).toBe(422);
  });
});
