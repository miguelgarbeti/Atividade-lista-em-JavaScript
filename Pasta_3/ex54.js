const prompt = require('prompt-sync')();

console.log("--- Somatório e Média de Dez Valores ---");

let somatorio = 0;
let cont = 1;
while (cont < 10) {
    let valor = Number(prompt(`Digite o ${cont}º e o ${cont + 1}º valor: `));
    somatorio += valor;
    cont++;
}
let media = somatorio / 10;
console.log(`O somatório dos dez valores é: ${somatorio}`);
console.log(`A média dos dez valores é: ${media}`);