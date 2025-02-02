function isFibonacci(num) {
  let a = 0;
  let b = 1;

  while (b <= num) {
      if (b === num) {
          return true;
      }
      let temp = a + b;
      a = b;
      b = temp;
  }

  return false;
}

const numeroInformado = parseInt(prompt("Digite um numero para verificar se pertence a sequencia de Fibonacci:"));

if (isFibonacci(numeroInformado)) {
  alert(`${numeroInformado} pertence a sequencia de Fibonacci.`);
} else {
  alert(`${numeroInformado} nao pertence a sequencia de Fibonacci.`);
}
