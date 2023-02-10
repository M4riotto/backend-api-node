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