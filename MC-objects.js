//Challenge #1
// Consider this variable:
// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// Consider this variable:

// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",

//   whereYouFrom: function(){
//       return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//   }
// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.whereYouFrom());

// Challenge #2
// Consider this variable:
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

// var product = {
//   name: "chair", price: 14.99
// }

// //write a function called describeProduct and takes an argument
// const describeProduct = (product) => {
//     return `The product is a ${product.name}. It costs ${product.price}.`
// }

// console.log(describeProduct(product));

// Challenge #3 
//   Write the code that accesses the ingredients property.
//   Write the code that access the 3rd ingredient of the lunch object.
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
// }

// const imHungry = (lunch) => {
//     return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
// }

// console.log(lunch.ingredients);
// console.log(lunch.ingredients[2]);
// console.log(imHungry(lunch));

// Challenge #4 
//   Create a function that takes in any array of objects and returns a new array with only those of type cat.
//   Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
// var animals = [
//     { name: "Waffles", type: "dog", age: 12 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 },
// ]

// //declare a function that takes in an array
// //
// const getCats = (array) => {
//     return array.filter(value => {
//         return value.type === "cat"
//     })
// }

// console.log(getCats(animals));


// const getNames = (array) => {
//     return array.map(value => {
//         return value.name
//     })
// }

// console.log(getNames(animals));


