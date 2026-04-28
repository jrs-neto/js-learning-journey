const pessoa = {
  nome: "André",
  idade: 28,
};

console.log(pessoa);

const quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// const quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado;
//   },
//   cinco() {
//     return 5;
//   },
// };

console.log(Math.PI); // Retorna o valor de PI - 3.14
console.log(Math.random()); // Retorna um número aleatório
console.table(quadrado); //Organiza visualmente em uma tabela
