const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valores entre Valores Positivos ---");

let me = -1;
let ma = -1;
while (true) {
   let V = Number(prompt("Digite um valor: "));  
   if (V >= 0) {
    if (ma < V) {
      ma = V;
    }
    if (me === -1 || me > V) {
      me = V;
    }
}
else {
        break; 
    }
console.log(`O maior valor é: ${ma}`);
console.log(`O menor valor é: ${me}`);
}

