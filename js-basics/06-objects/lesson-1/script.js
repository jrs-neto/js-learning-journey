const pessoa = {
  nome: "André",
  idade: 28,
};
console.log(pessoa);
console.log(pessoa.nome, pessoa.idade);

// const quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     return this.lados * lado;
//   },
// };
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

console.log(Math.PI); // Exibe o valor de PI
console.log(Math.random()); // Retorna um número aleatório

console.table(quadrado); // Organiza em uma tabela visual
