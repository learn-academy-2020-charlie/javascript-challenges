// Challenge 1
// var arr1 = [3, 9, 15, 4, 10]

// const multTen = (array) => {
//     return array.map(value => {
//         return value * 10;
//     })
// }

// console.log(multTen(arr1));

//Challenge 2

// var arr2 = [2, 7, 3, 5, 8, 10, 13]

// const oddNums = (array) => {
//    return array.filter(value => value % 2 !== 0);
// }

// console.log(oddNums(arr2));

// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const getString = (array) => {
//    let lettersArr = array.filter(value => typeof value =="string")
//    return lettersArr.join("");
// }
// console.log(getString(comboArr));


// var str = "javascript is awesome"

// // Declare function and arguments
// const noVowel = (string) => {
//    // Convert string into array
//    let strArr = string.split("");
//    // Use filter method to remove vowels - using if else tree
//    let noVowelArr = strArr.filter(value => value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u")
//    // Convert array of no vowels back into string
//    let noVowelStr = noVowelArr.join("");
//    // Return string
//    return noVowelStr;
// }

// console.log(noVowel(str));

//Stretch 2

var arr1 = [3, 7, 10, 5, 4, 3];
var arr2 = [7, 8, 2, 1, 5, 4];

//Declare our method
const combineArr = (array1, array2) => {
    //Combine the two arrays into a big array
    let bigArray = array1.concat(array2);
    console.log("This is our bigArray: " + bigArray);
    //Create a final container array
    let finalArray = [];

    bigArray.forEach(value => {
        let status = true
        if (status !== finalArray.includes(value)) {
            finalArray.push(value);
        } //closes if statement
    }) // closes forEach()

    return finalArray;
} //close combineArr

console.log(combineArr(arr1, arr2));