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
//2
//Write a function that takes in an array and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//make and name a function that returns only odd from testArr2
const checkOdd = (array) => {
  //make new/empty array to store odd numbers
  let oddArray =[]
  //create loop to look through testArr2
  for (var i = 0; i < array.length; i++) {
    //check if number is odd by modulo
    if (array[i] % 2 !== 0) {
      // if it is odd, add to new array
      oddArray.push(array[i])
    }
  }
  return oddArray
}
console.log(checkOdd(testArr2));
console.log(checkOdd(testArr1));







// Expected output --> [-7, 3, 5, 13]
