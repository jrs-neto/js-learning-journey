// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector(".animais-descricao");
console.log(animais);

const primeiroh2 = animais.querySelector("h2");
console.log(primeiroh2);

// Selecione o último p do site
const selecionaP = document.querySelectorAll("p");
console.log(selecionaP);

const ultimoP = selecionaP[selecionaP.length - 1];
console.log(ultimoP);
