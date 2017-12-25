// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Victor", "Laucas"));
// Immediately invoked version 
(function (first, last) {
    console.log(first + " " + last);
})('Victor', "Laucas");
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map