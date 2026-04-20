let soma = 10 + 10 + 20 + (30 * 4) / 2 + 10;
let soma2 = 10 + 10 + 20 + (30 * 4) / (2 + 10);
console.log(soma2);

//Operadores Aritméticos Unários
// let incremento = 5;
// console.log(incremento++); //Retorna o valor e depois incrementa

let incremento = 5;
console.log(++incremento); //Incrementa e depois retorna o valor

// let decremento = 5;
// console.log(decremento--); //Retorna o valor e depois decrementa

let decremento = 5;
console.log(--decremento); //Decrementa e depois retorna o valor
console.log(decremento);

// Colocar o sinal de + ou - na frente de uma string, transforma ele em número

let idade = +"28";
// let idade = "28";
// let idade = "28s"; // Retorna um NaN
let somaIdade = 5;
console.log(+idade + somaIdade);
