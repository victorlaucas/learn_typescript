// Closures have the ability to encapsulate all kinds of behavior and data all into the same object
// Functions have access to any public variables in the outert scope 
// function nameFunction(name: string) : void {
//   var n: string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction("Victor");
// ************************************************************************************************
// The inner function maintain access to the outer scope even AFTER the values are returned!
// function nameFunction(name: string) {
//   var n: string = name;
//   return function() {
//     console.log(n);
//   }
// }
// var nameAgain = nameFunction("Joe");
// nameAgain();
// ************************************************************************************************
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
var pitchers = lineup();
console.log(pitchers.currentBatter());
//# sourceMappingURL=019_closure_introduction.js.map