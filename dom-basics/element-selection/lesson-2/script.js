// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('[src^="./img/imagem"]');
console.log(imagens);

const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
// const h2Animais = document.querySelector(".animais-descricao h2");
// console.log(h2Animais);

const animais = document.querySelector(".animais-descricao");
const h2Animais = animais.querySelector("h2");

console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const todosOsP = document.querySelectorAll("p");
console.log(todosOsP[todosOsP.length - 1]);
