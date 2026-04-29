const prompt = require('prompt-sync')();

console.log("--- Somatório da Fatorial de Quinze Valores ---");
let somatorio = 0;
for (let v = 1; v <= 15; v++) {
    let fatorial = 1;
    for (let i = 1; i <= v; i++) {
        fatorial = fatorial * i;
    }   
    somatorio += fatorial;
}

console.log(`O somatório da fatorial de quinze valores é: ${somatorio}`);
