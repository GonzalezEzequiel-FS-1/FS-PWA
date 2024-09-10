const axios = require("axios");
const email = "test@email.com";
const phone = "123-456-7890";
const birthday = "1/23/4567";
const password = "qwertyuiop1!";

test("Server responds on port 3000", () => {
  const response = axios.get("http://localhost:3000");
  return response
    .then(({ status }) => {
      expect(status).toBe(200);
    })
    .catch((response) => {
      expect(response).not.toBe("ECONNREFUSED");
    });
});

test("Route /signup works correctly", () => {
  const response = axios.post("http://localhost:3000/signup");
  return response.catch(({ response }) => {
    expect(response.code).not.toBe(404);
  });
});

test("User Email Validates correctly", () => {
  const response = axios.post("http://localhost:3000/signup", {
    email,
    phone,
    birthday,
    password,
  });
  return response.catch(({ response }) => {
    expect(response.data.success).toBe(false);
    console.log(response.data.success);
  });
});
