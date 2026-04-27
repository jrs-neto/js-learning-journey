// let possuiGraduacao = true;

// if (possuiGraduacao) {
//   console.log("É verdadeiro");
//   let x = 10;
//   console.log(`A variável ${x} só foi exibida porque a condicional é verdadeira.`);
// } else {
//   console.log("É falso");
// }

let possuiGraduacao = false;
let possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

// Valores avaliados como Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// Valores avaliados como Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

let nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

// Operador ! nega uma operação booleana, !true é = a false;
// Podemos utilizar !! para verificar se uma expressão é Truthy ou Falsy

// Truthy
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

if (!possuiGraduacao) {
  console.log("Não possui graduação");
}

// Operadores de comparação (vão sempre retornar um valor booleano)
// 10 > 5 - true;
// 10 > 10 - false;
// 10 >= 10 - true;
// 10 <= 10 - true;

// Operadores de comparação == e ===
// 10 == '10'; // true
// 10 == 10; // true
// 10 === '10'; // false
// 10 === 10 // true
// 10 != 15 // true
// 10 != '10' // false
// 10 !== '10' // true

// Retorna true ou false
// let x = "Gatos";
// console.log(x !== "Gato");

// let x = 10;
// console.log(x === "10");
// console.log(x == 10);
// console.log(x !== 10);
// console.log(x !== 11);
