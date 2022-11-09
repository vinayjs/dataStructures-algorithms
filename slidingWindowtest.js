// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

const average = (arr, k) => {
    n = arr.length;
    result = []
    windowSum  = 0;
    windowStart = 0;
    for (let i = 0; i < n; i++) {
        windowSum += arr[i] 
        if (i >= k-1) {
            result.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart += 1;

        }
    }
    return result;
}

// console.log(average([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

const maxSub = (arr, k) => {
    let windowSum = 0;
    let windowStart = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            result = Math.max(windowSum , result);
            windowSum -= arr[windowStart];
            windowStart += 1;

        }
    }
    return result;
}


// console.log(maxSub([2, 1, 5, 1, 3, 2], 3));

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
