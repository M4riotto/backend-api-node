//aqui ele mostra tudo que foi pedido

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.listAllUsers);
router.post('/', userController.createUser);

module.exports = router;