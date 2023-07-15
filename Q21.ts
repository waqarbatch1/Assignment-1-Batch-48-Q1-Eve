// Q21, "They think of something you could store in a TypeScript Object." 
// Write a program that creates Objects containing these items."

interface Person {
    name: string;
    age: number;
    email: string; 
  }
  
  
  const person: Person = {
    name: "Waqar Iqbal",
    age: 23,
    email: "waqariqbal@gmail.com"
  };
  
  console.log(person.name); 
  console.log(person.age); 
  console.log(person.email);  
