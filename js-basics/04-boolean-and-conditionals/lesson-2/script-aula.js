// Operadores lógicos &&
// && Compara se uma expressão e a outra é verdadeira
// Retorna o PRIMEIRO valor FALSO que encontrar ou o ÚLTMO valor VERDADEIRO

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

let condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

// Operadores lógicos ||
// Compara se uma expressão ou outra é verdadeira
// Retorna o primeiro valor true que encontrar
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// let condicional2 = 5 - 5 || 5 + 5;
// console.log(condicional2); // Retorna 10

let condicional2 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional2); // Retorna 8

// Switch/Case

let corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  case "Verde":
    console.log("Olhe para a floresta.");
    break;
  default:
    console.log("Feche os olhos.");
}
