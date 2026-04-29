const prompt = require('prompt-sync')();

console.log("--- Fatorial de cada número ímpar entre 1 e 100 ---");

// O loop externo percorre os números ímpares
for (let impar = 1; impar <= 100; impar += 2) {
    
    // IMPORTANTE: Reiniciamos o 'res' para 1 a cada novo número ímpar
    let res = BigInt(1);
    
    // O loop interno calcula o fatorial do número atual
    for (let valor = 1; valor <= impar; valor++) {
        res = res * BigInt(valor);
    }
    
    // Exibe o resultado individual de cada número ímpar
    console.log(`Fatorial de ${impar} = ${res.toString()}`);
    console.log("---------------------------------------");
}