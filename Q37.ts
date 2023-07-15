// Q37. T shirt

function make_shirt(size: string = "Large",  message: string = "I like Typescript"){
    console.log("It is " + size + " shirt, and " + message + " is printed on it.");
}
make_shirt();
make_shirt(`Medium`);
make_shirt(`Small`, `I like coding`);