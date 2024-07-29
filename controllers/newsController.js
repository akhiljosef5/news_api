const userStore = require('../models/userStoreModel');
const newsService = require('../services/newsService');

exports.getPreferences = (req, res) => {
    console.log(req.user.id);
    const user = userStore.findUserById(req.user.id);
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user.preference);
};

exports.updatePreferences = (req, res) => {
    const user = userStore.findUserById(req.user.id);
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }
    user.preferences = req.body.preference;
    res.json(user.preference);
};

exports.getNews = async (req, res) => {

    const user = userStore.findUserById(req.user.id);
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }

    try {
        const news = await newsService.fetchNews(user.preference);
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
