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
// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.

//write a test for a function that takes in a number and determines if its odd
// describe("oddNum", () =>{
//     test("return whether the number is odd", () =>{
//         expect(oddNum(35)).toEqual("odd")
//         expect(oddNum(34)).toEqual("even")
//     })
// })

// const oddNum = (number) => {
//     if(number % 2 !== 0){
//         return "odd"
//     } else {
//         return "even"
//     }
// }

// CHALLENGE 6
// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.

// describe("fruitColor", () =>{
//     test("return color of the fruit", () =>{
//         expect(fruitColor("banana")).toEqual("yellow")
//         expect(fruitColor("apple")).toEqual("red")
//         expect(fruitColor("grape")).toEqual("purple")
//     })
// })

// const fruitColor = (fruitname) =>{
//     if(fruitname === "banana"){
//         return "yellow"
//     } else if (fruitname === "apple"){
//         return "red"
//     } else if (fruitname === "grape"){
//         return "purple"
//     }

// Challenge 7
// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

// describe("rick", () =>{
//     test("return Morty", () =>{
//         expect(rick()).toEqual("Morty")
//     })
// })

// const rick = () =>{
//     return "Morty"
// }

// CHALLENGE 8
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.

// describe("greeter", () =>{
//     test("returns a string of a greeting with a name", () =>{
//         expect(greeter(name)).toEqual(`Hello ${name}`)
//     })
// })

// var name = "Cynthia"

// const greeter = (name) =>{
//     return `Hello ${name}`
// }

// Challenge #9
// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

// describe("oddOrEven", () =>{
//     test("returns whether number is odd or even", () => {
//         expect(oddOrEven(num1)).toEqual("odd")
//         expect(oddOrEven(num2)).toEqual("even")

//     })
// })

// var num1 = 43
// var num2 = 44

// const oddOrEven = (nums) =>{
//     if(nums %2 !== 0){
//         return "odd"
//     } else{
//         return "even"
//     }
// }

// Challenge #10
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

// describe("doubler", () =>{
//     test("returns result of number * 2", () =>{
//         expect(doubler(num1)).toEqual(num1*2)
//     })
// })  

// var num1 = 3

// const doubler = (number) =>{
//     return number * 2
// }

// Challenge #11
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

// describe("multiply", () =>{
//     test("returns result of 2 numbers multiplied by the other", () => {
//         expect(multiply(num1, num2)).toEqual(num1*num2)
//     })
// })

// var num1 = 3
// var num2 = 5

// const multiply = (arg1, arg2) =>{
//     return arg1*arg2
// }

// Challenge #12
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

// describe("divisibleBy", () => {
//     test("returns string whether num1 is divisible by num2", () => {
//         expect(divisibleBy(num1, num2)).toEqual(`${num1} is evenly divisible by ${num2}`)
//     })
// })

// var num1 = 10
// var num2 = 5
// // var num3 = 17
// // var num4 = 8

// const divisibleBy = (arg1, arg2) =>{
//     if(arg1 % arg2 === 0){
//         return `${arg1} is evenly divisible by ${arg2}`
// }}

// Challenge #13
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.

// describe("fizzbuzz", () => {
//     test("return fizz if # is multiple of 3, buzz if # is multiple of 5, and fizzbuzz if # is multiple of 3 and 5", () => {
//         expect(fizzbuzz(num1)).toEqual("fizz")
//         expect(fizzbuzz(num2)).toEqual("buzz")
//         expect(fizzbuzz(num3)).toEqual("fizzbuzz")
//     })
// })

// var num1 = 27
// var num2 = 20
// var num3 = 15

// const fizzbuzz = (num) =>{
//     if (num%3 === 0 && num%5 === 0){
//     return "fizzbuzz"
//     } else if(num % 3 === 0){
//         return "fizz"
//     } else if (num % 5 === 0){
//         return "buzz" 
//     }
// }






