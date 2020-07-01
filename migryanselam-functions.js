//Function Challenges
//(1) Write a function named marco that returns "polo".
//  const marco = () => {
//    return "polo"
//  }
//  console.log(marco());
// //(2) Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//   return `Welcome, ${name}!`
// }
// console.log(greeting("Miguel, Ryan, and Selam"));
//(3) Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.


// const oddOrEven = (num) => {
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(oddOrEven(6));



//(4) Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//
// const triple = (num) => {
//   return num * 3;
// }
// console.log(triple(9))

//(5) Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
// const multiply = (num1, num2) => {
//   return num1 * num2
// }
// console.log(multiply(3, 4));

//(6) Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is evenly divisble by ${num2}`
//   }
// }
// console.log(divisibleBy(8, 4));


//(7) Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (num) => {
  if (num >= 90) {
    return "A"
  } else if (num >= 80) {
    return "B"
  } else if (num >= 70) {
    return "C"
  } else if (num >= 60) {
    return "D"
  } else {
    return "F"
  }
}
console.log(assignGrade(30));
