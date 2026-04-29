const prompt = require('prompt-sync')();

console.log("--- Valores Divisíveis por 2 ou 3 ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
    let num1 = Number(prompt("Digite o primeiro valor: "));
    let num2 = Number(prompt("Digite o segundo valor: "));
    let num3 = Number(prompt("Digite o terceiro valor: "));
    let num4 = Number(prompt("Digite o quarto valor: "));

if (num1 % 2 === 0 || num1 % 3 === 0) {
    console.log(`O número ${num1} é divisível por 2 ou 3.`);
}
if (num2 % 2 === 0 || num2 % 3 === 0) {
    console.log(`O valor ${num1} é divisivel por 2 ou 3.`);
}
if (num3 % 2 === 0 || num3 % 3 === 0) {
    console.log(`O valor ${num3} é divisivel por 2 ou 3.`);
}
if (num4 % 2 === 0 || num4 % 3 === 0) {
    console.log(`O valor ${num4} é divisivel por 2 ou 3.`);
}
