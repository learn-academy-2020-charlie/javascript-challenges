// // Use .map() or .filter() to complete the following exercises:
//
// (1) Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// Expected output --> [30, 90, 150, 40, 100]
var arr1 = [3, 9, 15, 4, 10]

// const mult10 = (array) => {
  let mult10 = arr1.map(value => value * 10)
// }
console.log(mult10);
// Write a function that takes in an array and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

const oddArray = (array) => {
   return array.filter(value => {
     return value % 2 !==0
  })
  }
console.log(oddArray(arr2));
// Expected output --> [7, 3, 5, 13]
//
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] //Expected output --> "nicework"
const compliment = (array) => {
  let newArray = array.filter (value => {
    return typeof value === "string"
    // stringOnly.join (typeof value ===)
  })
  return newArray.join("")
}
console.log(compliment(comboArr));
