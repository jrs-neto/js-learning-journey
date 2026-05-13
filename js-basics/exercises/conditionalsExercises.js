// 1.Crie uma variável idade.
// Se for maior ou igual a 18 → "Pode entrar"
// Senão → "Não pode entrar"

// let idade = 18;
// if (idade >= 18) {
//   console.log("Pode entrar");
// } else {
//   console.log("Não pode entrar");
// }

let idade = 17;
let mensagem = idade >= 18 ? "A pessoa pode entrar" : "A pessoa não pode entrar";
console.log(mensagem);

// 2.Crie uma variável numero.
// Se for maior que 0 → "Positivo"
// Se for menor que 0 → "Negativo"
// Senão → "Zero"

let numero = -10;
if (numero > 0) {
  console.log("O número é positivo");
} else if (numero < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}

// 3.Crie uma variável nome.
// Se estiver vazia → "Nome não informado"
// Senão → mostre o nome
// (usa o conceito de truthy/falsy aqui)

let nome = "José";
if (!nome) {
  console.log("Nome não informado");
} else {
  console.log(`O nome na variável é ${nome}`);
}

// 4.Crie uma variável temCarteira (boolean).
// Se for true → "Pode dirigir"
// Senão → "Não pode dirigir"
let temCarteira = false;
let podeDirigir = temCarteira ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);

// Etapa 2
// 5.Crie duas variáveis:
// let usuario = "José";
// let senha = "1234";
// Se usuário for "José" E senha "1234" → "Login bem sucedido"
// Senão → "Login inválido"
// (usa &&)

let usuario = "José";
let senha = 1234;
// let loginUsuario;
// loginUsuario = usuario === "José" && senha === 1234 ? "Login bem sucedido" : "Login Inválido";
// console.log(loginUsuario);

if (usuario === "José" && senha === 1234) {
  console.log("Login bem sucedido");
} else {
  console.log("Login inválido");
}

// 6.Crie uma variável cor.
// Se for "azul" OU "verde" → "Cor permitida"
// Senão → "Cor não permitida"
// (usa ||)

let cor = "preto";

if (cor === "azul" || cor === "verde") {
  console.log("Cor permitida");
} else {
  console.log("Cor não permitida");
}

// 7.Crie uma variável valor.
// Mostre no console:
// Valor é truthy
// ou
// Valor é falsy
// usando !!

let valor = "";
if (!!valor) {
  console.log("O valor é Truthy");
} else {
  console.log("O valor é Falsy");
}
console.log(!!valor);

//Etapa 3

// 8.Crie uma variável nota (0 a 10).
// = 7 → "Aprovado"
// = 5 → "Recuperação"
// < 5 → "Reprovado"
// ordem importa aqui
let nota = 5;
if (nota >= 7) {
  console.log(`Aprovado com a nota ${nota}`);
} else if (nota >= 5) {
  console.log(`Está de recuperação, pois sua nota foi ${5}`);
} else {
  console.log(`Reprovado, pois sua nota foi ${nota}`);
}

// 9.Crie duas variáveis:
// let temDinheiro = true;
// let estaSol = false;
// Mostre:
// "Vou sair" → se pelo menos uma for true
// "Vou ficar em casa" → se nenhuma for true
let temDinheiro = true;
let estaSol = false;
if (temDinheiro || estaSol) {
  console.log("Vou sair");
} else {
  console.log("Vou ficar em casa");
}

// 10.Sem usar if, use && ou ||:
// Se nomeCidade existir → mostrar nome
// Senão → "Nome não informado"
let nomeCidade = "Rio de Janeiro" || "Nome não informado";
