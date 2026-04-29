const prompt = require('prompt-sync')();

console.log("--- Soma e Verificação ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
    let num1 = Number(prompt("Digite o primeiro valor: "));
    let num2 = Number(prompt("Digite o segundo valor: "));
    let num3 = Number(prompt("Digite o terceiro valor: "));

    let soma = num1 + num2 + num3 
if (soma > 100) {
    console.log (`$soma`)
}
else {
    console.log ("Nenhum valor apresentado")
}