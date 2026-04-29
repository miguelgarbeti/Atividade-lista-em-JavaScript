const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo ---");

let totalGrains = 0;
let quadro = 1;

while (quadro <= 64) {
    let graosNoQuadro = Math.pow(2, quadro - 1);
    totalGrains += graosNoQuadro; 
    
    console.log(`Quadro ${quadro}: ${graosNoQuadro} grãos`);
    quadro++;
}

console.log("-----------------------------------");
console.log(`Total final de grãos: ${totalGrains}`);