const express = require("express");
// Importing the Express framework to build web server and handle backend routes.

const cors = require("cors");
// Importing the CORS middleware to allow cross-origin requests from different domains.

const dotenv = require("dotenv");
// Importing dotenv package to load environment variables from a .env file

const connectDB = require("./config/db");

const UserRoutes = require("./routes/UserRoutes");

const app = express();
// Creating an instance of the Express application

/* use() is a function in Express that is used to handle and apply middleware. like : (req, res, next) */
app.use(express.json());
// Middleware to parse incoming JSON data in request bodies

app.use(cors());
// Middleware to enable Cross-Origin Resource Sharing (CORS) for all incoming requests

dotenv.config(); // Loads variables from .env into process.env

// console.log(process.env.PORT);
const PORT = process.env.PORT || 3000; // now here we are accessing the values like : PORT
// here we are giving the defualt value 3000

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hi!! welcome to Aura API");
});

//API Routes
app.use("/api/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
