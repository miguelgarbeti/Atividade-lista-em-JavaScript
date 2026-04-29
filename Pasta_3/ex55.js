const prompt = require("prompt-sync")();

console.log("=== Somatório, Média e Total de Valores Lidos ===");

let s = 0;
let c = 0;
let m = 0;

while (true) {
    let v = Number(prompt("Insira um valor (0 ou negativo para sair): "));
   
    if (v <= 0) {
        break;
    }
   
    s = s + v;
    c++;
}

if (c > 0) {
    m = s / c;
    console.log(`Somatório: ${s}, Média: ${m}, Total de valores lidos: ${c}`);
} else {
    console.log("Nenhum valor positivo foi digitado");
}
