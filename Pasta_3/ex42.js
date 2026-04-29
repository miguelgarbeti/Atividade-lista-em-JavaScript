const prompt = require('prompt-sync')();

console.log("--- Quadrados na Faixa de Valores  ---");

let resultadoQuadrados = "";

for (let i = 15; i <= 200; i++) {
    let quadrado = i * i; 
    resultadoQuadrados += `O quadrado de ${i} é ${quadrado}\n`;
}
console.log(resultadoQuadrados);