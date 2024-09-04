let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"))
fahrenheit = parseInt(fahrenheit);

let celsius = (fahrenheit - 32) * 5 / 9;

alert(fahrenheit + "°F é igual a " + celsius + "°C");