// Node
// Toda tag html é representada pelo objeto Element e por isso herda
// os seus métodos e propriedades. Element é um tipo de objeto Node.

// const titulo = document.querySelector("h1");
// console.log(titulo.innerText); // retorna o texto
// console.log(titulo.classList); // retorna as classes
// console.log(titulo.id); // retorna o id
// console.log(titulo.offsetHeight); // retorna a altura do elemento

// titulo.addEventListener("click", callback);

const h1Selecionado = document.querySelector("h1");
// console.log(h1Selecionado.classList);
// console.log(h1Selecionado.classList[0]);
// console.log(h1Selecionado.classList[1]);

// h1Selecionado.addEventListener("click", function () {
//   console.log("Clicou em", h1Selecionado.innerText);
// });

function callbackh1() {
  console.log(`Clicou em ${h1Selecionado.innerText}`);
}

h1Selecionado.addEventListener("click", callbackh1);
