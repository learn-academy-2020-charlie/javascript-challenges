// (1)Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// Expected output --> [9, 27, 45, 12, 30]

var testArr1 = [3, 9, 15, 4, 10]
//created a function
const newArray = (array) => {
  //new array to store multiplied numbers
  let multiplied = []
  //for loop that goes through every index of original array to multiply and pushes to new array
  for (i = 0; i < array.length; i++){
    multiplied.push(array[i] * 3)
  }
  //returns the multiplied array
  return multiplied
}
console.log(newArray(testArr1));
//(2) Write a function that takes in an array and returns a new array with only odd numbers.
// Expected output --> [-7, 3, 5, 13]
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

//(3) Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// Expected output --> "HELLO THERE"
var myMessage = "Hello There"
