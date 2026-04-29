const prompt = require('prompt-sync')();

console.log("--- Par ou Ímpar ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let num = Number(prompt("Digite um numero inteiro: "));

if (num % 2 === 0) {
    console.log(`O número ${num} é PAR.`);
} else {
    console.log(`O número ${num} é ÍMPAR.`);
}