const prompt = require('prompt-sync')();

console.log("--- Cálculo da Soma dos Quadrados de Quatro Números ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));
let numero4 = Number(prompt("Digite o quarto número: "));

let produto = numero1 * numero3
let soma = numero2 + numero4

console.log(`O produto dos números 1 e 3 é: ${produto}`);
console.log(`A soma dos números 2 e 4 é: ${soma}`);