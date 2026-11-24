// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada
// com querySelectorAll é estática.

// const titulo = document.querySelector(".titulo");
// const gridSectionHTML = document.getElementsByClassName("grid-section");
// const gridSectionNode = document.querySelectorAll(".grid-section");

// titulo.classList.add("grid-section");

// console.log(gridSectionHTML); // 4 itens
// console.log(gridSectionNode); // 3 itens

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

// const gridSectionHTML = document.getElementsByClassName("grid-section");
// const gridSectionNode = document.querySelectorAll(".grid-section");

// primeiraUl.classList.add("grid-section");

// console.log(gridSectionHTML); // Atualizou para 4 itens
// console.log(gridSectionNode); // Manteve 3 itens

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

// Array-Like
// HTMLCollection e NodeList são array-lie, parecem uma array mas não são. O método forEach()
// por exemplo, existe apenas em NodeList.

// const gridSection = document.querySelectorAll(".grid-section");

// gridSection.forEach(function (gridItem, index, array) {
//   gridItem.classList.add("azul");
//   console.log(index); // index do item na array
//   console.log(array); // retorna a array completa
// });

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

const gridSectionNode = document.querySelectorAll(".grid-section");

gridSectionNode.forEach(function (item, index, array) {
  console.log(item);
});

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

primeiraUl.classList.add("grid-section");

const gridSectionHTML = document.getElementsByClassName("grid-section");

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

console.log(arrayGrid.pop()); // Remove e retorna o último item.

console.log(arrayGrid);

arrayGrid.forEach(function (item) {
  console.log(item);
});
