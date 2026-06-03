// const animais = document.getElementById("animais");
// // console.log(animais.innerText); // Retorna o texto
// console.log(animais);

// // Seleciona pela classe, retorna uma HTMLCollection
// const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);

// // Retorna o primeiro elemento
// console.log(gridSection[0]);

// const contato = document.getElementsByClassName("grid-section contato");
// console.log(contato);

// // Seleciona todas as Ul's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// Seletor Geral Único
// const primeiraLi = document.querySelector("li");
// console.log(primeiraLi);

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);
// console.log(linkInterno.href);

// const animais = document.querySelector(".animais");
// console.log(animais);

// const contato = document.querySelector("#contato");
// console.log(contato);

// const ultimoItem = document.querySelector(".animais-list li:last-child");
// console.log(ultimoItem);

// const linkCSS = document.querySelector('[href^="https://"]');
// console.log(linkCSS);

// // Busca dentro da UL apenas
// const navItem = primeiraUl.querySelector("li");
// console.log(navItem);

// Seletor Geral Lista - Retorna uma NodeList
const gridSection = document.querySelectorAll(".grid-section");
console.log(gridSection);

const listas = document.querySelectorAll("ul");
console.log(listas);

const titulos = document.querySelectorAll(".titulo");
console.log(titulos);

const fotosAnimais = document.querySelectorAll(".animais-lista img");
console.log(fotosAnimais);

// Retorna o segundo elemento
console.log(gridSection[1]);
