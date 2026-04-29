const prompt = require('prompt-sync')();

console.log("--- Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3 ---");

num = 15;

while (num <= 200) {
  quadrado = num * num;
    console.log(`O quadrado de ${num} é: ${quadrado}`);
    num = num + 3;
}