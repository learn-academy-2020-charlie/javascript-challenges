
//Challenge #1
// Use .map() or .filter() to complete the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

// Expected output --> [30, 90, 150, 40, 100]

var arr1 = [3, 9, 15, 4, 10]
//Create a function that takes in an array
const newArr = (array) => {
//Create a higher order function map for the array and save it as a variable
//Use map to multiply each value by 10
  let mult10 = array.map(value => value*10)
  //Return all numbers multipled by 10
  return mult10
}
console.log(newArr(arr1));
