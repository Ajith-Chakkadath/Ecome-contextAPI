const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../Models/userSchema');
const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const generateShortId = (originalObjectId) => {
  // Encode the ObjectId to a shorter string using base64
  return Buffer.from(originalObjectId.toHexString(), 'hex').toString('base64');
};

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });

    await user.save();

    // Generate a short ID
    const shortId = generateShortId(user._id);

    // Send the user details in the response with the short ID
    res.status(201).json({
      message: 'User registered successfully.',
      user: {
        _id: shortId,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const login = async (req, res) => {
  try {
    const user = await users.findOne({ email: req.body.email });
    if (!user) return res.status(401).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send('Invalid username or password.');

    // Generate a short ID
    const shortId = generateShortId(user._id);

    const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken, user: { ...user._doc, _id: shortId } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  register,
  login,
};
