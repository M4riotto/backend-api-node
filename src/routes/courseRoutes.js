const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const courseController = require('../controllers/courseController')

router.get('/', courseController.listAllCourses);

// Este código define uma rota usando o método HTTP GET para a raiz(/) da aplicação. Quando um usuário faz uma solicitação HTTP GET para essa rota, a função listAllCourses do courseController é chamada.

// O router é um objeto que representa o roteador em uma aplicação Node.js.Ele é responsável por definir as rotas da aplicação e especificar as funções que devem ser chamadas quando essas rotas são acessadas.

// A função listAllCourses é definida no courseController e recebe dois parâmetros: req e res.A função é responsável por buscar uma lista de todos os cursos e retorná - los como resposta ao cliente.

// Ao definir uma rota com o método HTTP GET, a aplicação está configurada para tratar solicitações GET para a rota /.Quando uma solicitação GET é feita para essa rota, a função listAllCourses é chamada.O resultado dessa função é enviado como resposta HTTP de volta para o cliente.

// Essa rota é importante para exibir uma lista de todos os cursos disponíveis em uma aplicação web.A lista de cursos é geralmente armazenada em um banco de dados ou em outra fonte de armazenamento e pode ser exibida na página inicial da aplicação ou em uma página dedicada a listar todos os cursos disponíveis.

// Em resumo, esse código define uma rota para a raiz da aplicação que usa o método HTTP GET e chama a função listAllCourses do courseController para buscar e retornar uma lista de todos os cursos.

router.post('/', courseController.createCourse);

// Este código define uma rota usando o método HTTP POST para a raiz(/) da aplicação. Quando um usuário faz uma solicitação HTTP POST para essa rota, a função createCourse do courseController é chamada.

// O router é um objeto que representa o roteador em uma aplicação Node.js.Ele é responsável por definir as rotas da aplicação e especificar as funções que devem ser chamadas quando essas rotas são acessadas.

// A função createCourse é definida no courseController e recebe dois parâmetros: req e res.A função é responsável por criar um novo curso com base nos dados enviados na solicitação e armazenar esse curso em um banco de dados ou em outra fonte de armazenamento.

// Ao definir uma rota com o método HTTP POST, a aplicação está configurada para tratar solicitações POST para a rota /.Quando uma solicitação POST é feita para essa rota, a função createCourse é chamada.O resultado dessa função é enviado como resposta HTTP de volta para o cliente.

// Essa rota é importante para criar um novo curso em uma aplicação web.O cliente geralmente envia os dados do novo curso usando um formulário ou outra interface de entrada de dados.O router.post() é um dos principais métodos HTTP usados para enviar dados de formulário para o servidor.

module.exports = router