// Function declaration 
function fullName(first: string, last:string) : string {
  return first + " " + last;
}

// fuction expression 
var otherFullName : (first: string, last: string) => string;

otherFullName = function (first: string, last: string)  {
 return first + " " + last; 
}

var thirdFullName: (first: string, last: string) => string = function (first: string, last: string)  {
 return first + " " + last; 
}

//Function expressions can only be called after the expression is defined
//Function declaration can be called anywhere in the code

console.log(fullName("Victor", "Laucas"));
console.log(otherFullName("Victor", "Laucas"));
console.log(thirdFullName("Victor", "Laucas"));