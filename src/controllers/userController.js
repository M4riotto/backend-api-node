const mysql = require('mysql')
const userModel = require('../models/userModel')

const userController = {}

userController.listAllusers = (req, res) => {
  userModel.listAllUser((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

userController.createUser = (req, res) => {

  const user = req.body
  //TODO Verificar se os dados são válidos

  userModel.createUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Cadastrado!" })
  })
}

userController.deleteUser = (req, res) => {

  const user = req.body
  //TODO Verificar se os dados são válidos

  userModel.deleteUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Deletado com sucesso!" })
  })
}

userController.updateUser = (req, res) => {

  const user = req.body
  //TODO Verificar se os dados são válidos

  userModel.updateUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Atualizado com sucesso!" })
  })
}

module.exports = userController