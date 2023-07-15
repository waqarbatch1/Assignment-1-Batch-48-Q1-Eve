//Q31. No User.
var User_names = ["Admin", "James", "William", "Jakson", "Sara"];
if (User_names.length == 0) {
    console.log("We need to find some users.", "\n");
}
for (var i = User_names.length - 1; i >= 0; i--) {
    console.log(User_names.splice(i, 1));
}
console.log(User_names.length);
if (User_names.length == 0) {
    console.log("We need to find some users.", "\n");
}
