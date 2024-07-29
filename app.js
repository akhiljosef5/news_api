const express = require('express');
const connectDB = require('./config/dbConfig');
const fs = require('fs');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

//parsing the json from the file into json object
// const usersJson = JSON.parse(fs.readFileSync('./data/user.json'));
// const usersArray = usersJson.users;

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/v1/users', require('./routes/auth.routes'));
app.use('/api/v1/news', require('./routes/news.routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
