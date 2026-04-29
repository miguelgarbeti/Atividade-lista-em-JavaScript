const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Lata de Óleo ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let raio = Number(prompt("Digite o raio da lata: "));
let altura = Number(prompt("Digite a altura da lata: "));
let volume = Math.PI * Math.pow(raio, 2) * altura;

console.log(`O volume da lata de óleo é: ${volume}`);