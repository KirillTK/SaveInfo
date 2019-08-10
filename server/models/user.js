const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  isActivate: {type: Boolean, default: false},
  date: { type: Date, default: Date.now },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;

