const ehPrimo= (numero) => {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; /* Se o número enviado divide por qualquer número entre 2 e a
       raiz quadrada dele, falso.
        */
    }
    return true;
   }
  }
  function solicitarNumeroPrimo() {
    let numero;
    do {
      numero = parseInt(prompt("Informe um número primo:"), 10);
      if (!ehPrimo(numero)) {
        alert(`${numero} não é um número primo. Tente novamente.`);
      } else {
        alert(`${numero} é um número primo! Obrigado!`);
      }
    } while (!ehPrimo(numero));
  }
  solicitarNumeroPrimo();