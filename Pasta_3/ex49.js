const prompt = require('prompt-sync')();

console.log("--- Potência de uma Base Elevada a um Expoente ---");


let base = Number(prompt("Digite o valor da base: "));
let expoente = Number(prompt("Digite o valor do expoente: "));

let potencia = 1;

for (let i = 1; i <= expoente; i++) {
    potencia = potencia * base;
}
console.log(`\nO resultado de ${base} elevado a ${expoente} é: ${potencia}`);