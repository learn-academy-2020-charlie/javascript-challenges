//Challenge 1
//Consider this variable:

//Write the code that accesses the first name of the person object.
//console.log(person.firstName)

//Write the code that accesses the last name of the person object.
//console.log(person.lastName)

//Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

//console.log(person.homePlanet);

//Update the person object with a method that logs "Arthur Dent is from planet Earth".
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   aboutThisPerson: function(){
//       return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//   }
// }
//
// console.log(person.aboutThisPerson())

//Consider this variable:
// var product = {
//   name: "chair", price: 14.99
// }
// //Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// const describeProduct = (item) => {
//   return `The product is a ${item.name}. It costs ${item.price}`
// }
// console.log(describeProduct(product));

// Challenge 3
// Consider this variable:


// Write the code that accesses the ingredients property.
//console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.
//console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const getLunchIngredients = (lunchItem) => {
//     return `The ingredients for a ${lunchItem.name} ${lunchItem.type} are ${lunchItem.ingredients[0]}, ${lunchItem.ingredients[1]}, and ${lunchItem.ingredients[2]}.`
// }
// console.log(getLunchIngredients(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    displayLunch: function(){
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, ${this.ingredients[2]}.`
    }
 }
 console.log(lunch.displayLunch())