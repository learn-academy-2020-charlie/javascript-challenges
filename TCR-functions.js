///1. Write a function named marco that returns "polo".
// //
// const marco = () => {
//   return "polo"
// }
//
// console.log(marco());
// //
// 2. Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//   return `Welcome, ${name}!`
// }
//
// console.log(greeting("Cynthia"));
// 3. Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (num) => {
//    if (num % 2 == 0){
//      return "Even"
//    } else {
//      return "Odd"
//    }
// }
//
// console.log(oddOrEven(2));
//
// 4. Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (num) => {
//   return (num*3)
// }
//
// console.log(triple(3));
// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 == 0){
//     return `${num1} is evenly divisible by ${num2}`;
//   } else {
//     return null;
//   }
// }
// console.log (divisibleBy (73, 5));

//Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (score) => {
//     if (score <= 100 && score >= 90){
//         return "A";
//     }
// }
// console.log(assignGrade(97));

//-------------STRETCH CHALLENGES------------------//
// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

//Write/declare a function named greaterNum with 2 args
// const greaterNum = (num1, num2) => {
// //if statement comparing the two args
// //If a > b, return a
//     if (num1 > num2){
//         return num1;
// //Else if a < b, return b
//     } else if (num1 < num2) {
//         return num2;
// //Else return, "Both numbers are equal"
//     } else {
//         return "The numbers are equal"
//     }
// }
//
// console.log("This is test 1: " + greaterNum(1000000, 1));
// console.log("This is test 2: " + greaterNum(1, 500));
// console.log("This is test 3: " + greaterNum(4, 4));


// #2 Challenge
// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

// //Declare the function name helloWorld and give it 1 arg
// const helloWorld = (language) => {
// //If the argument is null, default to English
//   if (language == null){
//     return "Hello, World";
//   }
// //If statement for the first language variation, return "Hello, World" in that language
//   if (language == "es"){
//     return "Hola, Mundo";
//   }
// //If statement for the second language variation, return "Hello, World" in that language
//   if (language == "it"){
//     return "Ciao mondo";
//   }
// //If statement for the third language variation, return "Hello, World" in that language
//   if (language == "rs"){
//     return "Привет мир";
//     //Else, "Language not available"
//   } else {
//     return "Language not available"
//   }
// }
// console.log(helloWorld("fs"));
