import con from '../db/dbConnection.js'

export const listAllUser = (callback) => {
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

export const listId = (user, callback) => {
  const { id } = user
  const sql = "SELECT * FROM `users` WHERE id = ?;"
  const values = [id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB error: ${err.sqlMessage}`)
    } else if (result.length === 0) {
      console.log(`id ${id}, não encontrado`)
      result.message = "Id inexistente no banco de dados"
      callback(null, result.message)
    } 
    else {
      callback(null, result)
    }
  })
}

export const createUser = (user, callback) => {
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

export const deleteUser = (user, callback) => {
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

export const deletId = (user, callback) => {
  const { id } = user
  const sql = "DELETE FROM users WHERE id = ?;"
  const values = [id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const updateUser = (user, callback) => {
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

export default { listAllUser, createUser, listId, deleteUser, deletId, updateUser }
