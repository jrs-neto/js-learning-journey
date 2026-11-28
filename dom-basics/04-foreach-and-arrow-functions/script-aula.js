// forEach
// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item, index, array) {
//   // console.log(item); // O item atual no loop
//   // console.log(index); // o número do index
//   // console.log(array); // a Array completa
//   // console.log(item, index, array);
// });

// forEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal
// é transformá-los em uma array.
// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// titulosArray.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// Arrou Function
// Sintaxe curta em relação a function expression. Basta remover a palavra function e adicionar
// a fat arrow => após os argumentos.

const imgs = document.querySelectorAll("img");

// imgs.forEach((item) => {
//   console.log(item);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// Duas maneiras de criar o mesmo código.
// let i = 0;
// imgs.forEach(function () {
//   console.log(i++);
// });
// imgs.forEach(() => console.log(i++));
