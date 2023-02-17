const mysql = require('mysql')
const courseModel = {}

courseModel.listAllCourses = (callback) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode"
  })
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

courseModel.createCourse = (req, res) => {
  res.json({ message: "Entrou na rota /course com POST!" })
}

module.exports = courseModel


// Esse código define um objeto chamado courseModel, que contém duas funções: listAllCourses e createCourse.

// A função listAllCourses se conecta a um banco de dados MySQL local e executa uma consulta para selecionar todos os cursos na tabela cursos.Se houver um erro, a função chama a função de retorno de chamada(callback) passando o erro como primeiro argumento e nulo como segundo argumento.Se não houver erro, a função chama a função de retorno de chamada passando nulo como primeiro argumento e o resultado da consulta como segundo argumento.

// A função createCourse não está implementada e simplesmente retorna um objeto JSON com uma mensagem.

// O comando module.exports = courseModel exporta o objeto courseModel para que possa ser usado em outros arquivos como um módulo.

// Em resumo, este código define duas funções que podem ser usadas para listar todos os cursos e criar um novo curso no banco de dados MySQL local.