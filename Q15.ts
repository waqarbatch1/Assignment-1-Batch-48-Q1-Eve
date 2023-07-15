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









   


