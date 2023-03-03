import mysql from 'mysql'
import courseModel from '../models/courseModel.js'

const courseController = {}

export const listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const listIdCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

export const deleteCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.deleteCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Deletado com sucesso!" })
  })
}

export const updateCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.updateCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Atualizado com sucesso!" })
  })
}

export default { listAllCourses, listIdCourses, createCourse, deleteCourse, updateCourse }