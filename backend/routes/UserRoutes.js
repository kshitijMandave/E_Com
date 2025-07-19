const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({ name, email, password });

    // Save user to DB
    await user.save();

    // Create JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role, // assuming your model has 'role' field
      },
    };

    // Sign JWT token and return with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET, // secret from .env
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        return res.status(201).json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
