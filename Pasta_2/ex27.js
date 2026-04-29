// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números Inteiros ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let diferenca = num1 - num2;
console.log(`A diferença entre ${num1} e ${num2} é: ${diferenca}`);