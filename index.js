require("dotenv").config();
const envConfig = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};
const Twit = require("twit");
// const config = require("./config");
const chalk = require("chalk");
const randomSelect = require("./random-select");
const getRandomNumber = randomSelect.getRandomNum;
const zoos = require("./zoos.js");

const HOURS_TO_WAIT = 0.25;
const GRID_COLUMNS = 7;
const EMPTY_GRID_SPACE = "     ";

const emojiPeople = ["🚶🏽‍", "️🚶🏽‍", "️🏃🏽‍", "️🏃🏽‍"];
/*
7x3 grid for plants and animals
One row on bottom for people
One emoji takes 5 spaces ie each 
grid space represents 5 spaces
X X X X X X X
X X X X X X X
X X X X X X X
P P P P P P P
*/
const tweetZoo = () => {
  let grid = [[], [], []];
  let row_people = [];
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < GRID_COLUMNS; i++) {
      grid[j].push(EMPTY_GRID_SPACE);
      row_people.push(EMPTY_GRID_SPACE);
    }
  }

  let emojiSet = randomSelect.getEmojiSet();
  console.log(emojiSet);

  // add plants and animals
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < GRID_COLUMNS; i++) {
      if (getRandomNumber(3) === 0) {
        console.log(`plant placed on grid at: row ${j}, column ${i}`);
        grid[j][i] =
          emojiSet.plants[getRandomNumber(emojiSet.plants.length - 1)];
      }
      if (getRandomNumber(7) === 0) {
        console.log(`animal placed on grid at: row ${j}, column ${i}`);
        grid[j][i] =
          emojiSet.animals[getRandomNumber(emojiSet.animals.length - 1)];
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    if (getRandomNumber(3) == 0) {
      row_people[i] = emojiPeople[getRandomNumber(emojiPeople.length - 1)];
    }
  }

  let zoo = `
.    ________________   
╱                                ╲  
|  ${grid[0].join("")}  |
|  ${grid[1].join("")}  |
|  ${grid[2].join("")}  |
|╲_________________╱|
╲|___|___|___|___|___|╱
. ${row_people.join("")}
`;

  let T = new Twit(envConfig);
  T.post(
    "statuses/update",
    {
      status: zoo
    },
    function(err, data, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(chalk.green("Tweet posted successfully!"));
      }
    }
  );
};

console.log(chalk.yellow(`waiting ${HOURS_TO_WAIT} hour(s) before tweeting`));
setInterval(tweetZoo, 60 * 1000 * 60 * HOURS_TO_WAIT);
