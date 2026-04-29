const prompt = require('prompt-sync')();

console.log("--- Soma dos Cem Primeiros Números Naturais ---");

let soma = 0;
let cont = 1;
while (cont <= 100) {
    soma = soma + cont;
    cont++;
}
console.log(`A soma dos primeiros 100 números naturais é: ${soma}`);