const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

let temperaturaFahrenheit = Number(prompt("Insira a temperatura Fahrenheit: "));
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;

console.log(`O resultado da conversão é: ${temperaturaCelsius}`);