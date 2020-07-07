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
// //Black coffee
// var blackCoffee = new Coffee("Viet", 0, 0);
// console.log(blackCoffee);

// //Coffe number 2
// var lightCream = new Coffee("Light", 1, 2);
// console.log(lightCream);

// //Coffee number 3
// var doubleSugar = new Coffee("dblSugar", 0, 2);
// console.log(doubleSugar.coffeeProfile());


//Challenge 2

// class Latte {
//   constructor (numOfShots = 5, flavor = "caramel", milkType = "2% milk") {
//     this.flavor = flavor
//     this.milkType = milkType
//     this.numOfShots = numOfShots
//   }

//   latteProfile(){
//     return `${this.flavor} latte: ${this.milkType}, ${this.numOfShots} esspresso.`
//     //return `${this.flavor} latte: ${this.milkType}, ${this.numOfShots} 
//   }
// }

// var singleShot = new Latte(1)
// console.log(singleShot.latteProfile());

// var hazelnutLatte = new Latte(2, "hazelnut", "almond milk")
// console.log(hazelnutLatte.latteProfile());

//Challenge 3

// class Cylinder {
//   constructor (radius, height, unitType) {
//     this.radius = radius,
//     this.height = height,
//     this.unitType = unitType;
//   }
//   //Methods
//   volumeCalc() {
//     let volume = (3.1415*((this.radius)*(this.radius))*(this.height));
//     return `The volume of this cylinder is ${volume.toFixed(4)} ${this.unitType} cubed.`;
//   }
// }


// var cylinder1 = new Cylinder(1.5,2, "cm");
// console.log(cylinder1.volumeCalc());

// var cylinder2 = new Cylinder(3.25,12.2, "inches");
// console.log(cylinder2.volumeCalc());

// var cylinder3 = new Cylinder(4, 30, "mm");
// console.log(cylinder3.volumeCalc());

//CLASS INHERITANCE CHALLENGES

//Story: As a programmer, I can make a car.
//Write a variable called myCar which is an instance of the class Car

//Story: As a programmer, I can give my car a model on initialization.
//The model for the car class can be "generic car"

//Story: As a programmer, I can give my car a year on initialization.
//The year for the car class can be "myCar year"

//Story: As a programmer, I can tell how many wheels myCar has.
//Calling the method wheels will return 4

//Story: As a programmer, I can make a Tesla car.
//class Tesla inherits from class Car
//Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class


class Car {
  constructor (model = "generic car", year = "myCar year"){
    this.model = model
    this.year = year
  }
  wheels (){
    return 4
  }
}

var myCar = new Car()

class Tesla extends Car {
  constructor () {
    super ()
  }
}

var myTesla = new Tesla ("cyber truck", "2020")
console.log(myTesla.wheels());


// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
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
