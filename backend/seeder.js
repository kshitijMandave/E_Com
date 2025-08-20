const mongoose = require("mongoose");
const dotenve = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./products");

dotenve.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// function to seed the data

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create default user
    const createdUser = new User({
      name: "Admin",
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    });

    //Assign the default user ID to each product
    const userID = createdUser._id;

    const samleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    // Insert the products into the database
    await Product.insertMany(samleProducts);

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
