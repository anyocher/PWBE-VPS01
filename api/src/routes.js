const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');
const Cliente = require('./controllers/cliente');
const Telefone = require('./controllers/telefone');
const Aluguel = require('./controllers/aluguel');

routes.get('/', (req, res) => {
    res.json("API Alugueis 1.0");
});

routes.get('/veiculos', Veiculo.readVeiculos);
routes.get('/veiculos/:placa', Veiculo.readVeiculo);

routes.post('/cliente',Cliente.createCliente);
routes.get('/cliente', Cliente.readCliente);
routes.get('/cliente/:cpf', Cliente.readCliente);

routes.get('/telefones', Telefone.readTelefones);
routes.get('/telefones/:matricula', Telefone.readTelefone);

routes.post('/aluguel', Aluguel.readAluguel);
routes.get('/aluguel', Aluguel.readAluguel);
routes.get('/aluguel/:id', Aluguel.readAluguel);
routes.get('/ativas', Aluguel.readAluguel);


module.exports = routes;
