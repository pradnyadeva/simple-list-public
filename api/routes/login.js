const express = require('express')
const router = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")


router.post("/", async (req, res, next) => {
    try {
        const { email, password} = req.body;
        if (!email || !password){
            res.json({message: "error"})
        }

        const user = await User.findOne({email});
        if(!user){
            res.json({message: "Account is not found"});
        }
        
        if(password == user.password){
            let token = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.SECRET,
                { expiresIn: "3h" }
              );
            res.status(201).json({ message: "User logged in successfully", success: true, token: token });
            next();
        }
        
        
    } catch (error){
        console.error(error)
    }
});

module.exports = router