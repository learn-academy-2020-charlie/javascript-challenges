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
var product = {
  name: "chair", price: 14.99
}
//Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
const describeProduct = (item) => {
  return `The product is a ${item.name}. It costs ${item.price}`
}
console.log(describeProduct(product));
