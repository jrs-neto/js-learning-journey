// console.log(window);
// window.alert("Isso é um alerta do Browser!");

console.log(window.location.href);

const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/dom-introduction/lesson-1/") {
  console.log("É igual");
} else {
  console.log("O usuário está na página incorreta");
}

const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);

console.log(document.body);

// alert("Teste");
