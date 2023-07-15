// Task 42. Great Magician ...
var magicians_names = ["James", "Mac", "Ori"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " the Great");
    }
}
make_great(magicians_names);
show_magicians(magicians_names);
