const User = require('../models/userModel');

const loginUser = async (req, res) => {
  res.json({ message: 'login user' });
};

const signupUser = async (req, res) => {
  res.json({ message: 'signup user' });
};

module.exports = { signupUser, loginUser };
