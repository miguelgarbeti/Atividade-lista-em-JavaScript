const prompt = require('prompt-sync')();
console.log("---   Cálculo das Quatro Operações Básicas---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let valor1 = Number(prompt("Digite o valor1: "));
let valor2 = Number(prompt("Digite o valor2: "));

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log(`A soma dos valores é: ${soma}`);
console.log(`A subtração dos valores é: ${subtracao}`);
console.log(`A multiplicação dos valores é: ${multiplicacao}`);
console.log(`A divisão dos valores é: ${divisao}`);