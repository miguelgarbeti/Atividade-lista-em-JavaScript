const prompt = require('prompt-sync')();

console.log("--- Potências de 3 ---");

let exp = 0;
while (exp <= 15) {
    let pot = Math.pow(3, exp);
    console.log(`3 elevado a ${exp} é igual a ${pot}`);
    exp++;
}