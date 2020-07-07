// //Challenge 1
// class Coffee {
//     constructor(type, cream, sugar){
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile(){
//       return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//     }
  
//     creams(){
//       if (this.cream > 1){
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars(){
//       if (this.sugar > 1){
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }

// // Write the code that makes a black coffee.
// var coffee1 = new Coffee("black", 0, 0)
// //console.log(blackCoffee)

// // Write the code that makes a coffee with 1 cream and 2 sugars.
// var coffee2 = new Coffee("Cream and Sugar", 1, 2)
// //console.log(coffee2)

// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// var coffee3 = new Coffee("Sugar Only", 0, 2)
// console.log(coffee3.coffeeProfile())

// // Latte Maker
// // Write a Latte class that receives a flavor, a milk type and a number of shots.
// class Latte {
//   //constructor
//   constructor (flavor, milk, shots) {
//     this.flavor = flavor,
//     this.milk = milk,
//     this.shots = shots
//   }



//   //methods


//   latteProfile () {
//     return (`The flavor is ${this.flavor}, it has ${this.milk} milk, and ${this.shots} shots`)
//   }


// }

// // Write a method for your Latte class that outputs the latte's profile.





// // Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// //new instance
// var latte1 = new Latte("regular", "whole", 1)
// // console.log(latte1.latteProfile())

// // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// var latte2 = new Latte("hazelnut", "almond", 2)
// // console.log(latte2.latteProfile())


// // Volume of a Cylinder
// // Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// class Cylinder {
//   // constructor
//   constructor (radius, height) {
//     this.radius = radius,
//     this.height = height
//   }

//   //methods
//   volume() {
//     return Math.PI * Math.pow(this.radius, 2) * this.height;
//   }

//   //new instances
// }



// // Write the code that creates three unique cylinder objects

// var cylinder1 = new Cylinder (5, 2)
// var cylinder2 = new Cylinder (12, 32)
// var cylinder3 = new Cylinder (7, 13)

// console.log(cylinder1.volume())
// console.log(cylinder2.volume())
// console.log(cylinder3.volume())

//Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
class Car{
  //constructor
  constructor(model = "generic car", year = "myCar year", lights = "off", turnSignal = "off", speed = 0){
    this.wheels = 4
    this.model = model
    this.year = year
    this.lights = lights
    this.signal = turnSignal
    this.speed = speed
  }

  numberOfWheels(){
    return this.wheels
  }

  switchLights(){
    if (this.lights == "off"){
      return this.lights = "on"
    } else {
      return this.lights = "off"
    }
    

  }
}

var myCar = new Car()


// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// console.log(myCar.numberOfWheels())

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla

class Tesla extends Car{
  constructor(model, year){
    super(model, year)
  }

  acceleration(){
    return this.speed += 10
  }

  braking(){
    return this.speed -= 7
  }
}

var myTesla = new Tesla("electric car")
var myTesla2 = new Tesla()

// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// console.log(myTesla.model)
// console.log(myTesla2.model)

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota


class Toyota extends Car {
  constructor (model, year) {
    super(model, year)
  }

  acceleration(){
    return this.speed += 5
  }

  braking(){
    return this.speed -= 2
  }

}

var myToyota = new Toyota()

//console.log(myToyota)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class


// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class


// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen

class Volkswagen extends Car {
  constructor(model, year) {
    super(model, year)
  }
}

// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.
// console.log(myToyota.lights)
// console.log(myToyota.switchLights())
// console.log(myToyota.switchLights())


// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//console.log(myToyota.signal)

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// console.log(myTesla.speed)
// console.log(myTesla.acceleration())
// console.log(myTesla.acceleration())
// console.log(myTesla.acceleration())

//Story: As a programmer, I can slow my Tesla down by 7 per braking.
//console.log(myTesla.speed)
//console.log(myTesla.acceleration())
//console.log(myTesla.braking())


//Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

//Story: As a programmer, I can slow my Toyota down by 2 per braking.

console.log(myToyota.speed)
console.log(myToyota.acceleration())
console.log(myToyota.braking())