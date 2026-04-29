const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira Sem Usar o Operador de Divisão ---");


let dividendo = Number(prompt("Digite o primeiro número : "));
let divisor = Number(prompt("Digite o segundo número : "));

let resul = 0;
while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
     resul = resul + 1;
    }
    console.log(`O resultado da divisão é: ${resul}`);
