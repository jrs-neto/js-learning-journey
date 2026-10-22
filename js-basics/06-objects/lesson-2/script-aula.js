// const menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: "#84E",
// };

// menu.backgroundColor = "#000"; // Altera o valor da propriedade
// menu.color = "blue"; // Cria uma nova propriedade

// menu.esconder = function () {
//   console.log("Escondi");
// };

// const bg = menu.backgroundColor;
// console.log(bg);

let height = 120;
const menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    // return this.height / 2;
    return height / 2;
  },
};

console.log(menu.metadeHeight());
console.log(menu.hasOwnProperty("width")); // true
console.log(menu.hasOwnProperty("color")); // false

let nome = "José";
console.log(nome.length);
