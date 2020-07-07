const { homedir } = require("os");

var person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    location: function() {
        return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
    }
  }

//   Write the code that accesses the first name of the person object.
//console.log(person.firstName);

//   Write the code that accesses the last name of the person object.
console.log(person.location());
//   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

//   Update the person object with a method that logs "Arthur Dent is from planet Earth"

var product = {
    name: "chair", 
    price: 14.99,
    describeProduct: function() {
        return `The product is a ${this.name}. It costs ${this.price}.`
    }

  }
  //Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
//   const describeProduct = (productObject) => {
//     return `The product is a ${productObject.name}. It costs ${productObject.price}.`
//   }
  console.log(product.describeProduct());
  
  var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"], 
    sandwich: function() {
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]},${this.ingredients[1]}, and ${this.ingredients[2]}.`
    }
  }
//   Write the code that accesses the ingredients 
//property.

console.log(lunch.ingredients);

//   Write the code that access the 3rd ingredient of the lunch object.

console.log(lunch.ingredients[2]);
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const sandwich = (lunchObject) => {
//     return `The ingredients for a ${lunchObject.name} ${lunchObject.type} are ${lunchObject.ingredients}.`
// }
console.log(lunch.sandwich());

//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ]
//   Create a function that takes in any array of objects and returns a new array with only those of type cat.

// const catOnly = (array) => {
//    return animals.filter(value => {
//        return value.type == "cat"
//    })
// }
//  console.log(catOnly(animals));
 
//   Using the same array of objects above. Create a function that returns a new array with only the names of the animals. 

const catOnly = () => {
    return animals.map(value => {
        return value.name
    })
 }
 console.log(catOnly(animals));

 let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
// Write the code that destructures the author object and makes the following work:
var { name, genre} = author

console.log(`${name} is a ${genre} author`)
//--> "H. G. Wells is a science fiction author"

let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}


//Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
var {species, pokemon_type} = pokeOne
var {species, pokemon_type} = pokeTwo

const describePokemon = () => {
    return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
//--> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
//--> "Magikarp is a Water pokemon"