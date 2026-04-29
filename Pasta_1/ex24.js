const prompt = require('prompt-sync')();
console.log("---   Cálculo de Raiz   ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let  base = Number(prompt("Insira o valor da base: "));
let  indice = Number(prompt("Insira o valor do índice: "));

let raiz = Math.pow(base, 1/indice);
console.log(`A raiz de ${base} com índice ${indice} é: ${raiz}`);