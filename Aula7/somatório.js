let numero = parseInt(prompt("Digite um numero"));

let somatorio = 0;

for (let i = 1; i <= numero; i++) {
  somatorio += i;
}

console.log("O somatório de 1 até " + numero + " é: " + somatorio);