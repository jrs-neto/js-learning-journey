function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc(20, 1.8); // undefined
console.log(imc(1000, 1.8)); // retorna o imc e undefined

// Uma função pode retornar diferentes tipos de dados, mas não é uma boa prática retornar diferentes tipos de dados em uma mesma função.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número.";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("Oi"));
console.log(terceiraIdade(50));

// Escopo
let totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  // let totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}

// console.log(totalPaises);

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

console.log(dados()); // Retorna "André, 29, Rio de Janeiro, Designer"
// outrosDados(); // retorna um erro
