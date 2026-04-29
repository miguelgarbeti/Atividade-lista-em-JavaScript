const prompt = require('prompt-sync')();
console.log("---   Conversão de Pés para Metros   ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let  pes = Number(prompt("Insira o valor em pés: "));
let metros = pes * 0.3048;

console.log(`O valor em metros é: ${metros}`);