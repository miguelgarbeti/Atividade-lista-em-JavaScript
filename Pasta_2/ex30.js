const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação com Exame ---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média das notas é: ${media.toFixed(2)}`);

if (media > 7) {
    console.log("O aluno está APROVADO.");
} 


else if (media >= 5){
    console.log("O aluno está em EXAME.");
}
else{
    console.log("O aluno está REPROVADO.");
}