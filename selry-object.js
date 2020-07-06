// CHALLENGES

(1)Consider this variable:
var person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// (a) Write the code that accesses the first name of the person object.
// console.log(person.firstName);
// (b) Write the code that accesses the last name of the person object.
// console.log(person.lastName);
// (c) Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

var person = {
  firstName: "Arthur",
  lastName: "Dent",
}
person.homePlanet = "Earth"
console.log(person.homePlanet);

//(d)Update the person object with a method that logs "Arthur Dent is from planet Earth".
var person = {
  firstName: "Arthur",
  location: "Earth",
  method: function (){
    return ` ${this.firstName} is from planet ${this.location}`
  }
}
console.log(person.method());
