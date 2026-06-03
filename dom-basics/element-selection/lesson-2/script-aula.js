// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

// const gridSectionHTML = document.getElementsByClassName("grid-section");
// const gridSectionNode = document.querySelectorAll(".grid-section");

// primeiraUl.classList.add("grid-section");

// console.log(gridSectionHTML[0]); // Ela atualiza os valores
// console.log(gridSectionNode[0]); // Os valore são estáticos

// gridSectionNode.forEach(function (item, index) {
//   console.log(item);
// });

// Transforma uma HTMLColletcion em Array
// const arrayGrid = Array.from(gridSectionHTML);
// console.log(arrayGrid);
// console.log(arrayGrid.pop());

// arrayGrid.forEach(function (item) {
//   console.log(item);
// });

// Array-Like
// Obs: O método Array forEach() só existe em NodeList

const gridSection = document.querySelectorAll(".grid-section");
console.log(gridSection);

gridSection.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // Index do item no array
  console.log(array); // A array completa
});
