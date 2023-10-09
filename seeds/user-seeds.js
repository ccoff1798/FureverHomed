const { User } = require('../models')
const userData = [
    // {
    //     "name": "test",
    //     "email": "test@email.com",
    //     "password": "12345678"
    // }
];

const seedUsers = () => User.bulkCreate(userData)
module.exports = seedUsers;