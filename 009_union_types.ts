// Union types are constructs in ts that allow you to declare multiple potential data types for an object
type PlayerArray = Array<string|number>;
let players : PlayerArray = ["Alruve", "Corerra", "Bregman"];
let player_numbers : PlayerArray = [25, 4, 9];
console.log(players);
console.log(player_numbers);

var names : string[]|string;
names = ["Victor", "Kierra"];
console.log(names);
names = "Joe";
console.log(names);