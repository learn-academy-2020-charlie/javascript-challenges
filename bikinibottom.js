// var price = 200;
// if (price <= 100){
//     console.log("in budget");
// } else {
//     console.log("out of budget");
// }

// var stomach = "hungry"
//
// if (stomach === "hungry") {
//   console.log("Eat food")
// } else {
//   console.log("Keep coding")
// }

// var trafficLight = "violet"
//  if (trafficLight === "green"){
//    console.log("go");
//  } else if (trafficLight === "yellow") {
//    console.log("slow down");
//  } else{
//    console.log("stop");
//  }

// Write an if/else statement that takes two variables of numbers and outputs the larger number,
// or logs equal if the numbers are the same.


// var numOne = 100;
// var numTwo = 100;
//
// if (numOne > numTwo) {
//   console.log(numOne);
// } else if (numTwo > numOne) {
//   console.log(numTwo);
// } else {
//   console.log("EQUAL!")
// }

//Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// var number = 4;
//
// if (number === 0){
//   console.log("zero");
// } else if (number % 2 === 0) {
//   console.log("even");
// } else if (number % 2 !== 0) {
//   console.log("odd");
// }

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available.

var gradePercentage = 100
if (gradePercentage === 100){
  console.log("perfect score");
} else if (gradePercentage >= 90){
  console.log("A");
} else if (gradePercentage >= 80){
  console.log("B");
} else if (gradePercentage >= 70){
  console.log("C");
} else if ( gradePercentage >= 60){
  console.log("D");
} else if (gradePercentage > 0){
  console.log("F");
} else {
  console.log("No grade available");
}
