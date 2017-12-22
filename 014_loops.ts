// var x : number = 0;

// while(x < 10) {
//   console.log(x);
//   x++;
// }

let players : number[] = [3, 10 , 4, 5, 1]
// For in 
// Provides index values
console.log("For/in")
for (let player in players) {
  console.log(player);
}

// For of 
// Provides value 
console.log("For/of")
for (let player of players) {
  console.log(player);
}