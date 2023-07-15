// Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'

let allien_color = `green`;

//If it is, print a message that the player just earned 5 points
if(allien_color == `green`){
    console.log("\n", "Wow you have just earned 5 points")
};

//One Test passes the if test and another that fail
if(allien_color !== `red` && allien_color !== `yellow`){
    console.log("\n", "Wow you have just earned 5 points")
};


if(allien_color == `red`){
    console.log("\n", "Sorry you have'nt earned 5 points")}; //No output test, as it fails