const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números Inteiros ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let numero1 = Number(prompt("Digite o primeiro número inteiro: "));
let numero2 = Number(prompt("Digite o segundo número inteiro: "));
let diferenca = numero1 - numero2;

console.log(`A diferença entre os números é: ${diferenca}`);