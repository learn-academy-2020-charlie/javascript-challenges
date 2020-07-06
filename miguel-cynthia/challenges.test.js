//Challenge #1
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

const { TestScheduler } = require("jest")

//write a test caled coffeeDrink for a function that takes in an argument that determines whether or not to drink coffee

// describe("coffeeDrink", () => {
//     test("return a string with the appropriate action", () => {
//         expect(coffeeDrink("tired")).toEqual("drink coffee")
//         expect(coffeeDrink("not tired")).toEqual("keep working")
//         expect(coffeeDrink("32")).toEqual("not a valid input")
//     })
// })

//write a function that returns whether or not you should drink coffee
// const coffeeDrink = (string) =>{
//     if(string === "tired"){
//         return "drink coffee"
//     } else if(string === "not tired"){
//         return "keep working"
//     } else {
//         return "not a valid input"
//     }
// }

//Challenge #2
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

//create a test called areYouStressed for a function that takes in an argument that determines whether you should relax or keep working

// describe("areYouStressed", () =>{
//     test("returns a string that tells you to relax or keep going", () => {
//         expect(areYouStressed("stressed")).toEqual("relax")
//         expect(areYouStressed("not stressed")).toEqual("keep going")
//         expect(areYouStressed("blue")).toEqual("not a valid input")
//     })
// })

//create a function that returns whether or not you should relax or keep going

// const areYouStressed = (string) =>{
//     if(string === "stressed"){
//         return "relax"
//     } else if(string === "not stressed"){
//         return "keep going"
//     } else {
//         return "not a valid input"
//     }
// }

//challenge 3 Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.

// create a test inBudget for a function that takes in an argument that determines whether a price is lower than $300.

// describe("inBudget", () => {
//     test("returns a string that tells you if you are in budget", () => {
//         expect(inBudget(number1)).toEqual("in budget")
//         expect(inBudget(number2)).toEqual("not in budget")
//         expect(inBudget(number3)).toEqual("not a valid input")
//     })
// })

//create a function that returns whether or not you are in budget.
// var number1 = 150
// var number2 = 400
// var number3 = "blue"

// const inBudget = (number) => {
//     if (number <= 300) {
//         return "in budget"
//     } else if (number > 300) {
//         return "not in budget"
//     } else {
//         return "not a valid input"
//     }
// }

//CHALLENGE 4 Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

//create a test called smallNum for a function that takes in 2 arguments and determines the smaller number in the argument

// describe("smallNum", () => {
//     test("return smaller number", () => {
//         expect(smallNum(num1, num2)).toEqual(num2)
//         expect(smallNum(num3, num4)).toEqual(num3)
//         expect(smallNum(num5, num6)).toEqual("numbers are equal")
//         expect(smallNum(num7, num8)).toEqual("not a number")
//     })
// })

//create a function that returns the smaller number from two arguments
// var num1 = 100
// var num2 = 50
// var num3 = 33
// var num4 = 90
// var num5 = 370
// var num6 = 370
// var num7 = 87
// var num8 = "blue"

// const smallNum = (arg1, arg2) => {
//     if (arg1 > arg2) {
//         return arg2
//     } else if (arg1 < arg2) {
//         return arg1
//     } else if (arg1 === arg2) {
//         return "numbers are equal"
//     } else {
//         return "not a number"
//     }
// }

//CHALLENGE 5
Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.