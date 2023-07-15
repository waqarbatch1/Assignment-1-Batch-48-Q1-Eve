// Q44. Sandwiches...
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Make a sandwich having ".concat(items.join(', '), "."));
}
make_sandwich('jam', 'cheese', 'butter');
make_sandwich('malic', 'peppoir', 'avocado');
make_sandwich('peanut ', 'cream');
