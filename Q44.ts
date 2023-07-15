// Q44. Sandwiches...

function make_sandwich(...items: string[]) {
    console.log(`Make a sandwich having ${items.join(', ')}.`);
}

make_sandwich('jam', 'cheese', 'butter');
make_sandwich('malic', 'peppoir', 'avocado');
make_sandwich('peanut ', 'cream');