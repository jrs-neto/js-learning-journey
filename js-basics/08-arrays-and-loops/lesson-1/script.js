// Array - Serve para guardar diferentes valores em uma única variável.

let videoGames = ["Switch", "PS4", "XBOX"];
console.log(videoGames);

console.log(videoGames.pop()); // Remove o último item e retorna ele
console.log(videoGames.push("3DS")); // Adiciona um ítem ao final da Array
console.log(videoGames.length); // Retorna a quantidade de itens do Array

// let ultimoItem = videoGames.pop();
// console.log(ultimoItem);

// For Loop - Faz algo repetidamente até que uma condição seja atingida
// Possui 3 partes - Início, condição e incremento

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

let i = 0;
while (i <= 100) {
  console.log(i);
  // i++;
  i = i + 5;
}
