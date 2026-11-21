// Por qual motivo o código abaixo retorna com erros?
// 1° motivo - O console.log estava retornando "Var" ao invés do nome da variável que é "cor"
// 2° motivo - O console.log estava fora do escopo e assim as variáveis "marca e portas", não estavam sendo exibidas
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo? R: Colocando a constante de nome "dois" para
// fora do escopo da função, assim ela poderá ser acessada
// pelas duas funções.
const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500? R: Alterei a palavra var para let dentro do for loop
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
