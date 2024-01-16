const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../Models/userSchema')
const dotenv = require('dotenv');
dotenv.config();

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new users({
      username: req.body.username,
      email:req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send('User registered successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const login = async (req, res) => {
  const user = await users.findOne({ username: req.body.username });
  if (!user) return res.status(401).send('Invalid username or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(401).send('Invalid username or password.');

  const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
};

module.exports = {
  register,
  login,
};