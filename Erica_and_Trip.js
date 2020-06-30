// var item = 101;
// if (item <= 100) {
//     console.log("in budget");
// }
// var hungry = false;
// if (hungry) {
//     console.log("eat food");
// } else {
//     console.log("keep coding");
// }
// var trafficLight = "red";
// if (trafficLight == "green") {
//     console.log("go");
// } else if(trafficLight == "yellow") {
//     console.log('slow down');
// } else if (trafficLight == "red") {
//     console.log("stop")
// }
//
// var num1 = 15;
// var num2 = 15;
//
// if (num1 > num2){
//   console.log(num1);
// } else if (num2 > num1){
//   console.log(num2);
// } else {
//   console.log("Equal");
// }
//
// var number = 137234674732834;
//
// if (number == 0) {
//   console.log("Zero");
// } else if ((number % 2) == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
var grade = Math.random() *100 ;
console.log(grade);

if (grade >= 100) {
  console.log("perfect score");
} else if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 80) {
  console.log("Grade: B");
} else if (grade >= 70) {
  console.log("Grade: C");
} else if (grade >= 60) {
  console.log("Grade: D");
} else if (grade > 0) {
  console.log("Grade: F");
} else {
  console.log("No grade available");
}
