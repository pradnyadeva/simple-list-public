const express = require('express')
const router = express.Router()
const User = require("../models/user")

router.post("/", async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt });
        return res
          .status(201)
          .json({ message: "User signed in successfully", success: true, user });
        next();
      } catch (error) {
        console.error(error);
      }
    });

  module.exports = router