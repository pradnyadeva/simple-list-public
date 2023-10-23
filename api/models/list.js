const mongoose = require("mongoose");


const userListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your username is required"],
  },
  todolist: {
    type: String,
    required: [true, "Your todolist is required"],
  },
  description: {
    type: String,
    required: [true, "Your description is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});


module.exports = mongoose.model("UserList", userListSchema);