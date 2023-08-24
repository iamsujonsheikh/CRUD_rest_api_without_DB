const { getAllUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getSingleUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;