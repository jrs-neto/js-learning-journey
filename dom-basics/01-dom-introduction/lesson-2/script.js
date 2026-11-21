// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log(urlPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroElemento = document.querySelector(".ativo");
console.log(primeiroElemento);

// Retorne a linguagem do navegador
const linguaguemNavegador = window.navigator.language;
console.log(`O idioma do navegador é: ${linguaguemNavegador}`);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(`A largura atual da janela é: ${larguraJanela}`);
