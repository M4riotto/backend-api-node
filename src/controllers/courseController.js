const mysql = require('mysql')
const courseModel = require('../models/courseModel')

const courseController = {}

courseController.listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

courseController.createCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

courseController.deleteCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.deleteCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Deletado com sucesso!" })
  })
}

courseController.updateCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.updateCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Atualizado com sucesso!" })
  })
}

module.exports = courseController