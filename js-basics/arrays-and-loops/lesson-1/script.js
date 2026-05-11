let videoGames = ["Switch", "PS4", "XBOX"];
// console.log(videoGames);
// console.log(videoGames[2]); // Acessar um item da Array
// console.log(videoGames.pop()); // Remove o último item da array e retorna ele
// console.log(videoGames);

let ultimoItem = videoGames.pop();
console.log(ultimoItem);

console.log(videoGames.push("3DS")); // Adiciona um item ao final do Array
console.log(videoGames);

console.log(videoGames.length); // Retorna a quantidade de itens no Array

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

let i = 0;
while (i <= 100) {
  console.log(i);
  i++;
  // i = i + 5;
}
