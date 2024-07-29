const User = require('../models/userModel');


class UserStore {
    constructor() {
        this.users = [
            {
                "id": "66a681b2250c6da979f62d14",
                "name": "akhil",
                "email": "akhil@gmail.com",
                "password": "$2a$10$3cHXN3k/8mZ88PChEd1LTuiPEgh6Y23I41We.ndIYlUKzh8qG1WWq",
                "preference": "sports"
            },
            {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "password": "password123",
                "preference": "news"
            },
            {
                "name": "Jane Smith",
                "email": "jane.smith@example.com",
                "password": "password456",
                "preference": "sports"
            },
            {
                "name": "Alice Johnson",
                "email": "alice.johnson@example.com",
                "password": "password789",
                "preference": "music"
            },
            {
                "name": "Bob Brown",
                "email": "bob.brown@example.com",
                "password": "password012",
                "preference": "movies"
            },
            {
                "name": "Charlie Davis",
                "email": "charlie.davis@example.com",
                "password": "password345",
                "preference": "tech"
            },
            {
                "name": "Diana Evans",
                "email": "diana.evans@example.com",
                "password": "password678",
                "preference": "travel"
            },
            {
                "name": "Eve Foster",
                "email": "eve.foster@example.com",
                "password": "password901",
                "preference": "food"
            },
        ];
    }

    addUser(user) {
        this.users.push(user);
    }

    findUserById(id) {
        return this.users.find(user => user.id === id);
    }

    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }

}

module.exports = new UserStore();
