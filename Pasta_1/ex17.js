const prompt = require('prompt-sync')();
console.log("---    Cálculo da Área de uma Circunferência ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let raio = Number(prompt("Digite o raio da circunferência: "));

let area = Math.PI * raio * raio;

console.log(`A área da circunferência é: ${area}`);