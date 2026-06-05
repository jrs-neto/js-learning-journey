// const imgs = document.querySelectorAll("img");
// console.log(imgs);

// imgs.forEach(function (item, index, array) {
//   console.log(item); // O item atual no loop
//   console.log(index); // O número do index
//   console.log(array); // O Array completo
//   console.log(item, index, array);
// });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// titulosArray.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

const imgs = document.querySelectorAll("img");
imgs.forEach((item, index, array) => {
  console.log(item);
});

// Argumentos e Parênteses

// Argumento único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// Multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// Sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach((item) => console.log(item));
