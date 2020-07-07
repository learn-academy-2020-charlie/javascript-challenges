//Challenge 1
class Coffee {
    constructor(type, cream, sugar){
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile(){
      return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
    }
  
    creams(){
      if (this.cream > 1){
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars(){
      if (this.sugar > 1){
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

// Write the code that makes a black coffee.
var coffee1 = new Coffee("black", 0, 0)
//console.log(blackCoffee)

// Write the code that makes a coffee with 1 cream and 2 sugars.
var coffee2 = new Coffee("Cream and Sugar", 1, 2)
//console.log(coffee2)

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var coffee3 = new Coffee("Sugar Only", 0, 2)
console.log(coffee3.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
  //constructor
  constructor (flavor, milk, shots) {
    this.flavor = flavor,
    this.milk = milk,
    this.shots = shots
  }



  //methods


  latteProfile () {
    return (`The flavor is ${this.flavor}, it has ${this.milk} milk, and ${this.shots} shots`)
  }


}

// Write a method for your Latte class that outputs the latte's profile.





// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

//new instance
var latte1 = new Latte("regular", "whole", 1)
// console.log(latte1.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

var latte2 = new Latte("hazelnut", "almond", 2)
// console.log(latte2.latteProfile())


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  // constructor
  constructor (radius, height) {
    this.radius = radius,
    this.height = height
  }

  //methods
  volume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  //new instances
}



// Write the code that creates three unique cylinder objects

var cylinder1 = new Cylinder (5, 2)
var cylinder2 = new Cylinder (12, 32)
var cylinder3 = new Cylinder (7, 13)

console.log(cylinder1.volume())
console.log(cylinder2.volume())
console.log(cylinder3.volume())