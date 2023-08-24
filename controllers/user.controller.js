const users = require("../models/user.model");

// Get all users.
const getAllUsers = (req, res) => {
    res.status(200).json({ users });
};

const { v4: uuidv4 } = require('uuid');

// Create new user using post.
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(200).send(users);
};

// Get single user by id:
const getSingleUser = (req, res) => {
    const userId = req.params.id;
    const user = users.filter((user) => user.id === userId)
    res.status(200).send(user);
};

// Update user by id.
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    users.filter((user) => user.id == userId).map((selectUser) => {
        selectUser.name = name;
        selectUser.email = email;
    });
    res.status(200).send(users);
};

// Delete user by id.
const deleteUser = (req, res) => {
    const userId = req.params.id;
    const allNewUser = users.filter((user) => user.id !== userId)
    res.status(200).send(allNewUser);
};

module.exports = { getAllUsers, createUser, updateUser, getSingleUser, deleteUser };