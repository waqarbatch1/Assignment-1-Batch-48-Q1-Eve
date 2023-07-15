// Q32. Checking Users
let current_users = [`Sara`, `James`, `Williams`, `Smith`, `Lara`];

let new_users = [`Sabina`, `Omar`, `Smith`, `Oriko`, `James`];

for (let Newuser of new_users) {
    if (current_users.map(Newuser => Newuser.toLowerCase()).includes(Newuser.toLowerCase())) {
        console.log(`The username '${Newuser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${Newuser}' is available.`);
    }
}