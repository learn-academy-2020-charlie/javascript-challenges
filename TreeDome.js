// //Challenge 1
// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
//
// Expected output --> [9, 27, 45, 12, 30]

// name/declare our function that accepts an array
const trinity = (array) => {
  // create new/empty array to store mulitplied numbers
  let newArray = []
  // create a loop to look through the input array
  for (let i = 0; i < array.length; i++) {
    // take each item in array an multiply by 3 .push it to new array
    newArray.push(array[i]*3)
  }
  // return new arrray
  return newArray
}

// call function
console.log(trinity(testArr1));
