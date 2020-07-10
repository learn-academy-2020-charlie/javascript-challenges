//----------- ----------- CHALLENGE (1) Coffee Maker ----------- ----------- --
class Coffee {
  constructor(cream, sugar, type="Black"){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`Here's your ${this.type} with ${this.creams()}, and  ${this.sugars()}`)
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

// (a) Write the code that makes a black coffee.
//NOTES: creating the instance (object-lowercase) of the class, saved as a variable
var blackCoffee = new Coffee ()
var latte = new Coffee (1, 2, "latte")

      // console.log("Here's your " + blackCoffee.type + " coffee.")
// (b)Write the code that makes a coffee with 1 cream and 2 sugars.
      // console.log(latte.coffeeProfile())
// (c) Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var latte2 = new Coffee (0, 2, "coffee")
      //console.log(latte2.coffeeProfile());

//----------- ----------- CHALLENGE (2) Latte Maker ----------- ----------- ---
//Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
  constructor (){
    this.flavor = ["regular", "vanilla", "hazelnut"]
    this.milkType = ["whole milk", "soy milk", "oat milk"]
    this.shots += 1
  }
//Write a method for your Latte class that outputs the latte's profile.

  shotsNumber () {
    if (this.shots < 1){
      return "decaf"
    } else if (this.shots = 1){
      return "single-shot"
    } else {
      return `${this.shots} shots`
    }
  }
  latteProfile () {
    return `Here is your ${this.flavor}, ${this.milkType}, ${this.shotsNum} latte.`
  }
}
//Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var myLatte = new Latte ()

// console.log(myLatte.latteProfile());

//----------- ----------- RACHAEL'S CLASS EXAMPLE: ----------- ----------- -----

class Loan {
  constructor () {
    this.interest = 17
    this.payDate = "1st"
  }
}
class AutoLoan extends Loan {
  constructor (){
    super ()
    //carries:     this.interest = 17
    //             this.payDate = "1st"
    this.debt = 10000
  }
}

var myCar = new AutoLoan()
// console.log(myCar.interest);
//----------- ----------- CLASS INHERITANCE CHALLENGES: ----------- ----------
//(1)Story: As a programmer, I can make a car.
//(1a)Write a variable called myCar which is an instance of the class Car

class Car {
  constructor (model, year, wheels) {
  this.model = "generic car"
  this.year = "myCar year"
  this.wheels = 4
  this.lights = "off"
  }
  carProfile () {
    return `This is a ${this.model}, year: ${this.year}, and has ${this.wheels} wheels. Lights are currently ${this.lights}.`
  }
  lightSwitch () {
    if (this.lights === "off") {
      return this.lights = "on"
  } else {
    return this.lights = "off"
  }
}
}
  var myCar = new Car()
//(2)Story: As a programmer, I can give my car a model on initialization.
//(2a)The model for the car class can be "generic car"
  console.log(myCar.carProfile());
  console.log(myCar.lightSwitch());

//(3)Story: As a programmer, I can give my car a year on initialization.
//(3a)The year for the car class can be "myCar year"

//(4)Story: As a programmer, I can tell how many wheels myCar has.
//(4a)Calling the method wheels will return 4

//(4)Story: As a programmer, I can make a Tesla car.
//(4b)Note: class Tesla inherits from class Car - use the two JS keywords, "extends" & "super". Create an object called myTesla which is a instance of class Tesla
  class Tesla extends Car {
    constructor () {
      super()
      this.model = "Tesla model s"
      this.year = 2020
      this.lights= "on"
    }
  }
    var myTesla = new Tesla
  console.log(myTesla.carProfile());
//(5)Story:As a programmer, I can give my Tesla a model on initialization.
//(5a) The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

//(6)Story:As a programmer, I can give my Tesla a year on initialization.
//(6a) The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

//(7)Story: As a programmer, I can make a Toyota car. Class Toyota inherits from class Car.
//(7a) Create an object called myToyota which is a instance of class Toyota

class Toyota extends Car {
  constructor () {
    super ()
    this.model = "Toyota Camry"
    this.year = 2021
  }


}
var myToyota = new Toyota ()

console.log(myToyota.carProfile());

//(8)Story: As a programmer, I can give my Toyota a model on initialization.
//(8a)The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
//-----skipped 9-12

//(13) As a programmer, I can give all my cars a lights property. Lights start in the off position
