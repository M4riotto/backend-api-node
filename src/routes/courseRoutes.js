const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

router.get('/', courseController.listAllCourses);
router.post('/', courseController.createCourse);

module.exports = router;

// Este código define um objeto router que é um objeto de roteamento do Express.O roteador permite definir rotas para uma aplicação Express e associar funções de controlador a essas rotas.

// O módulo express é importado para criar o objeto router.

// O módulo courseController é importado para que possa ser usado para associar as funções de controlador às rotas.

// A primeira rota associada a este roteador é um rota GET para o caminho raiz '/'.A função listAllCourses do courseController é associada a esta rota, o que significa que, quando um cliente fizer uma solicitação GET para a rota '/', a função listAllCourses será chamada para manipular essa solicitação.

// A segunda rota associada a este roteador é uma rota POST para o caminho raiz '/'.A função createCourse do courseController é associada a esta rota, o que significa que, quando um cliente fizer uma solicitação POST para a rota '/', a função createCourse será chamada para manipular essa solicitação.

// O comando module.exports = router exporta o objeto router para que possa ser usado em outros arquivos como um módulo.Isso permite que outros arquivos acessem as rotas definidas neste roteador e usem as funções de controlador associadas a essas rotas.