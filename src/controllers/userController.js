//controller manda para o routes o que foi pedido no Model

const mysql = require('mysql')
const userModel = require('../models/userModel')

const userController = {}

userController.listAllUsers = (req, res) => {
  userModel.listAllUsers((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)

    res.json(result)
    // for (let index = 0; index < result.length; index++) {
    //   const element = result[index];

    //   console.log(element.cargo)
    // }
      
      // result.forEach(resultado => {
      //     res.json(resultado.cargo)  
      // })
  })
}

userController.createUser = (req, res) => {
  userModel.createUser(req, res)
}

module.exports = userController