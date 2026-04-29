const prompt = require('prompt-sync')();

console.log("--- Classificação de Número Positivo ou Negativo ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let numero = Number(prompt("Digite um número inteiro: "));
if (numero > 0) {
    console.log(`O número ${numero} é POSITIVO.`);
} else if (numero < 0) {
    console.log(`O número ${numero} é NEGATIVO.`);
} else {
    console.log("O número é ZERO.");
}   