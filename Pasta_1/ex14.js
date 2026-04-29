const prompt = require('prompt-sync')();

console.log("--- Cálculo da Soma dos Quadrados de Três Números ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));

let soma = numero1 + numero2 + numero3;
let somaQuadrados = soma * soma;


console.log(`A soma dos quadrados dos três números é: ${somaQuadrados}`);