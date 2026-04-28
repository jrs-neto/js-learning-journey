// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoas = {
  nome: "José",
  sobrenome: "Rodrigues",
  idade: 32,
  nomeCompleto() {
    return `Meu nome completo é: ${this.nome} ${this.sobrenome}`;
  },
};
console.log(dadosPessoas);
console.log(dadosPessoas.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo
// dadosPessoas.nomeCompleto = function () {
//   return `Meu nome completo é: ${this.nome} ${this.sobrenome}`;
// };

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
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return `O cachorro latiu, pois viu um homem`;
    } else {
      return `O cachorro não latiu, pois não viu um homem.`;
    }
  },
};

console.log(cachorro);
console.log(cachorro.latir("homem"));
