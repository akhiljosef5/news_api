const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    preference: {
        type: String,
        required: true
    }
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model('User', UserSchema);

// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.preferences = [];
//     }
// }

// module.exports = User;

