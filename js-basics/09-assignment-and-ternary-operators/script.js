// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
darCredito =
  possuiCarro && possuiCasa
    ? "O cliente recebeu crédito, pois possui carro e casa."
    : "Faltam itens necessários para o cliente receber crédito.";

console.log(darCredito);
