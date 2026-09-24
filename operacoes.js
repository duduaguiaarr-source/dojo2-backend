// operacoes.js
//modulo de operaçoes matematicas: funcoes puras + rotas Express

const express = require('express');
const router = express.Router();

// === Funcoes puras: usadas tanto pelas rotas quanto pelo app.js ===

const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;

const multiplicacao = (a, b) => a * b;

const divisao = (a, b) => {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
};

// === Rotas GET - mensagens informativas ===

router.get('/adicao', (req, res) => {
  res.send('Você esta na rota adição');
});

router.get('/subtracao', (req, res) => {
  res.send('Você esta na rota subtração');
});

router.get('/multiplicacao', (req, res) => {
  res.send('Você esta na rota multiplicação');
});

router.get('/divisao', (req, res) => {
  res.send('Você esta na rota divisão');
});

// === Rotas POST: recebem "a" e "b" no corpo da requisicao ===

router.post('/adicao', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: soma(Number(a), Number(b)) });
});

router.post('/subtracao', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: subtracao(Number(a), Number(b)) });
});

router.post('/multiplicacao', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: multiplicacao(Number(a), Number(b)) });
});

router.post('/divisao', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: divisao(Number(a), Number(b)) });
});

//exporta tanto o router (pra usar as rotas) quanto as funcoes
//(pra usar diretamente, como pedido no passo 5)
module.exports = {
  router,
  soma,
  subtracao,
  multiplicacao,
  divisao
};
