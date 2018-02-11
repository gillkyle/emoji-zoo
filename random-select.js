const randomInt = require("random-int");

const emojiSets = {
  common: [
    ["🐃", "🐂", "🐪", "🐫", "🐘", "🐐", "🐖", "🐏", "🐑"],
    ["🌺", "🌻", "🌳", "🌱", "🌿", "🌾"]
  ],
  cats: [["🐆", "🐅"], ["🌳", "🌱", "🌿", "🌾"]],
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
function addElementsToSet(emojiSet, numPlants, numAnimals, setType) {
  for (let i = 0; i < numAnimals; i++) {
    emojiSet.animals.push(randomElementOfArray(emojiSets[setType][0]));
  }
  for (let i = 0; i < numPlants; i++) {
    emojiSet.plants.push(randomElementOfArray(emojiSets[setType][1]));
  }
  return emojiSet;
}

function getEmojiSet() {
  let probabilityNum = randomInt(0, 100);
  let numPlants = 0;
  let numAnimals = 0;
  let emojiSet = {
    animals: [],
    plants: []
  };
  while (numPlants === 0 || numAnimals === 0) {
    if (numPlants === 0) {
      numPlants = getRandomNum(MAX_PLANTS);
    }
    if (numAnimals === 0) {
      numAnimals = getRandomNum(MAX_ANIMALS);
    }
  }
  switch (true) {
    case probabilityNum <= 40:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "common");
      break;
    case probabilityNum <= 45:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "cats");
      break;
    case probabilityNum <= 60:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "small");
      break;
    case probabilityNum <= 70:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "water");
      break;
    case probabilityNum <= 75:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "reptile");
      break;
    case probabilityNum <= 90:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "single");
      break;
    case probabilityNum <= 99:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "fly");
      break;
    case probabilityNum <= 100:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals, "rare");
      break;
    default:
      emojiSet = addElementsToSet(emojiSet, numPlants, numAnimals);
      break;
  }
  return emojiSet;
}

module.exports = { getEmojiSet, getRandomNum };
