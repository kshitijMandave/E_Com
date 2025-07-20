const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes.
const protect = async (req, resizeBy, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
    } catch (error) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    }
  }
};
