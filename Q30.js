//Q30. 
var User_names = ["Admin", "James", "William", "Jakson", "Sara"];
for (var _i = 0, User_names_1 = User_names; _i < User_names_1.length; _i++) {
    var Name = User_names_1[_i];
    if (Name == "Admin") {
        console.log("Hello " + Name + " would you like to see a status report?", "\n");
    }
    else {
        console.log("Hello " + Name + " thank you for logging in again.", "\n");
    }
}
