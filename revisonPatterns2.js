// // Given an array of positive numbers and a positive number ‘k,’
// // find the maximum sum of any contiguous subarray of size ‘k’.

// // Input: [2, 1, 5, 1, 3, 2], k=3
// // Output: 9
// // Explanation: Subarray with maximum sum is [5, 1, 3].

// // sol-1-

// const maxArray = (k, arr) => {
//   let maxSub = 0;
//   let maxSum = 0;
//   for(let i = 0; i < arr.length - k + 1; i++){
//     maxSum = 0;
//     for(let j = i; j < i + k; j++) {
//       maxSum += arr[j];
//     }
//      maxSub = Math.max(maxSub,maxSum)
//   }
//   return maxSub;
// }

// console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));

// =============================================================================================================================

// // - sol 2---using sliding window.

// // Input: [2, 1, 5, 1, 3, 2], k=3
// // Output: 9

// const maxSum = (k, arr) => {
//   let start = 0
//   let  windowSum = 0
//   let  maxSum = 0

//   for( let i = 0; i < arr.length; i++){
//     windowSum += arr[i];

//     if(i >= k - 1){
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[start];
//       start += 1;
//     }
//   }
//   return maxSum;
// }
// =============================================================================================================================

// // Smallest Subarray With a Greater Sum

// // Input: [2, 1, 5, 2, 3, 2], S=7
// // Output: 2
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // Input: [2, 1, 5, 2, 8], S=7
// // Output: 1
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// const smallSubArray = (s, arr) => {
//   let minLength = Infinity;
//   let windowSum = 0;
//   let windowStart = 0;

//   for(let i = 0; i < arr.length; i++) {
//     windowSum += arr[i];

//     while(windowSum >= s) {
//       minLength = Math.min(minLength, i - windowStart + 1);
//       windowSum -= arr[windowStart];
//       windowStart += 1
//     }
//   }

//   if(minLength === Infinity) {
//     return 0;
//   }
//   return minLength;
// }

// console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));
// =============================================================================================================================

// // Given a string, find the length of the longest substring in it with no more than K distinct characters.
// // Input: String="araaci", K=2
// // Output: 4
// // Explanation: The longest substring with no more than '2' distinct characters is "araa".

// const subString = (str, k) => {
//   let windowStart = 0,
//   maxLength = 0,
//   charFrequency = {};
// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//   const rightChar = str[windowEnd];
//   if (!(rightChar in charFrequency)) {
//     charFrequency[rightChar] = 0;
//   }
//   charFrequency[rightChar] += 1;
//   // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
//   while (Object.keys(charFrequency).length > k) {
//     const leftChar = str[windowStart];
//     charFrequency[leftChar] -= 1;
//     if (charFrequency[leftChar] === 0) {
//       delete charFrequency[leftChar];
//     }
//     windowStart += 1; // shrink the window
//   }
//   // remember the maximum length so far
//   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
// }

// console.log(subString("araaci", 2));
// =============================================================================================================================

// // Input: Fruit=['A', 'B', 'C', 'A', 'C']
// // Output: 3
// // Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// const fruits_into_baskets = (fruits) => {
//   let windowStart = 0,
//     maxLength = 0,
//     fruitFrequency = {};

//   // try to extend the range [windowStart, windowEnd]
//   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//     const rightFruit = fruits[windowEnd];
//     if (!(rightFruit in fruitFrequency)) {
//       fruitFrequency[rightFruit] = 0;
//     }
//     fruitFrequency[rightFruit] += 1;

//     // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
//     while (Object.keys(fruitFrequency).length > 2) {
//       const leftFruit = fruits[windowStart];
//       fruitFrequency[leftFruit] -= 1;
//       if (fruitFrequency[leftFruit] === 0) {
//         delete fruitFrequency[leftFruit];
//       }
//       windowStart += 1; // shrink the window
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }

//   return maxLength;
// }

// console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));

// ============================================================================================================================
// // Given a string, find the length of the longest substring, which has all distinct characters.

// // Input: String="aabccbb"
// // Output: 3
// // Explanation: The longest substring with distinct characters is "abc".

// const non_repeat_substring = (str) => {
//   let windowStart = 0,
//     maxLength = 0,
//     charIndexMap = {};
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (rightChar in charIndexMap) {
//       windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
//     }
//     charIndexMap[rightChar] = windowEnd;
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// }

// console.log(non_repeat_substring("aabccbb"))

// ============================================================================================================================

// // Longest Subarray with Ones after Replacement.
// // Given an array containing 0s and 1s,
// // if you are allowed to replace no more than ‘k’ 0s with 1s,
// // find the length of the longest contiguous subarray having all 1s.
// // Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// // Output: 6
// // Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// const lengthOfLongestSubString = (arr, k) => {
//     let windowStart = 0;
//     let maxLength = 0;
//     let maxOneCount = 0;

//     for (windowEnd = 0; windowEnd < arr.length; windowEnd++){
//         if (arr[windowEnd] === 1) {
//             maxOneCount += 1;
//         }
//         if ((windowEnd - windowStart + 1 - maxOneCount) > k) {
//             if(arr[windowStart] === 1) {
//                 maxOneCount -= 1;
//             }
//             windowStart += 1;
//         }
//         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//     }
//     return maxLength;
// }

// console.log(lengthOfLongestSubString([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

// ============================================================================================================================
// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

// const findPermutation = (str, pattern) => {
//   let windowStart = 0;
//   let matched = 0;
//   let charFrequency = {};

//   for (let i = 0; i < pattern.length; i++) {
//     const chr = pattern[i];
//     if (!(chr in charFrequency)) {
//       charFrequency[chr] = 0;
//     }
//     charFrequency[chr] += 1;
//   }
//   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (rightChar in charFrequency) {
//       charFrequency[rightChar] -= 1;
//       if (charFrequency[rightChar] === 0) {
//         matched += 1;
//       }
//     }
//     if (matched === Object.keys(charFrequency).length) {
//       return true;
//     }
//     if (windowEnd >= pattern.length - 1) {
//       let leftchar = str[windowStart];
//       windowStart += 1;
//       if (leftchar in charFrequency) {
//         if (charFrequency[leftchar] === 0) {
//           matched -= 1;
//         }
//         charFrequency[leftchar] += 1;
//       }
//     }
//   }
//   return false;
// };
// console.log(findPermutation("oidbcaf", "bca"));

// const arr = [-2, -1, 0, 1, 2];

// const squareSort = (arr) => {
// let left = 0;
// let len = arr.length;
// let right = len - 1;
// let resultArray = Array(len).fill(0);
// let lastIndex = len - 1;

// while (left < right) {
//   let leftIndexSquare = arr[left] * arr[left];
//   let rightIndexSquare = arr[right] * arr[right];
//   if (leftIndexSquare > rightIndexSquare) {
//     resultArray[lastIndex] = leftIndexSquare;
//     left++;
//   } else {
//     resultArray[lastIndex] = rightIndexSquare;
//     right--;
//   }
//   lastIndex--;
// }
// return resultArray;
// };

// console.log(squareSort([-2, -1, 0, 1, 2]));