const axios = require('axios');
require('dotenv').config();

exports.fetchNews = async (preferences) => {
    const apiKey = process.env.NEWS_API_KEY;
    const sources = preferences.join(',');
    const url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};
