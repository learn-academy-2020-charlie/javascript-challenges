// // Challenge #1 Coffee Maker

// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }


// // Write the code that makes a black coffee.
// // var coffeeJava = new Coffee("Black Coffee", 0, 0)

// // console.log(coffeeJava);

// // Write the code that makes a coffee with 1 cream and 2 sugars.

// // var coffeeJava = new Coffee("CofFEe", 1, 2)

// // console.log(coffeeJava);

// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// var coffeeJava = new Coffee("CofFEe", 0, 2)

// console.log(coffeeJava);

// coffeeJava.coffeeProfile()

// console.log(coffeeJava.coffeeProfile());





// // Latte Maker

// // Write a Latte class that receives a flavor, a milk type and a number of shots.
// class Latte {
//   constructor (flavor, milkType, shots){
//     this.flavor = flavor 
//     this.milkType = milkType
//     this.shots = shots
//   }
//   // Write a method for your Latte class that outputs the latte's profile.
//   latteProfile(){
//     return(`${this.flavor}: ${this.milkType}, ${this.shots}`)
//   }
// }
// // Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// var myLatte = new Latte("vanilla", "skim milk", 2)

// console.log(myLatte);

// myLatte.latteProfile()

// console.log(myLatte.latteProfile());



// // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// var myNewLatte = new Latte("hazelnut", "almod milk", "double shot")

// console.log(myNewLatte);

// myLatte.latteProfile()

// console.log(myNewLatte.latteProfile());

// // Volume of a Cylinder
// // Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
// class VolumeCyl{
//   constructor (pi, radius, height){
//     this.pi = pi
//     this.r = radius
//     this.h = height
//   }
//  formula (){
//    return this.pi * this.r * 2  * this.h 
//  }
// }
// var volCyl = new VolumeCyl(3.14, 3, 7)

// //console.log(volCyl);

// volCyl.formula()

// console.log(volCyl.formula());

// // Write the code that creates three unique cylinder objects

// var volCyl1 = new VolumeCyl(3.14, 10, 20)
// volCyl1.formula()

// console.log(volCyl1.formula());

// var volCyl2 = new VolumeCyl(3.14, 1, 8)
// volCyl2.formula()

// console.log(volCyl2.formula());

// var volCyl3 = new VolumeCyl(3.14, 3, 100)
// volCyl3.formula()

// console.log(volCyl3.formula());


//Class Inheratance
// Challenge 1
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Challenge 2
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Challenge 3
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Challenge 4
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Challenge 5
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Challenge 6
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

class Car{
  constructor(){
    this.model = "Tesla"
    this.year = 2005
  }
  wheels(){
    return 4
  }
}

class Tesla extends Car{
  constructor(myTesla, year) {
    super()
    // this.model = myTesla
    // this.year = year
 }
}

// var myCar = new Car("generic car", 1995)
// console.log(myCar.year);

var myCar2 = new Tesla()
// console.log(myCar2);

console.log(myCar2.model);
console.log(myCar2.year);
console.log(myCar2);






