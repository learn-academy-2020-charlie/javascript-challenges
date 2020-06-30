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

var numbers = [2, 4, 6, 8, 10]

numbers.unshift(0);
console.log(numbers);

numbers.push(12);
console.log(numbers);

numbers.shift()
console.log(numbers);

var numbers2 = [0]
console.log(numbers2.concat(numbers));
