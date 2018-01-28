const randomInt = require("random-int");

const animalSets = {
  common: ["🐆", "🐅", "🐃", "🐂", "🐪", "🐫", "🐘", "🐐", "🐖", "🐏", "🐑"],
  small: ["🦂", "🐍", "🦎", "🐒", "🐇", "🐀", "🐿", "🦔"],
  water: ["🐧", "🐢", "🦀", "🐊", "🦆"],
  fly: ["🐦", "🐣", "🐤", "🦇", "🦉"],
  rare: ["🦕"]
};

function getAnimal() {
  let probabilityNum = randomInt(0, 100);
  let animals = "";

  switch (true) {
    case probabilityNum <= 50:
      animals = animalSets.common[randomInt(0, animalSets.common.length - 1)];
      break;
    case probabilityNum <= 75:
      animals = animalSets.small[randomInt(0, animalSets.small.length - 1)];
      break;
    case probabilityNum <= 90:
      animals = animalSets.water[randomInt(0, animalSets.water.length - 1)];
      break;
    case probabilityNum <= 99:
      animals = animalSets.fly[randomInt(0, animalSets.fly.length - 1)];
      break;
    case probabilityNum <= 100:
      animals = animalSets.rare[randomInt(0, animalSets.rare.length - 1)];
      break;
    default:
      animals = animalSets.common[randomInt(0, animalSets.common.length - 1)];
      break;
  }
  return animals;
}

// 🌵
// 🌲
// 🌳
// 🌴
// 🌱
// 🌿
// 🎍
// 🎋
// 🌾
// 🌺
// 🌻
// 🍄
// 🌰
// 🐚
// ⬜️

module.exports = { getAnimal };
