// Q32. Checking Users
var current_users = ["Sara", "James", "Williams", "Smith", "Lara"];
var new_users = ["Sabina", "Omar", "Smith", "Oriko", "James"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var Newuser = new_users_1[_i];
    if (current_users.map(function (Newuser) { return Newuser.toLowerCase(); }).includes(Newuser.toLowerCase())) {
        console.log("The username '".concat(Newuser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(Newuser, "' is available."));
    }
}
