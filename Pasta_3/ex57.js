const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área Total de uma Residência ---");

let nomeCom = prompt("Digite o nome do Comodo: ");
let lar = parseFloat(prompt("Digite a largura do comodo: "));
let comp = parseFloat(prompt("Digite o comprimento do comodo: "));
let area = comp * lar;
let C = prompt("Deseja continuar? ");
   while (C === "SIM" || C === "sim" || C === "Sim") {
console.log(`A área total do ${nomeCom} é: ${area} m²`);
break;
}