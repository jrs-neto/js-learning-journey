// Por qual motivo o código abaixo retorna com erros? R: Porque colocou o valor "var" no console.log o correto seria "cor", a palavra "var", não é o nome de uma variável e o console.log estava fora do escopo, e não poderia acessar as variáveis que foram criadas dentro do escopo.
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo? R: Movi a constante "dois", para fora do escopo, assim podendo ser acessada pelas duas funções e também mudando o operador + para / já que a segunda função é uma divisão.
const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500? R: Modifiquei o var do loop para let e assim o loop não alterar o valor da variável fora do escopo.
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
