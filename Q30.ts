//Q30. 

const User_names = [`Admin`, `James`, `William`, `Jakson`, `Sara`];
for (const Name of User_names ){
    if(Name == `Admin`){
        console.log("Hello " + Name + " would you like to see a status report?", "\n");    
    }
    else {
        console.log("Hello " + Name + " thank you for logging in again.", "\n");
    }
}