// Callbacks are just methods
var dbQuery = function () {
    setTimeout(function () {
        console.log('Query Results');
    }, 3000);
};
// Convention for working with callbacks
// This is a higher order function. Is a method that takes a function/method as an Argument
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_function_callbacks.js.map