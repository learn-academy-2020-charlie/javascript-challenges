// // //Challenge 1
// // Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// //
// // Expected output --> [9, 27, 45, 12, 30]
//
// // name/declare our function that accepts an array
// const trinity = (array) => {
//   // create new/empty array to store mulitplied numbers
//   let newArray = []
//   // create a loop to look through the input array
//   for (let i = 0; i < array.length; i++) {
//     // take each item in array an multiply by 3 .push it to new array
//     newArray.push(array[i]*3)
//   }
//   // return new arrray
//   return newArray
// }
//
// // call function
// console.log(trinity(testArr1));
// //2
// //Write a function that takes in an array and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// //make and name a function that returns only odd from testArr2
// const checkOdd = (array) => {
//   //make new/empty array to store odd numbers
//   let oddArray =[]
//   //create loop to look through testArr2
//   for (var i = 0; i < array.length; i++) {
//     //check if number is odd by modulo
//     if (array[i] % 2 !== 0) {
//       // if it is odd, add to new array
//       oddArray.push(array[i])
//     }
//   }
//   return oddArray
// }
// console.log(checkOdd(testArr2));
// console.log(checkOdd(testArr1));
//
//
// // Expected output --> [-7, 3, 5, 13]

//3 Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
var myMessage = "Hello There"

// name/declare a function that accepts a string
const captilizeIt = (someMessage) => {
  // create a new/empty string
  let newMessage = ""
  // capitalize every letter in input string and save it to new string
  newMessage = someMessage.toUpperCase()
  // return new string
  return newMessage
}

console.log(captilizeIt(myMessage));

//Expected output --> "HELLO THERE"

//4
//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// name/make function lettersOnly accepts an arrays
const lettersOnly = (array) => {
  // create empty letterArray
  let letterArray = []
  // create a loops
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i]== "string") {
      // if type string push to letterArray
      letterArray.push (array[i])
    }
  }
// join letters in letterArray into string with .join("")
return letterArray.join("")
}
console.log(lettersOnly(comboArr));
// Expected output --> "nicework"
