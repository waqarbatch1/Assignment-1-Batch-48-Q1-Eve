// Q43. Unchanged Magicians...


let magicians_names: string[] = ["James", "Mac", "Ori"];
function show_magicians(magicians_names: string[]) {
    for (let name of magicians_names) {
        console.log(name);
    }
}

function make_great(magicians_names: string[]): string[] {
    let great_magicians: string[] = [];
    for (let name of magicians_names) {
        great_magicians.push(`${name} the Great`);
    }
    return great_magicians;
}

let great_magicians: string[] = make_great(magicians_names);

console.log('Original magicians:');
show_magicians(magicians_names);

console.log('Great magicians:');
show_magicians(great_magicians);