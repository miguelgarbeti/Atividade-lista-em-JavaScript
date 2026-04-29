const prompt = require('prompt-sync')();

console.log("--- Resolução de Equação de Segundo Grau ---");
// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let a = Number(prompt("Digite o valor de a: "));
let b = Number(prompt("Digite o valor de b: "));
let c = Number(prompt("Digite o valor de c: "));
let delta = b * b - 4 * a * c;

if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`As raízes da equação são: x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`);
} else if (delta === 0) {
    x = -b / (2 * a);
    console.log(`A equação tem uma raiz real: x = ${x.toFixed(2)}`);
} else {
    console.log("A equação não tem raízes reais.");
}