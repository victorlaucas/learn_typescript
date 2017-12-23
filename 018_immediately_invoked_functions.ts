// Functions that are immediately ran 

var names : string[] = ['Victor', 'Kierra', 'Jordan'];
var counter: number = 0;

(function() {
  for (let name in names) {
    counter ++;
  }
})();
// () at the end of the function means it is an immediately invoked function


console.log(counter);