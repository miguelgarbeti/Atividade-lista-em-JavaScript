const prompt = require('prompt-sync')();
console.log("---  Cálculo de Potência  ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let  base= Number(prompt("Insira a base: "));
let  expoente= Number(prompt("Insira o expoente: "));
let potencia = Math.pow(base, expoente);

console.log(`O resultado de ${base} elevado a ${expoente} é: ${potencia}`);