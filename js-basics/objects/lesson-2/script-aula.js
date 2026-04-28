// Dot Notation Get & Set

const menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
menu.color = "blue";
menu.height = 50;
menu.position = "fixed";

console.log(menu);

menu.esconder = function () {
  console.log("Escondi");
};
console.log(menu.esconder());

let bg = menu.backgroundColor;
console.log(bg);

// This irá fazer uma referência ao próprio objeto.
let height = 120;

const menu2 = {
  with: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2; // sem o this o resultado seria 60
  },
};

console.log(menu2.metadeHeight());
console.log(menu.hasOwnProperty("width")); //Verifica se tem essa propriedade no objeto.
