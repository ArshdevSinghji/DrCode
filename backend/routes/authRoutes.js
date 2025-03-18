const express = require("express");
const User = require("../models/user");
const Lead = require("../models/lead");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
  
    if (existingUser) return res.status(400).json({ message: "User already exists" });
  
    const newUser = new User({ email, password });
    await newUser.save();
  
    // Create a lead entry when a user registers
    const newLead = new Lead({ userId: newUser._id, email, score: 0 });
    await newLead.save();
  
    res.status(201).json({ message: "User registered and lead created!" });
  });
  

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token, message: "Login successful!" });
});

module.exports = router;
