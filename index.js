// Load Express
const express = require("express");

//Start an instance of express and call it app
const app = express();

// Load and start dotenv
const dotenv = require("dotenv");
dotenv.config();

// Load BodyParser
const bodyParser = require("body-parser");

// Assign the port and its default
const PORT = process.env.PORT || 3000;

// Define routes
const routes = require("./routes");

// Apply body-parser middleware
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Set up the uri
app.use("/", routes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
