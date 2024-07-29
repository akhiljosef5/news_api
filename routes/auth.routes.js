const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/register', registerUser);

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', loginUser);

module.exports = router;
