const express = require('express');
const listaCurso = require('./bdd/cursos.json');//importar arquivo json
const app = express();
const host = 'localhost';
const port = 3200;

app.get('/', (req, res) => {
    const msg = [{nome: "LP2"}, {nome: "PJ3"}];
  res.json(msg);
})

app.get('/cursos', (req, res) => {
    res.json(listaCurso);//ler arquivo json
})
app.get('/cursos', (req, res) => {
  res.send('Hello GET curso!')
})

app.post('/cursos', (req, res) => {
  res.send('Hello POST curse!')
})

app.delete('/cursos', (req, res) => {
  res.send('Hello delete curse!')
})

app.all('*', (req, res) => {
  res.send('Não encontrada')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`)
})


//professor

const express = require('express')
const listaCursos = require('./db/cursos.json')
const mysql = require('mysql')


const app = express()
const port = 3100

app.get('/', (req, res) => {
})

app.get('/cursos', (req, res) => {
    res.json(listaCursos)
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode"
  })

  con.connect((err) => {
    if (err) throw err;
    const sql = "select * from cursos;"
    con.query(sql, function (err, result) {
      if (err) throw err;
      //TODO return result with JSON
    })
  });

  res.json(listaCursos)
})

app.post('/cursos', (req, res) => {