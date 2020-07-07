// Challenge #1 Coffee Maker

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
// var coffeeJava = new Coffee("Black Coffee", 0, 0)

// console.log(coffeeJava);

// Write the code that makes a coffee with 1 cream and 2 sugars.

// var coffeeJava = new Coffee("CofFEe", 1, 2)

// console.log(coffeeJava);

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

var coffeeJava = new Coffee("CofFEe", 0, 2)

console.log(coffeeJava);

coffeeJava.coffeeProfile()

console.log(coffeeJava.coffeeProfile());





// Latte Maker

// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
  constructor (flavor, milkType, shots){
    this.flavor = flavor 
    this.milkType = milkType
    this.shots = shots
  }
  // Write a method for your Latte class that outputs the latte's profile.
  latteProfile(){
    return(`${this.flavor}: ${this.milkType}, ${this.shots}`)
  }
}
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var myLatte = new Latte("vanilla", "skim milk", 2)

console.log(myLatte);

myLatte.latteProfile()

console.log(myLatte.latteProfile());



// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

var myNewLatte = new Latte("hazelnut", "almod milk", "double shot")

console.log(myNewLatte);

myLatte.latteProfile()

console.log(myNewLatte.latteProfile());

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class VolumeCyl{
  constructor (pi, radius, height){
    this.pi = pi
    this.r = radius
    this.h = height
  }
 formula (){
   return this.pi * this.r * 2  * this.h 
 }
}
var volCyl = new VolumeCyl(3.14, 3, 7)

//console.log(volCyl);

volCyl.formula()

console.log(volCyl.formula());

// Write the code that creates three unique cylinder objects

var volCyl1 = new VolumeCyl(3.14, 10, 20)
volCyl1.formula()

console.log(volCyl1.formula());

var volCyl2 = new VolumeCyl(3.14, 1, 8)
volCyl2.formula()

console.log(volCyl2.formula());

var volCyl3 = new VolumeCyl(3.14, 3, 100)
volCyl3.formula()

console.log(volCyl3.formula());



