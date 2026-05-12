"use strict";
let carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Mostra Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
  // let mes = "Dezembro";
  var mes = "Dezembro";
  console.log(mes);
}

console.log(mes); // Consegue acessar porque var vaza o escopo, com let e const retorna um erro

{
  var carro2 = "Fusca2";
  const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined

var i = 50;

for (let i = 0; i < 10; i++) {
  console.log(`Numero ${i}`);
}
console.log(i * 10);

const semana = "Sexta";
// semana = "Quinta"; // Erro
// const semana = "Quinta"; // Erro

console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro",
};

data.ano = 2020;
// data = 2020; // Erro
data.dia = 25;
console.log(data);
