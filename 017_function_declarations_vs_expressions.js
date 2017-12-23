// Function declaration 
function fullName(first, last) {
    return first + " " + last;
}
// fuction expression 
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
//Function expressions can only be called after the expression is defined
//Function declaration can be called anywhere in the code
console.log(fullName("Victor", "Laucas"));
console.log(otherFullName("Victor", "Laucas"));
console.log(thirdFullName("Victor", "Laucas"));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map