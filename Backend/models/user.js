const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  emailOrMobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      name: String,
      price: Number,
      imageUrl: String,
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
