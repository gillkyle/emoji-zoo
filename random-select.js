const randomInt = require("random-int");

const emojiSets = {
  common: [
    ["🐆", "🐅", "🐃", "🐂", "🐪", "🐫", "🐘", "🐐", "🐖", "🐏", "🐑"],
    ["🌺", "🌻", "🌳", "🌱", "🌿", "🌾"]
  ],
  small: [["🐒", "🐇", "🐀", "🐿", "🦔"], ["🌺", "🌻", "🌵", "🌳", "🌱", "🌿"]],
  water: [["🐧", "🐢", "🦀", "🐊", "🦆"], ["🌱", "🌿", "🎍", "🎋", "🍄"]],
  reptile: [["🦂", "🐍", "🦎"], ["🌵", "🌱", "🌿"]],
  single: [["🦇", "🦉"], ["🌺", "🌻", "🌲", "🌳", "🌱", "🌿"]],
  fly: [["🐦", "🐣", "🐤"], ["🌻", "🌳", "🌱", "🌿", "🎋"]],
  rare: [["🦕"], ["🌻", "🌳", "🌴", "🌱", "🌿", "🎍", "🍄"]]
};
const MAX_PLANTS = 3;
const MAX_ANIMALS = 3;

function randomElementOfArray(array) {
  return array[randomInt(0, array.length - 1)];
}
function getRandomNum(max) {
  return randomInt(0, max);
}
function addElementsToSet(emojiSet, numPlants, numAnimals) {
  for (let i = 0; i < numAnimals; i++) {
    emojiSet.animals.push(randomElementOfArray(emojiSets.common[0]));
  }
  for (let i = 0; i < numPlants; i++) {
    emojiSet.plants.push(randomElementOfArray(emojiSets.common[1]));
  }
  return emojiSet;
}

function getEmojiSet() {
  let probabilityNum = randomInt(0, 100);
  let emojiSet = {
    animals: [],
    plants: []
  };

  numPlants = getRandomNum(MAX_PLANTS);
  numAnimals = getRandomNum(MAX_ANIMALS);

  switch (true) {
    case probabilityNum <= 40:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals);

      break;
    // case probabilityNum <= 60:
    //   animals = emojiSets.small[0][randomInt(0, emojiSets.small.length - 1)];
    //   break;
    // case probabilityNum <= 70:
    //   animals = emojiSets.reptile[0][randomInt(0, emojiSets.reptile.length - 1)];
    //   break;
    // case probabilityNum <= 75:
    //   animals = emojiSets.single[0][randomInt(0, emojiSets.single.length - 1)];
    //   break;
    // case probabilityNum <= 90:
    //   animals = emojiSets.water[0][randomInt(0, emojiSets.water.length - 1)];
    //   break;
    // case probabilityNum <= 99:
    //   animals = emojiSets.fly[0][randomInt(0, emojiSets.fly.length - 1)];
    //   break;
    // case probabilityNum <= 100:
    //   animals = emojiSets.rare[0][randomInt(0, emojiSets.rare.length - 1)];
    //   break;
    default:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals);
      break;
  }
  return emojiSet;
}

module.exports = { getEmojiSet };
