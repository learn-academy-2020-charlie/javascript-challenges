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

// const assignGrade = (num) => {
//   if (num >= 90) {
//     return "A"
//   } else if (num >= 80) {
//     return "B"
//   } else if (num >= 70) {
//     return "C"
//   } else if (num >= 60) {
//     return "D"
//   } else {
//     return "F"
//   }
// }
// console.log(assignGrade(30));


// Test your functions with multiple calls

// // What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number
// // setup a function that takes two arguments
// const highNumber = (num1, num2) => {
// // use if statement to determine which argument is the higher number
// if (num1 > num2) {
//   return num1;
// } else if (num2 > num1) {
//   return num2;
// } else {
//   return "Equal";
// }
// //return higher number
// }
// console.log(highNumber(82, 24))

// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

const helloWorld = (language) => {
// use if else statement to find the language
if (language === "es") {
  return "Hola Mundo";
} else if (language === "de") {
  return "Hallo Welt";
} else if (language === "ti") {
  return "Salaam Alem";
} else {
  return "Hello, World"
}
}
console.log(helloWorld("fsdfsdhsd"))

// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

const animalPluralizer = (num, noun) => {
  if (num ===1){
    return `${num} ${noun}`
  } else if (num>1){
    if (noun === "octopus"){
      return `${num} octopi`
    }
    else if (noun==="goose"){
      return `${num} geese`
    }
    else if (noun === "child"){
      return `${num} children`
    }
    else {
      return `${num} ${noun}s`
    }
  }
}
console.log(animalPluralizer(3, "child"));
