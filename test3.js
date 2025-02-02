const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

const faturamentoValido = dados.filter(item => item.valor > 0);

const menorFaturamento = Math.min(...faturamentoValido
  .map(item => item.valor));

const maiorFaturamento = Math.max(...faturamentoValido
  .map(item => item.valor));

const somaFaturamento = faturamentoValido
  .reduce((total, item) => total + item.valor, 0);
const mediaMensal = somaFaturamento / faturamentoValido.length;

const diasAcimaDaMedia = faturamentoValido.filter(item => item.valor > mediaMensal).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);