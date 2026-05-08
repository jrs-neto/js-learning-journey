let nome = "André";

let nomeMinusculo = nome.toLocaleLowerCase();
console.log(nomeMinusculo);
console.log(nome.toLocaleLowerCase()); // Transforma as letras em minúsculas
console.log(nome.length); // Retorna a quantidade de caracteres

let numero = 1.8;
console.log(numero.toFixed()); // Arredonda o número para cima ou para baixo
console.log(numero.toString()); // Converte para String (coersão)

console.log(addEventListener.length); // Retorna a quantidade de parâmetros que ele pode ter

let btn = document.querySelector(".btn"); //Recebe um seletor, igual o seletor css
console.log(btn);

btn.addEventListener("click", function () {});
console.log(btn.classList);
btn.classList.add("ativo"); // Adiciona uma classe
console.log(btn.classList);
console.log(btn.innerText); // Retorna o valor (texto)
