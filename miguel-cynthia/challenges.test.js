//Challenge #1
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

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

describe("areYouStressed", () =>{
    test("returns a string that tells you to relax or keep going", () => {
        expect(areYouStressed("stressed")).toEqual("relax")
        expect(areYouStressed("not stressed")).toEqual("keep going")
        expect(areYouStressed("blue")).toEqual("not a valid input")
    })
})

//create a function that returns whether or not you should relax or keep going

const areYouStressed = (string) =>{
    if(string === "stressed"){
        return "relax"
    } else if(string === "not stressed"){
        return "keep going"
    } else {
        return "not a valid input"
    }
}


