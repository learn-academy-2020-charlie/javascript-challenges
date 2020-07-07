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

class Cylinder {
  constructor (radius, height, unitType) {
    this.radius = radius,
    this.height = height,
    this.unitType = unitType;
  }
  //Methods
  volumeCalc() {
    let volume = (3.1415*((this.radius)*(this.radius))*(this.height));
    return `The volume of this cylinder is ${volume.toFixed(4)} ${this.unitType} cubed.`;
  }
}


var cylinder1 = new Cylinder(1.5,2, "cm");
console.log(cylinder1.volumeCalc());

var cylinder2 = new Cylinder(3.25,12.2, "inches");
console.log(cylinder2.volumeCalc());

var cylinder3 = new Cylinder(4, 30, "mm");
console.log(cylinder3.volumeCalc());
