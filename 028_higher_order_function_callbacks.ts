// Callbacks are just methods
var dbQuery = function() : void {
  setTimeout(() => {
    console.log('Query Results');
  }, 3000);
}
// Convention for working with callbacks
// This is a higher order function. Is a method that takes a function/method as an Argument
function loadPage(q: () => void) {
  console.log("Header");
  q();
  console.log("Sidebar");
  console.log("Footer");
}

loadPage(dbQuery);