import userModel from '../models/userModel.js'

export const listAllusers = (req, res) => {
  userModel.listAllUser((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const listId = (req, res) => {
  const user = req.params
  userModel.listId(user,(error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createUser = (req, res) => {
  const user = req.body
  //TODO Verificar se os dados são válidos
  userModel.createUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Cadastrado!" })
  })
}

export const deleteUser = (req, res) => {
  const user = req.body
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Deletado com sucesso!" })
  })
}

export const updateUser = (req, res) => {
  const user = req.body
  //TODO Verificar se os dados são válidos
  userModel.updateUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Atualizado com sucesso!" })
  })
}

export default { listAllusers, listId, createUser, deleteUser, updateUser }