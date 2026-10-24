// Operadores de Atribuição
// var x = 5;
// var y = 10;
// x += y; // x = x + y (15)
// x -= y; // x = x - y (-5)
// x *= y; // x = x * y (50)
// x /= y; // x = x / y (0.5)
// x %= y; // x = x % y (0)
// x **= y; // x = x ** y (9765625)

let numero = 20;
let numero2 = 10;
// numero = numero +10;
// numero += 10;
console.log((numero += numero2));
console.log((numero -= numero2));
console.log((numero *= numero2));
console.log((numero /= numero2));
console.log((numero %= numero2));
console.log((numero **= numero2));

// Operador Ternário - Abreviação de if e else

let idade = 20;
let naoPossuiDiabetes = false;

let podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Poder beber." : "Não pode beber.";
console.log(podeBeber);

// Podemos escrever if e else sem {}

let possuiFaculdade = false;
if (possuiFaculdade) console.log("Sim, possui.");
else console.log("Não possui.");
