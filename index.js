const Twit = require("twit");
const config = require("./config");
const chalk = require("chalk");
const randomSelect = require("./random-select");
const zoos = require("./zoos.js");

const GRID_COLUMNS = 7;
const EMPTY_GRID_SPACE = "     ";
/*
7x3 grid for plants and animals
One emoji takes 5 spaces ie each 
grid space represents 5 spaces
X X X X X X X
X X X X X X X
X X X X X X X
*/

let row1 = [];
let row2 = [];
let row3 = [];
for (let i = 0; i < GRID_COLUMNS; i++) {
  row1.push(EMPTY_GRID_SPACE);
  row2.push(EMPTY_GRID_SPACE);
  row3.push(EMPTY_GRID_SPACE);
}

let emojiSet = randomSelect.getEmojiSet();
row1[3] = emojiSet.animals[0];
row2[6] = emojiSet.plants[0];
row3[1] = emojiSet.animals[0];

let zoo = `
.    ________________   
╱                                ╲  
|  ${row1.join("")}  |
|  ${row2.join("")}  |
|  ${row3.join("")}  |
|╲_________________╱|
╲|___|___|___|___|___|╱

`;

console.log(zoos.harambeZoo);

let T = new Twit(config);
T.post(
  "statuses/update",
  {
    status: zoos.harambeZoo
  },
  function(err, data, response) {
    console.log(chalk.green("Tweet posted successfully!"));
  }
);
