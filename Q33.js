// Q33. Ordinal Numbers
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var Entry = Numbers_1[_i];
    if (Entry == 1) {
        console.log('1st', "\n");
    }
    else if (Entry == 2) {
        console.log('2nd', "\n");
    }
    else if (Entry == 3) {
        console.log('3rd', "\n");
    }
    else {
        console.log("".concat(Entry, "th"), "\n");
    }
}
