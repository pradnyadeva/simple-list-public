require('dotenv').config()
const mongoose = require('mongoose')

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to MONGODB")
    } catch(error){
        console.log("ERROR connection to MONGODB");
    }
}