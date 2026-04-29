const prompt = require('prompt-sync')();

console.log("--- Cálculo da Quantidade de Combustível Gasta em uma Viagem ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let distancia = Number(prompt("Digite a distância da viagem: "));
let consumo = Number(prompt("Digite o consumo do veículo (km/l): "));

let combustivelGasto = distancia / consumo;

console.log(`A quantidade de combustível gasta na viagem é: ${combustivelGasto} litros`);