const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;