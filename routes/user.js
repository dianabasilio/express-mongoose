// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");

// @route   GET api/users
// @desc    Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   POST api/users
// @desc    Create a user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      age,
    });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/users/:id
// @desc    Update a user
router.put("/:id", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;
    user.age = age || user.age;

    user = await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/users/:id
// @desc    Delete a user
router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    await User.findByIdAndRemove(req.params.id);
    res.json({ msg: "User removed" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
