const express = require('express')
const router = express.Router()
const UserList = require("../models/list")
const verify = require("./verify")


router.post("/", verify, async (req, res, next) => {
    try {
        const {email, todolist, description} = req.body;
        const user = await UserList.create({ email, todolist, description });
        res
          .status(201)
          .json({ message: "Todolist created in successfully", success: true, user});
        next();
      } catch (error) {
        console.error(error);
      }
})

module.exports = router