// for(let i = 1; i <= 20; i++){
//   console.log(i);
// }

// for(let i = 1; i <= 20; i++){
//   console.log(i*3);
// }

// for(let i = 1; i<=20; i++){
//   if(i%2 !==0){
//     console.log("ODD");
//   } else {
//     console.log(i);
//   }
// }
var nums = [3, 57, -9, 20, 67];
var biggestNum = 0

for (let i = 0; i < nums.length; i++){
  if (biggestNum < nums[i]){
    biggestNum = nums[i];
  }
  // if (i = 4){
  //   console.log(biggestNum);
  // }
}
console.log(biggestNum);

