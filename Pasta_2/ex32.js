const prompt = require('prompt-sync')();

console.log("--- Ordenação de Três Números Inteiros ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let num1 = Number(prompt("Digite o primeiro valor: "));
let num2 = Number(prompt("Digite o segundo valor: "));
let num3 = Number(prompt("Digite o terceiro valor: "));
let temp = 0;

if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}
if (num1 > num3) {
    temp = num1;
    num1 = num3;
    num3 = temp;
}
if (num2 > num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}
console.log(`Os números em ordem crescente são: ${num1}, ${num2} e ${num3}`);