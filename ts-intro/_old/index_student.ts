let courseName: string = "Frontendutveckling";
let studentsEnrolled: number = 25;
let isTypeScriptFun: boolean = true;

console.log(`Kurs: ${courseName}`);
console.log(`Antal studenter: ${studentsEnrolled}`);

function greetStudent(name: string): string {
  return `Välkommen, ${name}!`;
}

console.log(greetStudent("Alices"));
