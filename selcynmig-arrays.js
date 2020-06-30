var groceryList = ["chips", "dip", "cookies"]

groceryList.push("soda")
console.log("original list " + groceryList)
var newGroceryList = groceryList
newGroceryList.push("granola")

// var newGroceryList = groceryList.push("granola")

console.log("original list " + groceryList)
console.log("new list " + newGroceryList)
//challenge 2
var numbers = [2, 4, 6, 8, 10]
numbers.unshift(0)
console.log(numbers);
numbers.push(12)
console.log(numbers);
numbers.shift()
console.log(numbers);

var numbers2 = [0]

var combineNumbers = numbers2.concat(numbers)
console.log(combineNumbers);

challenge 3
var numSet = [2, 13, 6, 8, 4, 2]

//Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));
//Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2));

//challenge 4
 var chars = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the chars array together into a string.
 var joined = chars.join("");
 console.log(joined);
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
var charsReversed = chars.reverse(joined);
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
//
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
