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
// Given a list of intervals,
// merge all the overlapping intervals to produce
// a list that has only mutually exclusive intervals.

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// one [1,5].

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   getInterval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// }

// const merge = (intervals) => {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   intervals.sort((a, b) => a.start - b.start);
//   const mergedIntervals = [];
//   let start = intervals[0].start,
//     end = intervals[0].end;
//   for (i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) {
//       end = Math.max(interval.end, end);
//     } else {
//       mergedIntervals.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
//   mergedIntervals.push(new Interval(start, end));
//   return mergedIntervals;
// };

// let result = merge([
//   new Interval(1, 4),
//   new Interval(2, 5),
//   new Interval(7, 9),
// ]);
// console.log("Merged intervals :", result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a list of non-overlapping intervals sorted by their start time,
// insert a given interval at the correct position and
// merge all necessary intervals to produce a list
// that has only mutually exclusive intervals.

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7],
// we merged them into one [4,7].

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
//   printInterval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// }

// const insert = (intervals, newInterval) => {
//   let merged = [];
//   i = 0;
//   while (i < intervals.length && intervals[i].end < newInterval.start) {
//     merged.push(intervals[i]);
//     i += 1;
//   }
//   while (i < intervals.length && intervals[i].start <= newInterval.end) {
//     newInterval.start = Math.min(intervals[i].start, newInterval.start);
//     newInterval.end = Math.max(intervals[i].end, newInterval.end);
//     i += 1;
//   }
//   merged.push(newInterval);

//   while (i < intervals.length) {
//     merged.push(intervals[i]);
//     i += 1;
//   }
//   return merged;
// };
// let result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 6)
// );

// console.log("new output :", result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given two lists of intervals,
// find the intersection of these two lists.
// Each list consists of disjoint intervals sorted on their start time.

// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.

// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
// }
// const merge = (intervalsA, intervalsB) => {
//   let result = [],
//     i = 0,
//     j = 0;
//   while (i < intervalsA.length && j < intervalsB.length) {
//     aOverLapB =
//       intervalsA[i].start >= intervalsB[j].start &&
//       intervalsA[i].start <= intervalsB[j].end;
//     bOverLapA =
//       intervalsB[j].start >= intervalsA[i].start &&
//       intervalsB[j].start <= intervalsA[i].end;
//     if (aOverLapB || bOverLapA) {
//       result.push(
//         new Interval(
//           Math.max(intervalsA[i].start, intervalsB[j].start),
//           Math.min(intervalsA[i].end, intervalsB[j].end)
//         )
//       );
//     }
//     if (intervalsA[i].end < intervalsB[j].end) {
//       i += 1;
//     } else {
//       j += 1;
//     }
//   }
//   return result;
// };
// let result = merge(
//   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
//   [new Interval(2, 3), new Interval(5, 7)]
// );

// console.log(result);
