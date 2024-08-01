const express = require('express');
const { registerUser, authUser } = require('../Controllers/UserController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;

