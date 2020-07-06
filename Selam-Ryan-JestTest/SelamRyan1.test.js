// describe("energyLevel", () => {
//     test ("return drink coffee or keep working depending on input", () => {
//         expect(energyLevel("tired")).toEqual("drink coffee")
//         expect(energyLevel("not tired")).toEqual("keep working")
//         expect(energyLevel()).toEqual("I don't understand, leave me alone")
//     })
// })

// const energyLevel = (string) => {
//     if (string == "tired") {
//         return "drink coffee"
//     } else if (string == "not tired") {
//         return "keep working"
//     } else {
//         return "I don't understand, leave me alone"
//     }
// }

// describe("stressLevel", () => {
//     test ("return relax or keep going depending on stress level", () => {
//         expect(stressLevel("stressed")).toEqual("relax")
//         expect(stressLevel("not stressed")).toEqual("keep going")
//     })
// })

// const stressLevel = (string) => {
//     if (string == "stressed") {
//         return "relax"
//     } else if (string == "not stressed") {
//         return "keep going"
//     } else {
//         return "IDK MY BFF JILL"
//     }
// }

// describe("budgetCheck", () => {
//     test ("return in budget or not in budget depending on price", () => {
//         expect(budgetCheck(150)).toEqual("in budget")
//         expect(budgetCheck(300)).toEqual("out of budget")
//     })
// })

// const budgetCheck = (price) => {
//     if (price < 300) {
//         return "in budget"
//     } else if (price >= 300) {
//         return "out of budget"
//     } else {
//         return "undefined"
//     }
// }

//CHALLENGE 4:

describe ("numbCompare", () => {
  test ("return the smaller number from the two arguments", () => {
    expect (numbCompare(numb1)).toEqual (`${arg1} is the smaller number`)
    expect (numbCompare(numb2)).toEqual (`${arg2} is the smaller number`)
  })
})

var numb1 = 5
var numb2 = 10
const numbCompare = (arg1, arg2) => {
  if (arg1 < arg2) {
    return `${arg1} is the smaller number`
  } else if (arg1 > arg2) {
    return `${arg2} is the smaller number`
  }
}
