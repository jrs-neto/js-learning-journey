// Operadores de atribuição
let x = 5;
let y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

let numero = 20;
let numero2 = 10;

// numero = numero + numero;
// numero += numero;
numero += numero2;

console.log(numero);

// Operador Ternário
let idade = 20;
let naoPossuiDiabetes = false;

let podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

let possuiFaculdade = true;
if (possuiFaculdade) console.log("Sim, possui");
else console.log("Não possui");
