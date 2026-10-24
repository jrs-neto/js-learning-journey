// let videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// for (let item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item]);
// }

let videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

// foEach - Podemos passar os seguintes parâmetros - item, idex, array

let frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (item, index, array) {
  // frutas.pop();
  console.log(item, index, array);
});

// Funciona, mas não é aconselhavel escrever dessa forma
// let numero = 0;
// let maximo = 50;
// for (; numero < maximo; ) {
//   console.log(numero);
//   numero++;
// }
