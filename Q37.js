// Q37. T shirt
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I like Typescript"; }
    console.log("It is " + size + " shirt, and " + message + " is printed on it.");
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I like coding");
