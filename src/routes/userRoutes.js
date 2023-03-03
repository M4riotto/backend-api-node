
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

const { listAllusers, createUser, deleteUser, updateUser } = userController

router.get('/', listAllusers);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

module.exports = router; 