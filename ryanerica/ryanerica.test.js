//Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.
  // describe("drinkCoffee", () => {
  //   test("returns drink coffee if you are tired and keep working if you are not tired", () =>{
  //     expect(drinkCoffee("tired")).toEqual("drink coffee")
  //     expect(drinkCoffee("not tired")).toEqual("keep working")
  //   })
  // })
  // //  create a function that excepts a string
  // const drinkCoffee = (string) => {
  //   //check if string is equal to tired, if so, return "drink coffee"
  //   if (string == "tired") {
  //     return "drink coffee"
  //     //check if string is equal to not tired, if so, return "keep working"
  //   }else if (string == "not tired") {
  //     return "keep working"
  //   }
  //   //else return, "can't understand"
  //   else {
  //     return "cant understand"}
  // }

//Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

  describe("stressCheck", () => {
    test("returns relax if you are stressed and keep going if you are not stressed", () =>{
      expect(stressCheck("stressed")).toEqual("relax")
      expect(stressCheck("not stressed")).toEqual("keep going")
    })
  })
  const stressCheck = (string) => {
    if (string == "stressed") {
      return "relax"
    }
    else if (string == "not stressed") {
      return "keep going"
    }
    else {
      return "can't help you"
    }
  }
