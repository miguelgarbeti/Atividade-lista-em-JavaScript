const prompt = require('prompt-sync')();

console.log("--- Verificação de Faixa de Valor ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let num = Number(prompt("Digite um valor numerico inteiro: "));

if (num <= 7) {
    console.log("Valor entá na faixa permitida.");
} else {
    console.log("Valor não entá na faixa permitida.");
}