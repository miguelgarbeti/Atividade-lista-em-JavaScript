const prompt = require('prompt-sync')();

console.log("--- Múltiplo de 3 e 5 ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
    let num = Number(prompt("Digite um número: "));
   

if (num % 3 === 0 && num % 5 === 0) {
    console.log(`O número ${num} é divisivel por 3 e 5.`);
} else {
console.log("Nenhum valor apresentado.");

}