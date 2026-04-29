const prompt = require('prompt-sync')();
console.log("---   Cálculo do Quadrado da Divisão de Dois Números Inteiros ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let  num1 = Number(prompt("Insira o primeiro valor númerico inteiro: "));
let  num2 = Number(prompt("Insira o segundo valor númerico inteiro: "));

let div = num1 / num2;
let qua = div * div;
console.log(`O quadrado da divisão de ${num1} por ${num2} é: ${qua}`);