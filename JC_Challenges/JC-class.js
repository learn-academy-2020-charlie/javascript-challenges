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
// Challenge 7
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Challenge 8
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Challenge 9
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
//Challenge 10
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
//Challenge 11
// Story: As a programmer, I can give my Volkswagen a model on initialization.
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
class Toyota extends Car{
  constructor(myToyota, model, year){
    super(model, year)
    this.myToyota = "anything"
  }
}

class Volkswagen extends Car{
  constructor(model){
    super(model)
    // this.model = "Volkswagen"
    this.year = 1978
  }
}
// var myCar = new Car("generic car", 1995)
// console.log(myCar.year);

// var myCar2 = new Tesla()

var myCar3 = new Toyota()
var myCar4 = new Volkswagen()

// console.log(myCar2.model);
// console.log(myCar2.year);
// console.log(myCar2);
console.log(myCar4);





// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes




