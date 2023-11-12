const express = require('express')
const router = express.Router()
const verify = require("./verify")
const UserList = require("../models/list")


router.get("/", verify, async (req, res, next) => {
    try{
        const todos = await UserList.deleteOne({_id: req.query.id});
        return res.status(201).json({message: "Successfully deleted"});
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "ERROR"});
    }
})

module.exports = router