// Consider this variable:
//   var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
// Write the code that will add "granola" to the end of array without altering the original array

// //Challenge 1
// var groceryList = ["chips", "dip", "cookies"]
//
// //groceryList.push("soda");
//
// var groceryList2 = groceryList.concat("granola");
// console.log(groceryList);
// console.log(groceryList2);

// Write the code that will add the number 0 to the beginning of the array.
//
// Write the code that will add the number 12 to the end of the array.
//
// Write the code that will remove the first number from the array.
// // Write the code that will add the number 0 to the beginning of the array without altering the original array.
//
// var numbers = [2, 4, 6, 8, 10]
//
// numbers.unshift(0);
// console.log(numbers);
//
// numbers.push(12);
// console.log(numbers);
//
// numbers.shift()
// console.log(numbers);
//
// var numbers2 = [0]
// console.log(numbers2.concat(numbers));

// //Challenge 3
// Consider this variable:
//   var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
//
// Write the code that finds the index of the last appearance of the number 2.
//

// var numSet = [2, 13, 6, 8, 4, 2]
//
// console.log(numSet.indexOf(2));
//
// console.log(numSet.lastIndexOf(2));


//Challenge 4
// Consider this variable:
//  var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
//
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
//
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
//
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.

var chars = ["y", "a", "r", "r", "a"]

console.log(chars.join(""));

var charsReversed = chars.reverse(chars)
console.log(charsReversed);

console.log(charsReversed.join("-"));

console.log(charsReversed.join(""));
