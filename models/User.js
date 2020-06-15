const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Event = require('./Event')

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  events: {
    type: [Event.Schema],
    default: []
  }
});

module.exports = User = mongoose.model("users", UserSchema);
