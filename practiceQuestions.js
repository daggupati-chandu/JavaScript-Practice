// Write a JavaScript program that prompts the user to enter an integer and then prints whether the entered number is even or odd. Use arithmetic and logical operators to achieve this without utilizing functions.
// Example:
// Example run:
// Enter an integer: 8
// Output: "Even"
// Another example:
// Enter an integer: 15
// Output: "Odd"

//Conditional Statements
let num = prompt("please enter the Number");

if(num%2 ===0){
    console.log("is Even Number");
}else{
    console.log("is odd Number");
}
// ----------------------------------------------------------------------
//Area of rectangle.
// lenth*breadth

let ln = prompt("length of the rectangle");
let br = prompt("breadth of rectangle");
let area = ln * br;
console.log("Area of Rectangle is:",area);
// ----------------------------------------------------------------------
for(let RAM=1; RAM<=8; RAM++){
    console.log("RAM SITA");
}

console.log("Loop has Ended");
// -----------------------------------------------------------------------
// While Loop 
while(i<=8){
    console.log("JAI SHREE RAM");
    i++
}

console.log("while loop ended");
// ------------------------------------------------------------------
//While Loop 
i=1

do{
    console.log("i",i);
    i++
}while(i<=5);
// -------------------------------------------------------------------------
//for of Loop---Used iterate strings  

let str = "JAI SHREE RAM";

for(let i of str){
    console.log("i=",i); 
}
// -------------------------------------------------------------------------------
// for in Loop (used for Objects)
student={
    name: "RAM",
    age :10000,
    address: "ayodhya",
    wife : "matha SITA"
}

for(let i in student){
    console.log(i, ":",student[i]);
}
// ----------------------------------------------------------------------------------------
// PRINT all the even numbers from 0 to 100
for(let i=1; i<=100;i++){
    if(i%2===0){
        console.log("i=",i);
    }
}
// ------------------------------------------------------------------------
//print all the odd numbers from 0 to 100
for (i=0; i<=100; i++){
    if(i%2!==0){
        console.log("i=",i);
    }
}
// ---------------------------------------------------------------------------
//create a game where you can start with any random Number. ask the user to keep guessing the game number
//untill user enters the correct value 
let gameNumber = 28;
let userNum = prompt("Guess the gameNumber:");

while(userNum != gameNumber){
    userNum = prompt("you have entered the wrong gameNumbe, Guess the Number Again:");
}
console.log("Congrats you got it *****");
// ------------------------------------------------------------------------------
//For in Loop--- It is for Objects 

let student = {
    name: "chandu",
    technology: "JavaScript",
    age:30,
    location: "Banglore"
}

for(i in student){
    console.log(i,":",student[i]);
}
// -------------------------------------------------------------

