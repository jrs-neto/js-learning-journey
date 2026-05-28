const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);
console.log(h1Selecionado.classList);
console.log(h1Selecionado.classList[1]);

const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

h1Selecionado.innerText; // Retorna o texto;
h1Selecionado.classList; // Retorna as classes;
h1Selecionado.id; // Retorna o id;
h1Selecionado.offsetHeight; // Retorna a altura do elemento

// h1Selecionado.addEventListener("click", function () {
//   console.log("Clicou em", h1Selecionado.innerText);
// }); // ativa a função callback ao click

function callbackh1() {
  console.log("Você clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);
