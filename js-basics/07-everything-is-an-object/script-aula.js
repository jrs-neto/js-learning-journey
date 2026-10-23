let nome = "André";
console.log(nome);

console.log(nome.toLowerCase());
console.log(nome.length); // Retorna a quantidade de caracteres

let nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo);
console.log(nome.charAt(1)); // 'n'
console.log(nome.replace("ré", "rei")); // 'Andrei'

let numero = 11.8;
console.log(numero.toFixed()); //Arredonda o número para cima ou para baixo

let altura = 1.8;
console.log(altura.toString()); // Converte para String

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.toString());
console.log(areaQuadrado.length); // 1

console.log(addEventListener.length); // Retorna 2, nesse caso a função recebe 2 argumentos

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("Clicou");
});

console.log(btn.classList); // Retorna as classes

console.log(btn.classList.add("ativo"));

console.log(btn);

console.log(btn.innerText); // Retorna o valor que está dentro da classe selecionada
