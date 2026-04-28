function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc(80, 1.8); // undefined
console.log(imc(100, 1.8)); // retorna o imc e undefined

//Não é uma boa prática retornar diferentes tipos de dados em uma função
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor, preencha um número!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

let totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));

let profissao = "Designer";

function dados() {
  let nome = "André";
  let idade = 28;
  function outrosDados() {
    let endereco = "Rio de Janeiro";
    let idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna André, 29, Rio de Janeiro, Designer
