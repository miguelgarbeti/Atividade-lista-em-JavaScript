const prompt = require('prompt-sync')();

console.log("--- Cálculo do Valor de uma Prestação em Atraso ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let valorPrestacao = Number(prompt("Digite o valor da prestação: "));
let mesesAtraso = Number(prompt("Digite a quantidade de meses em atraso: "));
let juros = Number(prompt("Digite a taxa de juros (em %): "));
let valorFinal = valorPrestacao * Math.pow(1 + juros / 100, mesesAtraso);

console.log(`O valor da prestação em atraso é: ${valorFinal.toFixed(2)}`);