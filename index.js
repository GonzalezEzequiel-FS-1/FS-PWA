// Loading Express
const express = require("express");

//Start an instance of express and call it app
const app = express();

// Load and start dotenv
const dotenv = require("dotenv");
dotenv.config();

//Set up CORS
const cors = require("cors");
app.use(cors());

// Assign the port and its default
const PORT = process.env.PORT || 3000;

// Define routes
const routes = require("./routes");

// Apply Express built-in body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the uri
app.use("/", routes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
