// Consider this variable:
//   var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
// Write the code that will add "granola" to the end of array without altering the original array

// //Challenge 1
var groceryList = ["chips", "dip", "cookies"]

//groceryList.push("soda");

var groceryList2 = groceryList.concat("granola");
console.log(groceryList);
console.log(groceryList2);
