const con = require('../db/dbConnection')

const userModel = {}

userModel.listAllUser = (callback) => {
  const sql = "SELECT * FROM users;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

userModel.createUser = (user, callback) => {
  const { nome, cargo } = user
  const sql = 'INSERT INTO users (nome, cargo) VALUES (?, ?);'
  const values = [nome, cargo]
  // const sql = 'INSERT INTO cursos SET ?;'
  // const values = {nome, cargahoraria}

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

userModel.deleteUser = (user, callback) => {
  const { id } = user
  const sql = 'DELETE FROM `users` WHERE id = ?;'
  const values = [id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

userModel.updateUser = (user, callback) => {
  const { id, nome, cargo } = user
  const sql = 'UPDATE users SET nome = ?, cargo = ? WHERE id = ?;'
  const values = [nome, cargo, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

module.exports = userModel
