// Q33. Ordinal Numbers

let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let Entry of Numbers) {
    if (Entry == 1) {
        console.log('1st', "\n");
    } else if (Entry == 2) {
        console.log('2nd', "\n");
    } else if (Entry == 3) {
        console.log('3rd', "\n");
    } else {
        console.log(`${Entry}th`, "\n");
    }
}