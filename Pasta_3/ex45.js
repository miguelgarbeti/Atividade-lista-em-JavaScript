const prompt = require('prompt-sync')();

console.log("--- Somatório dos Valores Pares ---");

let soma = 0;
for (let n = 2 ; n <= 500; n += 2) {
    soma = soma + n;
}
console.log(`A soma dos valores pares de 2 a 500 é: ${soma}`);