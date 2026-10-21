// Tipos de dados primitivos, exceto os objetos.
// let nome = "Andre";
// let idade = 28;
// let simbolo = Symbol();
// console.log(typeof idade);

let nome = "André";
let sobrenome = "Rafael";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// let gols = 1000;
// let frase = "Romário fez " + gols + " gols";
// console.log(typeof frase); // O retorno é uma string

// Concatenação
let ano = "2018";
let mes = 8;
console.log(ano + mes);

let melhor = "teste";
let frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);

// let gols = 1000;
// let frase2 = "Romário fez " + gols + " gols";
// console.log(frase2);

// Template String
let gols = 1000;
let frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);
