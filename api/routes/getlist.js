const express = require('express')
const router = express.Router()
const UserList = require("../models/list")
const verify = require("./verify")


router.get("/", verify, async (req, res, next) => {
    try{
        const todos = await UserList.find({email: req.user.email});
        if(todos.length === 0){
            return res.json([])
        }
        res.json(todos);
        console.log(todos);
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "ERROR"});
    }
})

module.exports = router