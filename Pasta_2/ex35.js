const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valor ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let num1 = Number(prompt("Digite o primeiro valor: "));
let num2 = Number(prompt("Digite o segundo valor: "));
let num3 = Number(prompt("Digite o terceiro valor: "));
let num4 = Number(prompt("Digite o quarto valor: "));
let num5 = Number(prompt("Digite o quinto valor: "));

let maior = num1;
let menor = num1;

if (num2 > maior) {
    maior = num2;
}
if (num2 < menor) {
    menor = num2;
}

if (num3 > maior) {
    maior = num3;
}
if (num3 < menor) {
    menor = num3;
}

if (num4 > maior) {
    maior = num4;
}
if (num4 < menor) {
    menor = num4;
}

if (num5 > maior) {
    maior = num5;
}
if (num5 < menor) {
    menor = num5;
}

console.log(`O maior valor é: ${maior}`);
console.log(`O menor valor é: ${menor}`);
