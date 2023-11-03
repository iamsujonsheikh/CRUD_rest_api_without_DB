const users = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');

// GET ALL USERS
const getAllUsers = ((req, res) => {
    res.status(200).json({ users })
});

// GET USER : ID
const getUser = ((req, res) => {
    const userId = req.params.id;
    const findUser = users.filter((user) => user.id === userId);
    res.status(200).json({ findUser })
});

// CREATE USER
const createUser = ((req, res) => {
    const newUser = {
        id: uuidv4(),
        name: req.body.username,
        email: req.body.email
    };
    users.push(newUser)
    res.status(201).json({ newUser })
});

// UPDATE USER : ID
const updateUser = ((req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.name = username,
            selectedUser.email = email
    });
    res.status(200).json({ users })
});

// DELETE USER : ID
const deleteUser = ((req, res) => {
    const userId = req.params.id;
    const deleteUser = users.filter((user) => user.id !== userId)
    res.status(200).json({ deleteUser })
});

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };