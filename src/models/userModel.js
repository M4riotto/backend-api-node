const mysql = require('mysql')
const userModel = {}

userModel.listAllUsers = (callback) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode"
  })
  const sql = "SELECT * FROM users;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

userModel.createUser = (req, res) => {
  res.json({ message: "Entrou na rota /user com POST!" })
}

module.exports = userModel