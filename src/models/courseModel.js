import con from '../db/dbConnection.js'

export const listAllCourses = (callback) => {
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

export const listId = (course, callback) => {
  const {id} = course
  const sql = "SELECT * FROM `cursos` WHERE id = ?;"
  const values = [id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else if(result.length === 0){
      console.log(`id ${id}, não encontrado`)
      result.message = "Id inexistente no banco de dados"
      callback(null, result.message)
    } else {
      callback(null, result)
    }
  })
}

export const createCourse = (course, callback) =>{
  const { nome, cargahoraria } = course
  const sql = 'INSERT INTO cursos (nome, cargahoraria) VALUES (?, ?);'
  const values = [nome, cargahoraria]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

  export const deleteCourse = (id, callback) => {
  const sql = 'DELETE FROM cursos WHERE id = ?;'
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const deletId = (course, callback) => {
  const { id } = course
  const sql = "DELETE FROM cursos WHERE id = ?;"
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

  export const updateCourse = (course, callback) => {
    const { id, nome, cargahoraria } = course
    const sql = 'UPDATE cursos SET nome = ?, cargahoraria = ? WHERE id = ? ;'
    const values = [nome, cargahoraria, id]

    con.query(sql, values, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  }

export default { listAllCourses, listId, createCourse, deleteCourse, deletId, updateCourse }