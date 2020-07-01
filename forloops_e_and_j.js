//Challenge 1
// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// Create a for loop that logs each even number from 1-20, and in the place of
//every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc

//for (let i = 1; i < 21; i++){
//  console.log(i);
//}

// for (let i = 1; i <21; i++){
//   console.log(i*3);
// }
//
// for (let i = 1; i <21; i++){
//   if (i % 2 == 0) {
//     console.log(i);
//   } else {
//     console.log("ODD");
//   }
// }

//Challenge 2
// Looping over an array. Consider this variable:
// var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
// Create a loop that will log the lowest number from the array Expected output --> -9
// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
var nums = [3, 57, -9, 20, -20]
var highestNum = null;

for (var i = 0; i < nums.length; i++) {
  if (nums[i] < nums[i+1]) {
    highestNum = nums[i+1]
  } else {
    highestNum =nums[i]
  }
}

//console.log(highestNum);


//Challenge 1 FUNCTIONS//
//Write a function named marco that returns "polo".

// const marco = () => {
//   return "polo"
// }
//
// console.log(marco());

//2
//Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// function named greeting with name as argument
// const greeting = (name) => {
//   // returns "Welcome, <person's name here!>"
//   return `Welcome, ${ name }!`
// }
//
// console.log(greeting("Jakob"));

//3
//Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//function named oddOrEven that takes number argument
// const oddOrEven = (number) => {
//     // modulo remainder not equal to 0
//     if (number % 2 !== 0){
//       //return odd
//       return "odd"
//     } else {
//       //return even
//       return "even"
//     }
// }
//
// console.log(oddOrEven(73));

//4
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//function named triple that multiplies number by 3
const triple = (number) => {
// multiply number by 3
  return number * 3
}
console.log(triple(12));

//5
//Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
//function named multiply with 2 arguments
const multiply = (numb1, numb2) => {
//multiply numb1 by numb2
    return numb1 * numb2
}
console.log(multiply(5, -8));

//6
//Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// function named divisibleBy takes 2 arguments
const divisibleBy = (numb1, numb2) => {
// check if numb1 is divisble by numb2 using
  if (numb1 % numb2 == 0) {
// return "numb1 is evenly divisible by numb2".
    return `${numb1} is evenly divisible by ${numb2}`
}
}
console.log(divisibleBy(27, 2));


//7
//Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//function named assignGrade that tells letter grade from number
const assignGrade = (numGrade) => {
//check numGrade and assign letter numGrade
    if (numGrade >= 90) {
      return "A"
    } else if (numGrade >= 80) {
      return "B"
    } else if (numGrade >= 70) {
      return "C"
    } else if (numGrade >= 60) {
      return "D"
    } else {
      return "F"
    }
  }
console.log(assignGrade (98));
