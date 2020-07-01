// // (1)Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// // Expected output --> [9, 27, 45, 12, 30]

// var testArr1 = [3, 9, 15, 4, 10]
// //created a function
// const newArray = (array) => {
//   //new array to store multiplied numbers
//   let multiplied = []
//   //for loop that goes through every index of original array to multiply and pushes to new array
//   for (i = 0; i < array.length; i++){
//     multiplied.push(array[i] * 3)
//   }
//   //returns the multiplied array
//   return multiplied
// }
// console.log(newArray(testArr1));
//(2) Write a function that takes in an array and returns a new array with only odd numbers.
// Expected output --> [-7, 3, 5, 13]
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//Declare our function and give it an argument
const oddArray = (array) => {
//Create our new array to hold the odd numbers
  let oddNums = [];
//Create our loop to cycle through all elements in the array
  for (i=0 ; i < array.length ; i++) {
//Setup a conditional that checks for odd numbers
    if (array[i] % 2 !== 0) {
//Take odd numbers and add them to our new array
      oddNums.push(array[i]);
    }
  }
//Return our new array of only odd numbers
  return oddNums;
}

console.log(oddArray(testArr2));

//(3) Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// Expected output --> "HELLO THERE"
var myMessage = "Hello There"

//Declare a function and an argument
const upperCase = (string) => {
//Use method to convert string to uppercase and store it in a variable
let upper = string.toUpperCase();
//Return uppercase string
return upper;
}

console.log(upperCase(myMessage));


