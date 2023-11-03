const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: 'ritu akter',
        email: 'ritu@gmail.com'
    },
    {
        id: uuidv4(),
        name: 'jannat khatun',
        email: 'jannat@gmail.com'
    },
    {
        id: uuidv4(),
        name: 'nuraiya khatun',
        email: 'nuraiya@gmail.com'
    }
];
module.exports = users;