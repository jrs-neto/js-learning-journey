// Documento Object Model (DOM)
// window.alert("Esse é um alerta!");
// console.log(window.location.href);

const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/01-dom-introduction/lesson-1/") {
  console.log("A verificação da URL passou!");
}

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

console.log(window.innerHeight); // Retorna a altura do browser

// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feia através dos seus métodos
// e propriedades

// window.alert("Isso é um alerta");
// alert("Isso é um alerta"); // Funciona

const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);

console.log(document.body);
