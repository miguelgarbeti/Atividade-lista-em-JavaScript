const prompt = require('prompt-sync')();
console.log("---   Cálculo do Volume de uma Esfera   ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let  raio= Number(prompt("Insira o raio da esfera: "));
let volume = (4/3) * Math.PI * Math.pow(raio, 3);
console.log(`O volume da esfera é: ${volume}`);
 

