const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getPreferences, updatePreferences, getNews } = require('../controllers/newsController');

// @route   GET api/preferences
// @desc    Get user preferences
// @access  Private
router.get('/preferences', authMiddleware, getPreferences);

// @route   PUT api/preferences
// @desc    Update user preferences
// @access  Private
router.put('/preferences', authMiddleware, updatePreferences);

// @route   GET api/news
// @desc    Get news based on preferences
// @access  Private
router.get('/news', authMiddleware, getNews);

module.exports = router;
