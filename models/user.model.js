const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: "sujon",
        email: "sujon@gmail.com"
    },
    {
        id: uuidv4(),
        name: "sheikh",
        email: "sheikh@gmail.com"
    }
];
module.exports = users;