//arquivo principal: importa operacoes.js, imprime os resultados no console
//e sobe um servidor Express com as rotas do modulo.

const express = require('express');
const _ = require('lodash');
const operacoes = require('./operacoes');

const app = express();
app.use(express.json()); //necessario pra ler req.body nas rotas POST

//monta as rotas definidas em operacoes.js
app.use('/', operacoes.router);

// === PASSO 5: imprime no console os resultados das operacoes ===
console.log('8 + 4 =', operacoes.soma(8, 4));
console.log('15 - 7 =', operacoes.subtracao(15, 7));
console.log('6 * 3 =', operacoes.multiplicacao(6, 3));
console.log('20 / 5 =', operacoes.divisao(20, 5));
console.log('10 / 0 =', operacoes.divisao(10, 0));

// === PASSO 6: usando o Lodash ===
console.log('Numero aleatorio entre 1 e 30:', _.random(1, 30));

// === SOBE O SERVIDOR===
const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor executando em http://localhost:${PORTA}`);
});
