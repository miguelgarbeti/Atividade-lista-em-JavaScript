const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de Quatro Números Inteiros ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let num4 = Number(prompt("Digite o quarto número: "));

let soma1 = num1 + num2 
let soma2 = num1 + num3
let soma3 = num1 + num4
let soma4 = num2 + num3
let soma5 = num2 + num4
let soma6 = num3 + num4

let produto1 = num1 * num2
let produto2 = num1 * num3
let produto3 = num1 * num4
let produto4 = num2 * num3
let produto5 = num2 * num4
let produto6 = num3 * num4



console.log(`As soma dos números é: ${soma1}`);
console.log(`As soma dos números é: ${soma2}`);
console.log(`As soma dos números é: ${soma3}`);
console.log(`As soma dos números é: ${soma4}`);
console.log(`As soma dos números é: ${soma5}`);
console.log(`As soma dos números é: ${soma6}`);
console.log(`O produto dos números é: ${produto1}`);
console.log(`O produto dos números é: ${produto2}`);
console.log(`O produto dos números é: ${produto3}`);
console.log(`O produto dos números é: ${produto4}`);
console.log(`O produto dos números é: ${produto5}`);
console.log(`O produto dos números é: ${produto6}`);