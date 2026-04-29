const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Caixa Retangular ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let comprimento = Number(prompt("Digite o comprimento da caixa: "));
let largura = Number(prompt("Digite a largura da caixa: "));
let altura = Number(prompt("Digite a altura da caixa: "));

let volume = comprimento * largura * altura;

console.log(`O volume da caixa é: ${volume}`);