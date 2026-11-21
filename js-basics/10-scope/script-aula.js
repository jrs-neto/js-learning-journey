"use strict";
// Escopo de Função
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas

// let carro = "Fusca";
// function mostrarCarro() {
//   let carro = "Fusca";
//   // carro = "Fusca";
//   console.log(carro);
// }
// mostrarCarro(); // Mostra Fusca no console
// console.log(carro); // Erro, carro is not defined

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas
// pelas funções

// let carro = "Fusca";

// function mostrarCarro() {
//   let frase = `Meu carro é um ${carro}`;
//   console.log(frase);
// }

// mostrarCarro(); // Meu carro é um Fusca
// console.log(carro); // Fusca

// Escopo de Bloco
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6
// a melhor forma de declarar uma variável é utilizando const e let, pois estas
// respeitam o escopo de bloco.

// if (true) {
//   var carro = "Fusca";
//   console.log(carro);
// }
// console.log(carro);

// if (true) {
//   // let mes = "Dezembro";
//   var mes = "Dezembro";
//   console.log(mes);
// }
// console.log(mes);

// Var vaza o bloco
// Mesmo com a condição falsa, a variável ainda será declarada utilizando
// hoisting e o valor ficará como undefined

// if (false) {
//   var carro = "Fusca";
//   console.log(carro);
// }
// console.log(carro); // undefined

// {
//   var carro = "Fusca";
//   const ano = 2018;
// }
// console.log(carro); // Carro
// console.log(ano); // erro ano is not defined

// For Loop
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável
// utilizada irá vazar e existir fora do loop.

// var i = 50;

// for (var i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }
// console.log(i);
// console.log(i * 10);

// Const
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação
// do valor da variável, evitando bugs no código.

// const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};
data.dia = 29; // Funciona
// data = "Janeiro"; //erro

// Let mantém o escopo no bloco, impede a redeclaração, mas permite
// a modificação do valor da variável

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; //erro, redeclarou a variável.
