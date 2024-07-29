const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
    const token = req.header('authorization').split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded.user;
        console.log('user is ', req.user.id);
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
