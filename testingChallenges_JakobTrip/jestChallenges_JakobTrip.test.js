// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

//Tests
describe("Fuction 1: howRu", () => {
    test("returns a string that says drink coffee", () => {
        expect(howRu("tired")).toEqual("drink coffee");
        expect(howRu("not tired")).toEqual("keep working");
    })
})

//Functions
const howRu = (string) => {
    if (string === "tired") {
        return "drink coffee";
    } else if (string === "not tired") {
        return "keep working";
    } else {
        return "Pls input \"tired\" or \"not tired\""
    }
}