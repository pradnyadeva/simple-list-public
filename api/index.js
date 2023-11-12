const express = require('express')
require('dotenv').config()
const connectDB = require('./db.js')
const app = express()
const cors = require('cors')
const login = require("./routes/login")
const register = require("./routes/register")
const getlist = require("./routes/getlist")
const crlist = require("./routes/crlist")
const deleteTask = require("./routes/deleteTask.js")
const verify = require("./routes/verify")


app.use(cors());
connectDB();
app.use(express.json());

app.use((req, res, next) => {
    console.log('the request is process the first one');
    next();
})

app.use('/delete', deleteTask);
app.use('/login', login);
app.use('/register', register);
app.use('/getlist', getlist);
app.use('/crlist', crlist);
app.get("/", (req, res, next) => {
    res.send("Welcome to simple list api");
})

app.get("/apitest", verify, (req, res, next) => {
    res.status(201).json({message:"its in"});
});


app.listen(3200);
