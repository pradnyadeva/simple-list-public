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
                return res
                            .sendStatus(201)
                            .json({message: "success"});
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = verify;