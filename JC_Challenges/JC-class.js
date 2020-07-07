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

// var coffeeJava = new Coffee("CofFEe", 0, 2)

// console.log(coffeeJava);

// coffeeJava.coffeeProfile()

// console.log(coffeeJava.coffeeProfile());





