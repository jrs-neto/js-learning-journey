let videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// for (let item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item]);
// }

for (let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

let frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (item, index, array) {
  // frutas.pop();
  console.log(item, index, array);
});

// Não aconselhavel
// let numero = 0;
// let maximo = 50;
// for (; numero < maximo; ) {
//   console.log(numero);
//   numero++;
// }
