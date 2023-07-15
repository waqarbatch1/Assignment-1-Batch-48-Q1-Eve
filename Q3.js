var myName = "Waqar Iqbal";
// Lowercase
var lowercaseName = myName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Uppercase
var uppercaseName = myName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Title case
var words = myName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    titlecaseName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log("Title case:", titlecaseName.trim());
