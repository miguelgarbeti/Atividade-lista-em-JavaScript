const prompt = require('prompt-sync')();

console.log("--- Conversão de Dólar para Real ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let Real = Number(prompt("Digite a quantidade de dólares: "));

let valorDolar = Real / 5.60; // Supondo uma cotação de 1 dólar = 5.60 reais

console.log(`O valor em reais é: R$ ${valorDolar}`);