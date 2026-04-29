const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado de um Número Inteiro ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let numero = Number(prompt("Digite um número inteiro: "));
let quadrado = numero * numero;

console.log(`O quadrado do número é: ${quadrado}`);