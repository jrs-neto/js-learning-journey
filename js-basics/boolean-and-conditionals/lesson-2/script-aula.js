// Operador Lógico &&
// Retorna o último valor true
// OU
// Retorna o 1° valor falso
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if (5 - 10 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

let condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("A condição é verdadeira");
} else {
  console.log("A condição é falsa");
}

// Operador Lógico || - Retorna o 1° valor verdadeiro
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

let condicional2 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional2);

let corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu, para ver sua cor favorita.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol, para ver sua cor favorita.");
    break;
  case "Verde":
    console.log("Olhe para a floresta, para ver sua cor favorita.");
    break;
  default:
    console.log("Feche os olhos.");
}
