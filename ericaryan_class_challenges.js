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

