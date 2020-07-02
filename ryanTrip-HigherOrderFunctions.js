// Challenge 1
// var arr1 = [3, 9, 15, 4, 10]

// const multTen = (array) => {
//     return array.map(value => {
//         return value * 10;
//     })
// }

// console.log(multTen(arr1));

//Challenge 2

var arr2 = [2, 7, 3, 5, 8, 10, 13]

const oddNums = (array) => {
   return array.filter(value => value % 2 !== 0);
}

console.log(oddNums(arr2));