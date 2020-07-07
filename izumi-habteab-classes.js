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
