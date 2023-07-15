let myName: string = "Waqar Iqbal";


let lowercaseName: string = myName.toLowerCase();
console.log("Lowercase:", lowercaseName);


let uppercaseName: string = myName.toUpperCase();
console.log("Uppercase:", uppercaseName);


let words: string[] = myName.split(" ");
let titlecaseName: string = "";
for (let i = 0; i < words.length; i++) {
    let word: string = words[i].toLowerCase();
    titlecaseName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log("Title case:", titlecaseName.trim());