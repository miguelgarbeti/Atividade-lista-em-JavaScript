const prompt = require('prompt-sync')();
console.log("---   Sucessor e Antecessor de um Número Inteiro  ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let  base = Number(prompt("Insira um valor númerico inteiro: "));
let sucessor = base + 1;
let antecessor = base - 1;

console.log(`O sucessor de ${base} é: ${sucessor}`);
console.log(`O antecessor de ${base} é: ${antecessor}`);