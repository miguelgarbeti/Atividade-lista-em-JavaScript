const prompt = require('prompt-sync')();

console.log("--- Multiplicação e Verificação ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
    let num = Number(prompt("Digite um valor inteiro: "));

let resul = num * 2
if (resul > 30) {
    console.log (`${num} multiplicado por 2 é igual a ${resul} que é maior que 30`);
}   else {
        console.log ("Nenhum resultado apresentado")

}