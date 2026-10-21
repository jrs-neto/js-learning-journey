// Condicionais If e Else
let possuiGraduacao = false;
let possuiDoutorado = true;

// if (possuiGraduacao) {
//   console.log("É verdadeiro");
// } else {
//   console.log("É falso");
// }

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

// Valores avaliados como Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

// Valores avaliados como Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// let nome = "José";
// let nome = "";
// let nome = -5;
// let nome = " ";
let nome = "10kg" / 10;

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

// Operador lógico de negação !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Não possui graduação");
}

// Posso Utilizar o !! para verificar se uma expressão é Truthy ou Falsy
// if(!true) //false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

// Operadores de comparação
10 > 5; // true
10 > 10; // false
10 >= 10; // true
10 <= 10; // true

// Operadores de comparação
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// let x = 10;
// let x = "10";
// console.log(x === 10);

// let palavra = "Gato";
let palavra = "gatos";
// console.log(palavra == "Gato");
// console.log(palavra !== "Gato");
console.log(palavra != "Gato");

let x = 10;
console.log(x !== 11);
