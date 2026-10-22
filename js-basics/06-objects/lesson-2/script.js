// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const dadosPessoais = {
  nome: "José",
  sobrenome: "Rodrigues",
  idade: 33,
  cidade: "Rio de Janeiro",
  // nomeCompleto() {
  //   return `Meu nome completo é ${this.nome} ${this.sobrenome}`;
  // },
};
// console.log(dadosPessoais.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: "labrador",
  cor: "preta",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return `O cachorro de cor ${this.cor}, da raça ${this.raca}, latiu, pois viu um homem.`;
    } else {
      return `O cachorro não fez nada.`;
    }
  },
};
console.log(cachorro.latir("homem"));
console.log(cachorro.latir("mulher"));
