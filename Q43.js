// Q43. Unchanged Magicians...
var magicians_names = ["James", "Mac", "Ori"];
function show_magicians(magicians_names) {
    for (var _i = 0, magicians_names_1 = magicians_names; _i < magicians_names_1.length; _i++) {
        var name_1 = magicians_names_1[_i];
        console.log(name_1);
    }
}
function make_great(magicians_names) {
    var great_magicians = [];
    for (var _i = 0, magicians_names_2 = magicians_names; _i < magicians_names_2.length; _i++) {
        var name_2 = magicians_names_2[_i];
        great_magicians.push("".concat(name_2, " the Great"));
    }
    return great_magicians;
}
var great_magicians = make_great(magicians_names);
console.log('Original magicians:');
show_magicians(magicians_names);
console.log('Great magicians:');
show_magicians(great_magicians);
