///////////////////////////////////////////////////////SLIDING WINDOW////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////PROBLEM - 1//////////////////////////////////////////////////////////////////
// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
//Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// const avg = (arr, k) => {
//     let result = [];
//     let sum_sub = 0.0;
//     let start = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum_sub += arr[i]
//         if(i >= k - 1){
//         result.push(sum_sub / k);
//         sum_sub -= arr[start];
//         start += 1;
//         }
//     }
//     return result;
// };

// console.log(avg([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

/////////////////////////////////////////////////////PROBLEM - 2//////////////////////////////////////////////////////////////////
//Given an array of positive numbers and a positive number ‘k,’
//find the maximum sum of any contiguous subarray of size ‘k’.
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// const sum = (arr, k) => {
//     let sub_sum = 0;
//     let start = 0;
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         sub_sum += arr[i];
//         if(i >= k -1){
//             result = Math.max(result, sub_sum);
//             sub_sum -= arr[start];
//             start += 1;
//         }
//     }
//     return result;
// }

// console.log(sum([2, 1, 5, 1, 3, 2], 3));

/////////////////////////////////////////////////////PROBLEM - 3//////////////////////////////////////////////////////////////////
// Given an array of positive integers and a number ‘S,’
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0 if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// const arr_length = (arr, s) => {
//     let sum = 0;
//     let start = 0;
//     let min_length = Infinity;

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//         while(sum >= s){
//             min_length = Math.min(min_length, i - start + 1);
//             sum -= arr[start];
//             start++;
//         }
//     }
//     if(min_length === Infinity){
//         return 0;
//     }
//     return min_length;
// }
// console.log(arr_length([2, 1, 5, 2, 3, 2], 7));
// console.log(arr_length([2, 1, 5, 2, 8], 7));

/////////////////////////////////////////////////////PROBLEM - 4//////////////////////////////////////////////////////////////////

//Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// const longSubString = (str, k) => {
//   let start = 0;
//   (maxLength = 0), (charFreq = {});

//   for (let end = 0; end < str.length; end++) {
//     const rightChar = str[end];
//     if (!(rightChar in charFreq)) {
//       charFreq[rightChar] = 0;
//     }
//     charFreq[rightChar] += 1;

//     while (Object.keys(charFreq).length > k) {
//       const leftChar = str[start];
//       charFreq[leftChar] -= 1;
//       if (charFreq[leftChar] === 0) {
//         delete charFreq[leftChar];
//       }
//       start += 1;
//     }
//     console.log("start" + start);
//     console.log("end" + end);
//     maxLength = Math.max(maxLength, end - start + 1);
//   }
//   return maxLength;
// };
// console.log(longSubString("araaci", 2));

/////////////////////////////////////////////////////PROBLEM - 4//////////////////////////////////////////////////////////////////
// Given a string, find the length of the longest substring, which has all distinct characters.

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring with distinct characters is "ab".

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring with distinct characters is "ab".

// const longSubString = (str) => {
//     let windowStart = 0;
//     let maxLength = 0;
//     charIndexMap = {};

//     for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//         const rightChar = str[windowEnd];
//         if (rightChar in charIndexMap) {
//             windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
//         }
//         charIndexMap[rightChar] = windowEnd;
//         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//     }
//     return maxLength;
// }
// console.log(longSubString("abacbd"))

// // // Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

// // // Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// // const average = (arr, k) => {
// //     n = arr.length;
// //     result = []
// //     windowSum  = 0;
// //     windowStart = 0;
// //     for (let i = 0; i < n; i++) {
// //         windowSum += arr[i] 
// //         if (i >= k-1) {
// //             result.push(windowSum / k);
// //             windowSum -= arr[windowStart];
// //             windowStart += 1;

// //         }
// //     }
// //     return result;
// // }

// // // console.log(average([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

