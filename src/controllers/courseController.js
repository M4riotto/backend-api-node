const mysql = require('mysql')
const courseModel = require('../models/courseModel')
const courseController = {}

courseController.listAllCourses = (req, res) => {
  courseModel.listAllCourses(req, res)
}
// Este código define uma função listAllCourses no courseController, que recebe dois parâmetros: req e res. A função usa o método listAllCourses definido no modelo courseModel para buscar uma lista de todos os cursos e retorná-los como resposta.

// O req representa o objeto de solicitação HTTP e contém informações como o método HTTP usado na solicitação, o URL da solicitação e outros dados relevantes para a solicitação.O res representa o objeto de resposta HTTP e contém métodos para enviar uma resposta de volta ao cliente, como o código de status HTTP, o corpo da resposta e os cabeçalhos da resposta.

// O courseController é um componente importante em uma arquitetura MVC(Model - View - Controller), que é um padrão de design de software comum para aplicativos da web.O controlador é responsável por processar as solicitações recebidas e gerenciar a lógica de negócios da aplicação.Ele recebe entradas do usuário, processa as solicitações e retorna as respostas correspondentes.

// Neste caso, o controlador courseController delega a tarefa de buscar todos os cursos para o modelo courseModel, que é responsável por acessar o banco de dados e retornar os dados.Isso ajuda a manter a lógica de negócios e a manipulação de dados separadas, tornando o código mais organizado e fácil de manter.

// Em resumo, este código é usado para buscar todos os cursos e retorná - los como resposta a uma solicitação HTTP.Ele usa o modelo courseModel para buscar os dados e o res para enviar a resposta de volta ao cliente.

courseController.createCourse = (req, res) => {
  res.json({ message: "Entrou na rota /course com POST!" })
}

// Este código define uma função createCourse no courseController que recebe dois parâmetros: req e res.A função retorna um objeto JSON com a mensagem "Entrou na rota /course com POST!" quando é chamada através de uma requisição HTTP com o método POST.

// O req representa o objeto de solicitação HTTP e contém informações como o método HTTP usado na solicitação, o URL da solicitação e outros dados relevantes para a solicitação.O res representa o objeto de resposta HTTP e contém métodos para enviar uma resposta de volta ao cliente, como o código de status HTTP, o corpo da resposta e os cabeçalhos da resposta.

// Neste caso, a função createCourse é usada para processar uma requisição HTTP do tipo POST na rota / course.O retorno de um objeto JSON é uma resposta simples para indicar que a rota foi acionada corretamente.Na prática, a lógica da função seria mais complexa, envolvendo o armazenamento dos dados do novo curso em um banco de dados ou em outra fonte de armazenamento.

// O uso de objetos JSON para enviar respostas é comum em aplicações web modernas.Essa abordagem permite que as respostas sejam estruturadas de forma clara e legível para o cliente, facilitando o desenvolvimento de aplicações front - end que consomem esses dados.

// Em resumo, este código define uma função que processa uma requisição HTTP do tipo POST na rota / course e retorna um objeto JSON como resposta.Ele é usado como ponto de partida para a implementação da lógica de criação de cursos em uma aplicação web.

module.exports = courseController