
//(1) Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var items=102
  if (items<=100){
    console.log("Congrats! Your item is in budget");
  } else {
      console.log("Sorry, your item is NOT in budget");
  }

//(2) Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hunger = "la"
  if (hunger==="hungry"){
    console.log("Awe, go ahead and take a snack");
  } else {
    console.log("Don\'t stop, keep coding!");
  }
//or
var hunger = false
  if (hunger == true){
    console.log("eat food");
  } else {
    console.log("keep coding");
  }

//(3) Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
  if (trafficLight==="green"){
    console.log("GO!");
  } else if (trafficLight==="yellow.tolowercase") {
    console.log("SLOW!");
  } else if (trafficLight==="red.tolowercase") {
    console.log("STOP");
  } else {
    console.log("Invalid response!");
  }

//(4) Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
var selamAge = 29
var cynthiaAge = 29
  if (selamAge>cynthiaAge){
    console.log(`Selam is Cynthia's elder because she is ${selamAge} years old`);
  } else if (selamAge===cynthiaAge) {
    console.log("Selam and Cynthia are the same age!");
  } else {
    console.log(`Cynthia is Selam's elder because she is ${cynthiaAge} years old`);
  }

//(5) Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var numb = 0
  if (numb===0){
    console.log("The number is zero.");
  } else if (numb%2 === 0){
    console.log("the number is even");
  } else {
    console.log("The number is odd.");
  }

  //STRETCH CHALLENGE:
  //(1) Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
  //var grades = 100%
  //   if (grades>100%){
  //   console.log("congrats on the perfect score");
  // } else if (grades <= 99%){
  //   console.log("Greade: A");
  // } else if (grades <= 89%){
  //   console.log("Greade: B");
  // } else if (grades <= 79%) {
  //   console.log("Greade: C");
  // } else if (grades <= 69%) {
  //   console.log("Greade: D");
  // } else if (grades < 60%) {
  //   console.log("You've failed the class");
  // } else {
  //   console.log("No grade available");
  // }

  //(2) Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
var dataType = "12"
  if (typeof datatype){
    console.log(typeof dataType);
  } else {
    console.log();
  }

  //(3) Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
  var password = "password123"
  if (password.length<=12 && password.includes(!)) {
    console.log("That is a mighty strong password");
  }  else if (password.length<=8 && password.includes(!)){
    console.log("Good, this is a strong password");
  } else {
    console.log("Sorry, that is not a valid password. Try again!");
  }
