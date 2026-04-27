// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 32;
let idadeMae = 61;

if (minhaIdade > idadeMae) {
  console.log("Minha idade é maior que a idade da minha mãe");
} else if (minhaIdade === idadeMae) {
  console.log("Minha idade é igual a idade da minha mãe");
} else {
  console.log("Minha idade é menor que a idade da minha mãe");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // Retorna 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log(`O Brasil tem mais habitantes que a China. O total de habitantes do Brasil é ${brasil}`);
} else if (brasil === china) {
  console.log(`O Brasil e a China tem a mesma quantidade de habitantes.`);
} else {
  console.log(`A China tem mais habitantes que o Brasil. O total de habitantes da China é ${china}`);
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
