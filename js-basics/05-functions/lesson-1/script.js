function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}

let total = 5 * pi(); // 15.7
console.log(total);

function imc(peso, altura) {
  // Parâmetros
  let imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8)); // Argumentos
console.log(imc(50, 1.3)); // Argumentos

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu.";
  } else if (cor === "verde") {
    return "Eu gosto de mato.";
  } else {
    return "Eu não tenho cor favorita.";
  }
}

console.log(corFavorita("verde"));
console.log(corFavorita("azul"));

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// addEventListener("click", function () {
//   console.log("Oi");
// });

function mostraConsole() {
  console.log("Oi");
}

addEventListener("click", mostraConsole);
