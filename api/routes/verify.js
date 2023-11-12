const express = require('express')
const router = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                console.log(`Unauthorized failed ${authHeader}`);
                return res
                            .sendStatus(401)
                            .json({message: "Unauthorized"});
                

                
            }
            req.user = user;
            next();
        });
    } else {
        return res.sendStatus(401);
    }
}

module.exports = verify;