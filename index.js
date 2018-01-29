const Twit = require("twit");
const config = require("./config");
const chalk = require("chalk");
const randomSelect = require("./random-select");

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

let animal = randomSelect.getAnimal();
row1[3] = animal;
row2[6] = animal;
row3[1] = animal;

let zoo = `
.    ________________   
╱                                ╲  
|  ${row1.join("")}  |
|  ${row2.join("")}  |
|  ${row3.join("")}  |
|╲_________________╱|
╲|___|___|___|___|___|╱

`;

let T = new Twit(config);
T.post(
  "statuses/update",
  {
    status: zoo
  },
  function(err, data, response) {
    console.log(chalk.green("Tweet posted successfully!"));
  }
);

// proper alignment of characters for shape on Twitter
let emptyZoo = `
.
╱￣￣￣￣￣￣￣￣￣╲
|                                      |
|                                      |
|                                      |
|╲_________________╱|
╲|___|___|___|___|___|╱

`;
let fullZoo = `
.    _____________   
╱     🐘                ╲  
|        🌱   🐘           |🏃‍♀️
|                      🌾     |
|╲______________╱|    
╲|___|___|___|___|╱         
 🚶      🏃‍♀️
`;
