// Seleciona pelo ID
// const animais = document.getElementById("animais");
// console.log(animais);
// console.log(animais.innerText); // Retorna o texto
// const contato = document.getElementById("contato");
// console.log(contato);

// Retorna null caso não exista
// const naoExiste = document.getElementById("teste");
// console.log(naoExiste); // null

// Classe e Tag
// Selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo,
// significa que se novos elementos forem adicionados, ela será automaticamente atualizada.

// Selciona pela classe, retorna uma HTMLColletcion
// const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);
// console.log(gridSection.length);
// console.log(gridSection[1]);

// Seleciona somente as que tiverem as duas classes juntas, grid-section e contato
// const contato = document.getElementsByClassName("grid-section contato");
// console.log(contato);

// Seleciona toda as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// Retorna o primeiro elemento
// console.log(gridSection[0]);

// Seletor Geral Único
// querySelector - Retorna o primeiro elemento que combinar com o seu seletor CSS

// const animais = document.querySelector(".animais");
// console.log(animais);

// const contato = document.querySelector("#contato");
// console.log(contato);

// const ultimoItem = document.querySelector(".animais-lista li:last-child");
// console.log(ultimoItem);

// const linkCSS = document.querySelector('[href^="https://"]');
// console.log(linkCSS);

// const primeiroUl = document.querySelector("ul");
// console.log(primeiroUl);

// // Busca dentro do UL apenas
// const navItem = primeiroUl.querySelector("li");
// console.log(navItem);

// const primeiraLi = document.querySelector("li");
// console.log(primeiraLi);

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);
// console.log(linkInterno.href);

// Seletor Geral Lista
// querySelectorAll - Retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
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

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
console.log(animaisImg[1]);
