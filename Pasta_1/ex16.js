const prompt = require('prompt-sync')();
console.log("---    Cálculo do Novo Salário com Aumento ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let salario = Number(prompt("Digite o salário do funcionário: "));
let aumento = Number(prompt("Digite o valor do aumento: "));

let novoSalario = salario + aumento;

console.log(`O novo salário do funcionário é: R$ ${novoSalario}`);