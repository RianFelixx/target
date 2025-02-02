function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
  }
  return invertida;
}

const texto = "Rian Felix de Oliveira";
console.log("String originall:", texto);
console.log("String invertida:", inverterString(texto));
