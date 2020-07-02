
//Challenge #1
// Use .map() or .filter() to complete the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

// Expected output --> [30, 90, 150, 40, 100]
//
// var arr1 = [3, 9, 15, 4, 10]
// //Create a function that takes in an array
// const newArr = (array) => {
// //Create a higher order function map for the array and save it as a variable
// //Use map to multiply each value by 10
//   let mult10 = array.map(value => value*10)
//   //Return all numbers multipled by 10
//   return mult10
// }
// console.log(newArr(arr1));

// CHALLENGE 2
// // Write a function that takes in an array and returns a new array with only odd numbers. Expected output --> [7, 3, 5, 13]

// var arr2 = [2, 7, 3, 5, 8, 10, 13]

// //Create a function to accepts an array
// const newArray = (array) => {
// //Create a variable to hold new filtered array to draw odd numbers using modulo (%2!==0)
//   let oddNums = array.filter (value => {
// //Utilize the filter method to draw odd numbers
//     return value %2 !==0
//   })
// //Return new filtered array
//   return oddNums
// }
// console.log(newArray(arr2))

// Challenge 3
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] 
// Expected output --> "nicework"

// create a function that accepts any array
const findLetters = (array) => {
  // create a variable to hold a new filtered array
  let letters = array.filter(value => {
    // use typeof method using "string" to get the letters in the  new array
    return typeof value === "string"
  })
  // use join to convert the new array into the string and return it
  return letters.join("")
}
//call the function
console.log(findLetters(comboArr));

