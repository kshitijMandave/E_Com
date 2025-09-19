const express = require("express");
// Importing the Express framework to build web server and handle backend routes.

const cors = require("cors");
// Importing the CORS middleware to allow cross-origin requests from different domains.

const dotenv = require("dotenv");
// Importing dotenv package to load environment variables from a .env file

const connectDB = require("./config/db");

const UserRoutes = require("./routes/UserRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const CartRoutes = require("./routes/CartRoutes");
const CheckoutRoutes = require("./routes/CheckoutRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const UploadRoutes = require("./routes/UploadRoutes");
const SubscribeRoutes = require("./routes/SubscribeRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const ProductAdminRoutes = require("../backend/routes/ProductAdminRoutes");

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
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/checkout", CheckoutRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/upload", UploadRoutes);
app.use("/api", SubscribeRoutes);

// Admin
app.use("/api/admin/users", AdminRoutes);
app.use("/api/admin/products", ProductAdminRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
