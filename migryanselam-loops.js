//
// for (let i = 0; i <= 20; i++){
//   console.log(i);
// }
//
// for (let i = 0; i <= 20; i++){
//   console.log(i * 3);
// }
//
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log("ODD");
// } else {
//   console.log(i);
// }
// }
//2nd addition
// var nums = [3, 57, -9, 20, 67]
// var high = 0
// for (let i=0; i<nums.length; i++){
// if (nums[i]>high){
//   high=nums[i]
// }
// }
// console.log(high);

// var nums = [3, 57, -9, 20, 67]
// var low = 0
// for (let i=0; i<nums.length; i++){
// if (nums[i]<low){
//   low=nums[i]
// }
// }
// console.log(low);

var nums = [3, 57, -9, 20, 67]
for (let i=0; i<nums.length; i++){
var remainder = nums[i]%2
console.log(remainder);
}
