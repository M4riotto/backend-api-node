//faz a connection e faz o que foi pedido, manda pro controller

const mysql = require('mysql')
const userModel = {}

userModel.listAllUsers = (callback) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode"
  })

  //INSERT INTO `users`(`nome`, `cargo`) VALUES ('Siqueira','Front-end');
  //DELETE FROM `users` WHERE nome = 'siqueira';
  //SELECT nome , cargo FROM users;
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