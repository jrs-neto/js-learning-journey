// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
  return !!valor;
}
console.log(verificaTruthy("José"));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Meu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto("José", "Rodrigues"));

// Crie uma função que verifica se um número é par
function evenOrOdd(numero) {
  if (numero % 2 === 0) {
    return `O número ${numero} é par.`;
  } else {
    return `O número ${numero} é ímpar.`;
  }
}
console.log(evenOrOdd(6));

// function isEven(numero) {
//   let modulo = numero % 2;
//   if (modulo === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retornaTipo(dado) {
  return typeof dado;
}
console.log(retornaTipo(50));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
function nomeCompleto() {
  console.log("José Rodrigues");
}

addEventListener("click", nomeCompleto);

// Corrija o erro abaixo
// Coloquei a variavel "totalPaises" para fora do escopo da função e assim pode ser utilizada globalmente.
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
