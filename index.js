// Loading Express
const express = require("express");
// Start an instance of express and call it app
const app = express();

// Load and start dotenv
const dotenv = require("dotenv");
dotenv.config();

// Set up CORS
const cors = require("cors");
app.use(cors());

//Loading YAMLJS to better load YAML files
const YAML = require('yamljs');

// Loading Swagger
const swagDocs = YAML.load('./swagger/swagger.yaml');
const swaggerUi = require("swagger-ui-express");
//const swagDocs = require("./swagger/swagger.yaml"); // Ensure this file exists and is correctly formatted
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swagDocs));

// Assign the port and its default
const PORT = process.env.PORT || 3000;

// Define routes
const routes = require("./routes");

// Apply Express built-in body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the uri
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack to the console
  res.status(500).send('Something broke!'); // Send a 500 response
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
