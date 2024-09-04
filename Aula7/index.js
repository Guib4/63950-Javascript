let numero = Number(prompt("Digite um número"))

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "O número é par";
    } else {
      return "O número é ímpar";
    }
  }
  console.log(verificarParOuImpar(numero));