// Create a game where you ask to guess the number 
// run it until he/she solves it

var min = 1;
var max = 10;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let UserInput = prompt("Enter guess number betwwen 0 to 10:");

while( UserInput != max){
    UserInput = prompt("You Entered Wrong Number");
}

console.log("Great You Catch The Number", randomNumber)




// For-in Loop

// var student = {
//     name: "Amita",
//     class: "B.A",
//     Age: "45",
//     isPass: true
// }

// for (let i in student){
//     console.log(i, student[i])
// }


// // For-of Loop

// let str = "Learning JavaScript"
// for(let i of str){
//     console.log(i)
// }

// Print stars in JavaScript

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         // Print '*' character
//         console.log("*");
//     }
//     // Move to the next line after each row
//     console.log("\n");
// }
  


// How to find limited numbers even and Odd

// let number = prompt("Please enter how many numbers you want to check for even and odd: ");

// for (let i = 1; i <= number; i++) {
//     if (i % 2 !== 0) {
//         console.log(i + " is odd");
//     } else {
//         console.log(i + " is even");
//     }
// }



// Table Find By User Given NUmber

//let table = prompt("Please enter the table you want to see: ");


// for(let i=1; i<=10; i++){
//     console.log(table + "*" + i + "=" +table * i )
// }