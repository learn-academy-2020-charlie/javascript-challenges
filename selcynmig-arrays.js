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
//challenge 3
