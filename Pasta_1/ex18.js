const prompt = require('prompt-sync')();
console.log("---   Apuração de Votos em uma Eleição Sindical---");

// Importante: prompt sempre lê TEXTO. 
// Usamos Number() para converter, igual ao (int) ou (float) no C.
let votosCandidato1 = Number(prompt("Digite o número de votos do candidato 1: "));
let votosCandidato2 = Number(prompt("Digite o número de votos do candidato 2: "));
let votosCandidato3 = Number(prompt("Digite o número de votos do candidato 3: "));
let votosBrancos = Number(prompt("Digite o número de votos em branco: "));
let votosNulos = Number(prompt("Digite o número de votos nulos: "));

let totalVotos = votosCandidato1 + votosCandidato2 + votosCandidato3 + votosBrancos + votosNulos;

let percentualCandidato1 = (votosCandidato1 / totalVotos) * 100;
let percentualCandidato2 = (votosCandidato2 / totalVotos) * 100;
let percentualCandidato3 = (votosCandidato3 / totalVotos) * 100;
let percentualBrancos = (votosBrancos / totalVotos) * 100;
let percentualNulos = (votosNulos / totalVotos) * 100;

console.log(`Percentual de votos do candidato 1: ${percentualCandidato1.toFixed(2)}%`);
console.log(`Percentual de votos do candidato 2: ${percentualCandidato2.toFixed(2)}%`);
console.log(`Percentual de votos do candidato 3: ${percentualCandidato3.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${percentualBrancos}%`);
console.log(`Percentual de votos nulos: ${percentualNulos}%`);
console.log(`O total de votos é: ${totalVotos}`);
