const prompt = require('prompt-sync')();
console.log("---  Cálculo da Velocidade de um Projétil  ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let distancia = Number(prompt("Digite a distância percorrida pelo projétil: "));
let tempo = Number(prompt("Digite o tempo gasto pelo projétil: "));

let velocidade = distancia / tempo / 3.6;

console.log