const express = require('express');
const { register, login } = require('../Controller/usercontroller');

const router = express.Router();
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.post('/register', register);
router.post('/login', login);

module.exports = router;