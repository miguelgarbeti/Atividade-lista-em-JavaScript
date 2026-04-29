const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

console.log(`A média das notas é: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log("O aluno está APROVADO.");
} else {
    console.log("O aluno está REPROVADO.");
}