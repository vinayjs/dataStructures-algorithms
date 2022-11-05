// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// const targetSum = (arr,target) => {
//     let start = 0;
//     let end = arr.length - 1;
//     while(start < end) {
//         const currentSum = arr[start] + arr[end];
//         if (currentSum === target) {
//             return [start, end]
//         }
//         if(target > currentSum){
//             start += 1;
//         }else{
//             end -= 1;
//         }
//     }
//     return[start, end]
// }

// console.log(targetSum([1, 2, 3, 4, 6], 6));

//====================================================================================================

//Remove Duplicates
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// const removeDup = (arr) => {
//     let nextNonDup = 1;
//     let i = 0;
//     while(i < arr.length){
//         if(arr[nextNonDup - 1] !== arr[i]){
//             arr[nextNonDup] = arr[i];
//             nextNonDup += 1;
//         }
//         i += 1;
//     }
//     return nextNonDup;
// }

// console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// const arr =  [-2, -1, 0, 2, 3]
// const result = Array(arr.length - 1).fill(0)
// let left = 0
// let right = arr.length - 1
// let lastIndex = arr.length - 1

// while (left < right) {
//   let leftSquare = arr[left] * arr[left]
//   let rightSquare = arr[right] * arr[right]
//   if (leftSquare > rightSquare) {
//     result[lastIndex] = leftSquare
//     left ++
//   } else {
//     result[lastIndex] = rightSquare
//     right --
//   }
//   lastIndex --
// }
// console.log(result)

// Given a sorted array,
// create a new array containing squares of all the numbers of the input array in the sorted order.

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

// const makeSquares = (arr) => {
//   const n = arr.length;
//   squares = Array(n).fill(0);
//   let highestSquareIndex = n - 1;
//   let left = 0;
//   let right = n - 1;
//   while (left <= right) {
//     let leftSquare = arr[left] * arr[left];
//     let rightSquare = arr[right] * arr[right];
//     if (leftSquare > rightSquare) {
//       squares[highestSquareIndex] = leftSquare;
//       left += 1;
//     } else {
//       squares[highestSquareIndex] = rightSquare;
//       right -= 1;
//     }
//     highestSquareIndex -= 1;
//   }
//   return squares;
// };
// console.log(makeSquares([-2, -1, 0, 2, 3]));

// Given an array of unsorted numbers,
// find all unique triplets in it that add up to zero.
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.

// const searchTriplets = (arr) => {
//   arr.sort((a, b) => a - b);
//   const triplets = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     searchPair(arr, -arr[i], i + 1, triplets);
//   }
//   return triplets;
// };
// const searchPair = (arr, targetSum, left, triplets) => {
//   let right = arr.length - 1;
//   while (left < right) {
//     const currentSum = arr[left] + arr[right];
//     if (currentSum === targetSum) {
//       triplets.push([-targetSum, arr[left], arr[right]]);
//       left += 1;
//       right -= 1;
//       while (left < right && arr[left] === arr[left - 1]) {
//         left += 1;
//       }
//       while (left < right && arr[right] === arr[right + 1]) {
//         right -= 1;
//       }
//     } else if (targetSum > currentSum) {
//       left += 1;
//     } else {
//       right -= 1;
//     }
//   }
// };
// console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target number as possible,
// return the sum of the triplet. If there are more than one such triplet,
// return the sum of the triplet with the smallest sum.

// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// const tripletSum = (arr, targetSum) => {
//     arr.sort((a, b) => a - b);
//     let smallDifferenece = Infinity;
//     for (let i = 0; i < arr.length - 2; i++) {
//         let left = i + 1;
//         let right = arr.length - 1;
//         while (left < right) {
//             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
//             if (targetDifference === 0) {
//                 return targetSum
//             }
//             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
//                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
//                 smallDifferenece = targetDifference;
//             }
//             if (targetDifference > 0) {
//                 left += 1;
//             } else {
//               right -= 1;
//             }
//         }
//     }
//     return targetSum - smallDifferenece;
// }
// console.log(tripletSum([-2, 0, 1, 2], 2));

// Given an array arr of unsorted numbers and a target sum,
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// Write a function to return the count of such triplets.

// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// const tripletWithSmallerSum = (arr, target) => {
//   arr.sort((a, b) => a - b);
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     count += searchPair(arr, target - arr[i], i);
//   }
//   return count;
// };
// const searchPair = (arr, targetSum, first) => {
//   let count = 0;
//   let left = first + 1;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] + arr[right] < targetSum) {
//       count += right - left;
//       left += 1;
//     } else {
//       right -= 1;
//     }
//   }
//   return count;
// };

// console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));
