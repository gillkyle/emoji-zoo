const randomInt = require("random-int");

let randomNumber = randomInt(0, 2);
let animals = "";

switch (randomNumber) {
  case 0:
    animals = "🐘";
    break;
  case 1:
    animals = "🐷";
    break;
  case 2:
    animals = "🐂";
    break;
  default:
    animals = "😺";
    break;
}

console.log(animals);

module.exports = {};
