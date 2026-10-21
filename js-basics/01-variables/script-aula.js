// Variáveis são responsáveis por guardar dados na memória.
let nome = "André";
let idade = 28;
let possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

let preco = 25;
let totalComprado = 5;
let totalPreco = totalComprado * preco;

console.log(totalPreco);

let sobrenome = "Rafael",
  cidade = "Rio";

console.log(sobrenome, cidade);

// Os nomes das variáveis podem iniciar com $, _ ou letras
// São Case sensitive
// Não utilizar palavras reservadas
// Comum utiliar Camel case

let semDefinir;
console.log(semDefinir); // undefined

// console.log(aindaNaoDefine); aindaNaoDefine is not defined

let comida;
console.log(comida);
comida = "Pizza";
console.log(comida);

let time = "Vasco";
time = "Flamengo";
console.log(time);
