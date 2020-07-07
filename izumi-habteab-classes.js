//----------- ----------- CHALLENGE (1) Coffee Maker ----------- ----------- ---
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

console.log("Here's your " + blackCoffee.type + " coffee.")
// (b)Write the code that makes a coffee with 1 cream and 2 sugars.
console.log(latte.coffeeProfile())
// (c) Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var latte2 = new Coffee (0, 2, "coffee")
console.log(latte2.coffeeProfile());

//----------- ----------- CHALLENGE (2) Latte Maker ----------- ----------- ----
      //skipped

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
console.log(myCar.interest);
//----------- ----------- RACHAEL'S EXAMPLE: ----------- ----------- -----------
//Challenge 1
//Story: As a programmer, I can make a car.
//Write a variable called myCar which is an instance of the class Car

  class Car {
    constructor (model, year, wheels) {
    this.model = "generic car"
    this.year = "myCar year"
    this.wheels = 4
    }
    carProfile () {
      return `This is a ${this.model} year: ${this.year} has ${this.wheels} wheels `
    }
  }
    var myCar = new Car()
  //  Story: As a programmer, I can give my car a model on initialization.
//The model for the car class can be "generic car"
  console.log(myCar.carProfile());

  //Story: As a programmer, I can give my car a year on initialization.
  //The year for the car class can be "myCar year"

  //Story: As a programmer, I can tell how many wheels myCar has.
  //Calling the method wheels will return 4

//   Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
  class Tesla {
    constructor () {
      super ()
    }
  }
    var myTesla = new Tesla
  console.log(myTesla());
