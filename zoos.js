// proper alignment of characters for shape on Twitter
let oldEmptyZoo = `
.
╱￣￣￣￣￣￣￣￣￣╲
|                                      |
|                                      |
|                                      |
|╲_________________╱|
╲|___|___|___|___|___|╱

`;
let emptyZoo = `
.
.    ________________   
╱                                ╲  
|                                      |
|                                      |
|                                      |
|╲_________________╱|
╲|___|___|___|___|___|╱

`;
let smallZoo = `
.    _____________   
╱     🐘                ╲  
|        🌱   🐘           |🏃‍♀️
|                      🌾     |
|╲______________╱|    
╲|___|___|___|___|╱         
 🚶      🏃‍♀️
`;
let harambeZoo = `
.    ________________   
╱                                ╲  
|   🌱   🦍                      |❗
|       👶               🌱      |👮‍♂️
|                🌱                 |🔫
|╲_________________╱|
╲|___|___|___|___|___|╱
.       🚨👮‍♀️🚨
`;

module.exports = {
  emptyZoo,
  smallZoo,
  harambeZoo
};

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
