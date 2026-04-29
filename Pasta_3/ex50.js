const prompt = require('prompt-sync')();

console.log("--- Sequência de Fibonacci ---");

let termos1 = 0;
let termos2 = 1;

console.log(termos1);
console.log(termos2);

let i = 3;
while (i <= 15) {

    let proximoTermo = termos1 + termos2;
    console.log(proximoTermo);

    termos1 = termos2;
    termos2 = proximoTermo;
    i++;

}    