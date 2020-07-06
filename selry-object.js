// CHALLENGES

// (1)Consider this variable:
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// (a) Write the code that accesses the first name of the person object.
// console.log(person.firstName);
// (b) Write the code that accesses the last name of the person object.
// console.log(person.lastName);
// (c) Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
// }
// person.homePlanet = "Earth"
// console.log(person.homePlanet);

// //(d)Update the person object with a method that logs "Arthur Dent is from planet Earth".
// var person = {
//   firstName: "Arthur",
//   location: "Earth",
//   method: function (){
//     return ` ${this.firstName} is from planet ${this.location}`
//   }
// }
// console.log(person.method());


// var product = {
//   name: "chair", price: 14.99
// }

// const describeProduct = (item) => {
//   return `This product is a ${item.name}, it costs ${item.price}`
// }

// console.log(describeProduct(product))

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}


const breakdown = (object) => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}

console.log(breakdown(lunch))

//CHALLENGE 4
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
//Create a function that takes in any array of objects and returns a new array with only those of type cat.

const pets = (array) => {
  let onlyCats = array.filter (value => {
    return value.type === "cat"
})
    return onlyCats.map (value => value.name)
}
console.log(pets(animals))
