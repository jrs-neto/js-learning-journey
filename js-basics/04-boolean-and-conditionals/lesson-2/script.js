// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 33;
let idadePrima = 35;

if (minhaIdade > idadePrima) {
  console.log("Minha idade é maior que a idade da minha prima.");
} else if (minhaIdade === idadePrima) {
  console.log("Minha idade é igual a idade da minha prima.");
} else {
  console.log("Minha idade é menor que a idade da minha prima.");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // O Retorno é 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil possui mais habitantes que a China");
} else if (brasil === china) {
  console.log("O Brasil possui a mesma quantidade de habitantes que a China");
} else {
  console.log("A China possui mais habitantes que o Brasil.");
}

// O que irá aparecer no console? // O retorno é falso.
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console? // O retorno é Cão
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
