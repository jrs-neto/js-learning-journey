function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
let total = 5 * pi();
console.log(total);
console.log(pi());

function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores.";
  }
}

console.log(corFavorita("azul"));
console.log(corFavorita());

// addEventListener("click", function () {
//   console.log("Oi");
// });

function mostraConsole() {
  console.log("Oi");
}
addEventListener("click", mostraConsole);
