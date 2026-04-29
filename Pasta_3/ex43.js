const prompt = require('prompt-sync')();

console.log("--- Tabuada de um Número ---");
let num = Number(prompt("Digite um número inteiro: "));

let mult = 1; 

while (mult <= 10) {
    let resul = num * mult;
    console.log(`${num} x ${mult} = ${resul}`);
    
    mult++; 
}