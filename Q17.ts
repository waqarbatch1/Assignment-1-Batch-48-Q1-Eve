// Name : Waqar Iqbal , Date : July 10th, 2023

const list: string[] = ["Adeena", "Atif", "Sara"];

let message_to_adi: string = " Dear " + list[0] + " Join us for an unforgettable evening of laughter, good company, and great memories!";

let message_to_atif: string = "Mr." + list[1] + " We'd glad to have you in the dinner";

let message_to_sara: string = "Miss." + list[2] + " Without you dinner is incomplete, see you in the dinner for sure!";

let i = list.length;

if(i=1) 
    { console.log(message_to_adi, "\n" );}
        if(i=2)
        { console.log(message_to_atif, "\n");}
        if(i=3)
        {console.log(message_to_sara, "\n" );

        }


console.log("Sorry guys " + list[2] + " won't make it for a dinner this time", "\n" );

let updated_list: string[] = ["Adeena", "Atif", "Babur"];

let message_to_Adi: string = " Dear " + updated_list[0] + " Join us for an unforgettable evening of laughter, good company, and great memories!";

let message_to_Atif: string = "Mr." + updated_list[1] + " We'd glad to have you in the dinner";

let message_to_Babur: string = "Miss." + updated_list[2] + " Without you dinner is incomplete, see you in the dinner for sure!";

let j = list.length;

if(j=1) 
    { console.log(message_to_Adi, "\n" );}
        if(j=2)
        { console.log(message_to_Atif, "\n");}
        if(j=3)
        {console.log(message_to_Babur, "\n" );

        }

        console.log("\n", "Guys there is an update, we are going to expand dinner table, means that more guests will accompany us.", "\n");

        updated_list.unshift("Ali");

        updated_list.push("Aimen");
        
        updated_list.splice(2, 0, "Mudassar");

        
let message_to_Ali: string = " Dear " + updated_list[0] + "  Join us for an unforgettable evening.!";

let message_to_Adii: string =   " Dearest. " + updated_list[1] + "  Join us for an unforgettable evening of laughter, good company, and great memories!";

let message_to_Mudassar: string = "Mr." + updated_list[2] + " Without you dinner is incomplete, see you in the dinner for sure!";

let message_to_Ati: string = " Dear " + updated_list[3] + "  Join us for an unforgettable evening.!";

let message_to_BAbur: string = " Dear " + updated_list[4] + "  Join us for an unforgettable evening.!";

let message_to_Aimen: string = " Dear " + updated_list[5] + "  Join us for an unforgettable evening.!";

let k = updated_list.length;

if(k=1) 
    { console.log(message_to_Ali, "\n" );}
        if(k=2)
        { console.log(message_to_Adii, "\n");}
        if(k=3)
        {console.log(message_to_Mudassar, "\n" );
    }
        if(k=4)
        {console.log(message_to_Ati, "\n" );
        }
        if(k=5)
        {console.log(message_to_BAbur, "\n" );}

        if(k=6)
        {console.log(message_to_Aimen, "\n" ); }

        console.log("Sorry to say guys unfortunately, I can invite to only two guests. ", "\n");

        console.log("Sorry Aimen, We cannot invite you at dinner ", "\n");

updated_list.pop();

console.log(updated_list);

console.log("Sorry Babur, We cannot invite you at dinner,  hope you would understand ", "\n");

updated_list.pop();

console.log(updated_list);

console.log("Sorry Atif, We cannot invite you at dinner,  hope you would understand ", "\n");

updated_list.pop();

console.log(updated_list);

console.log("Sorry Mudassar, We cannot invite you at dinner,  hope you would understand ", "\n");


updated_list.pop();

console.log(updated_list);

let message_to_Aali: string = "Congrats, Ali you are still invited to the dinner";

let message_to_Aadii: string = "Congrats, ADEENA you are still invited to the dinner";

console.log( message_to_Aali + "\n");

console.log(message_to_Aadii + "\n");

 
 
while(updated_list.length)
{
  updated_list.pop();
}   
 
console.log(updated_list);



   


