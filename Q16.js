// Name : Waqar Iqbal , Date : July 10th, 2023
var list = ["Adeena", "Atif", "Sara"];
var message_to_adi = " Dear " + list[0] + " Join us for an unforgettable evening of laughter, good company, and great memories!";
var message_to_atif = "Mr." + list[1] + " We'd glad to have you in the dinner";
var message_to_sara = "Miss." + list[2] + " Without you dinner is incomplete, see you in the dinner for sure!";
var i = list.length;
if (i = 1) {
    console.log(message_to_adi, "\n");
}
if (i = 2) {
    console.log(message_to_atif, "\n");
}
if (i = 3) {
    console.log(message_to_sara, "\n");
}
console.log("Sorry guys " + list[2] + " won't make it for a dinner this time", "\n");
var updated_list = ["Adeena", "Atif", "Babur"];
var message_to_Adi = " Dear " + updated_list[0] + " Join us for an unforgettable evening of laughter, good company, and great memories!";
var message_to_Atif = "Mr." + updated_list[1] + " We'd glad to have you in the dinner";
var message_to_Babur = "Miss." + updated_list[2] + " Without you dinner is incomplete, see you in the dinner for sure!";
var j = list.length;
if (j = 1) {
    console.log(message_to_Adi, "\n");
}
if (j = 2) {
    console.log(message_to_Atif, "\n");
}
if (j = 3) {
    console.log(message_to_Babur, "\n");
}
console.log("\n", "Guys there is an update, we are going to expand dinner table, means that more guests will accompany us.", "\n");
updated_list.unshift("Ali");
updated_list.push("Aimen");
updated_list.splice(2, 0, "Mudassar");
var message_to_Ali = " Dear " + updated_list[0] + "  Join us for an unforgettable evening.!";
var message_to_Adii = " Dearest. " + updated_list[1] + "  Join us for an unforgettable evening of laughter, good company, and great memories!";
var message_to_Mudassar = "Mr." + updated_list[2] + " Without you dinner is incomplete, see you in the dinner for sure!";
var message_to_Ati = " Dear " + updated_list[3] + "  Join us for an unforgettable evening.!";
var message_to_BAbur = " Dear " + updated_list[4] + "  Join us for an unforgettable evening.!";
var message_to_Aimen = " Dear " + updated_list[5] + "  Join us for an unforgettable evening.!";
var k = updated_list.length;
if (k = 1) {
    console.log(message_to_Ali, "\n");
}
if (k = 2) {
    console.log(message_to_Adii, "\n");
}
if (k = 3) {
    console.log(message_to_Mudassar, "\n");
}
if (k = 4) {
    console.log(message_to_Ati, "\n");
}
if (k = 5) {
    console.log(message_to_BAbur, "\n");
}
if (k = 6) {
    console.log(message_to_Aimen, "\n");
}
