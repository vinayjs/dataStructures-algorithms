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

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given an array of positive numbers and a positive number ‘k,’
// // // find the maximum sum of any contiguous subarray of size ‘k’.

// // // Input: [2, 1, 5, 1, 3, 2], k=3 
// // // Output: 9
// // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // const maxSub = (arr, k) => {
// //     let windowSum = 0;
// //     let windowStart = 0;
// //     let result = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         windowSum += arr[i];
// //         if (i >= k - 1) {
// //             result = Math.max(windowSum , result);
// //             windowSum -= arr[windowStart];
// //             windowStart += 1;

// //         }
// //     }
// //     return result;
// // }


// // // console.log(maxSub([2, 1, 5, 1, 3, 2], 3));

// // // Given a string and a pattern, find out if the string contains any permutation of the pattern.
// // // Input: String="oidbcaf", Pattern="abc"
// // // Output: true
// // // Explanation: The string contains "bca" which is a permutation of the given pattern.

// // // const findPermutation = (str, pattern) => {
// // //   let windowStart = 0;
// // //   let matched = 0;
// // //   let charFrequency = {};

// // //   for (let i = 0; i < pattern.length; i++) {
// // //     const chr = pattern[i];
// // //     if (!(chr in charFrequency)) {
// // //       charFrequency[chr] = 0;
// // //     }
// // //     charFrequency[chr] += 1;
// // //   }
// // //   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charFrequency) {
// // //       charFrequency[rightChar] -= 1;
// // //       if (charFrequency[rightChar] === 0) {
// // //         matched += 1;
// // //       }
// // //     }
// // //     if (matched === Object.keys(charFrequency).length) {
// // //       return true;
// // //     }
// // //     if (windowEnd >= pattern.length - 1) {
// // //       let leftchar = str[windowStart];
// // //       windowStart += 1;
// // //       if (leftchar in charFrequency) {
// // //         if (charFrequency[leftchar] === 0) {
// // //           matched -= 1;
// // //         }
// // //         charFrequency[leftchar] += 1;
// // //       }
// // //     }
// // //   }
// // //   return false;
// // // };
// // // console.log(findPermutation("oidbcaf", "bca"));

// // // const arr = [-2, -1, 0, 1, 2];

// // // const squareSort = (arr) => {
// // // let left = 0;
// // // let len = arr.length;
// // // let right = len - 1;
// // // let resultArray = Array(len).fill(0);
// // // let lastIndex = len - 1;

// // // while (left < right) {
// // //   let leftIndexSquare = arr[left] * arr[left];
// // //   let rightIndexSquare = arr[right] * arr[right];
// // //   if (leftIndexSquare > rightIndexSquare) {
// // //     resultArray[lastIndex] = leftIndexSquare;
// // //     left++;
// // //   } else {
// // //     resultArray[lastIndex] = rightIndexSquare;
// // //     right--;
// // //   }
// // //   lastIndex--;
// // // }
// // // return resultArray;
// // // };

// // // console.log(squareSort([-2, -1, 0, 1, 2]));
// // // Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// // // Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// // // Input: [1, 2, 3, 4, 6], target=6
// // // Output: [1, 3]
// // // Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// // // const targetSum = (arr,target) => {
// // //     let start = 0;
// // //     let end = arr.length - 1;
// // //     while(start < end) {
// // //         const currentSum = arr[start] + arr[end];
// // //         if (currentSum === target) {
// // //             return [start, end]
// // //         }
// // //         if(target > currentSum){
// // //             start += 1;
// // //         }else{
// // //             end -= 1;
// // //         }
// // //     }
// // //     return[start, end]
// // // }

// // // console.log(targetSum([1, 2, 3, 4, 6], 6));

// // //====================================================================================================

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };

// // // console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));
// // // Given a list of intervals,
// // // merge all the overlapping intervals to produce
// // // a list that has only mutually exclusive intervals.

// // // Intervals: [[1,4], [2,5], [7,9]]
// // // Output: [[1,5], [7,9]]
// // // Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// // // one [1,5].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }

// // //   getInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const merge = (intervals) => {
// // //   if (intervals.length < 2) {
// // //     return intervals;
// // //   }
// // //   intervals.sort((a, b) => a.start - b.start);
// // //   const mergedIntervals = [];
// // //   let start = intervals[0].start,
// // //     end = intervals[0].end;
// // //   for (i = 1; i < intervals.length; i++) {
// // //     const interval = intervals[i];
// // //     if (interval.start <= end) {
// // //       end = Math.max(interval.end, end);
// // //     } else {
// // //       mergedIntervals.push(new Interval(start, end));
// // //       start = interval.start;
// // //       end = interval.end;
// // //     }
// // //   }
// // //   mergedIntervals.push(new Interval(start, end));
// // //   return mergedIntervals;
// // // };

// // // let result = merge([
// // //   new Interval(1, 4),
// // //   new Interval(2, 5),
// // //   new Interval(7, 9),
// // // ]);
// // // console.log("Merged intervals :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Given a list of non-overlapping intervals sorted by their start time,
// // // insert a given interval at the correct position and
// // // merge all necessary intervals to produce a list
// // // that has only mutually exclusive intervals.

// // // Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// // // Output: [[1,3], [4,7], [8,12]]
// // // Explanation: After insertion, since [4,6] overlaps with [5,7],
// // // we merged them into one [4,7].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // //   printInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const insert = (intervals, newInterval) => {
// // //   let merged = [];
// // //   i = 0;
// // //   while (i < intervals.length && intervals[i].end < newInterval.start) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   while (i < intervals.length && intervals[i].start <= newInterval.end) {
// // //     newInterval.start = Math.min(intervals[i].start, newInterval.start);
// // //     newInterval.end = Math.max(intervals[i].end, newInterval.end);
// // //     i += 1;
// // //   }
// // //   merged.push(newInterval);

// // //   while (i < intervals.length) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   return merged;
// // // };
// // // let result = insert(
// // //   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
// // //   new Interval(4, 6)
// // // );

// // // console.log("new output :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given two lists of intervals,
// // // find the intersection of these two lists.
// // // Each list consists of disjoint intervals sorted on their start time.

// // // Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// // // Output: [2, 3], [5, 6], [7, 7]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// // // Output: [5, 7], [9, 10]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // // }
// // // const merge = (intervalsA, intervalsB) => {
// // //   let result = [],
// // //     i = 0,
// // //     j = 0;
// // //   while (i < intervalsA.length && j < intervalsB.length) {
// // //     aOverLapB =
// // //       intervalsA[i].start >= intervalsB[j].start &&
// // //       intervalsA[i].start <= intervalsB[j].end;
// // //     bOverLapA =
// // //       intervalsB[j].start >= intervalsA[i].start &&
// // //       intervalsB[j].start <= intervalsA[i].end;
// // //     if (aOverLapB || bOverLapA) {
// // //       result.push(
// // //         new Interval(
// // //           Math.max(intervalsA[i].start, intervalsB[j].start),
// // //           Math.min(intervalsA[i].end, intervalsB[j].end)
// // //         )
// // //       );
// // //     }
// // //     if (intervalsA[i].end < intervalsB[j].end) {
// // //       i += 1;
// // //     } else {
// // //       j += 1;
// // //     }
// // //   }
// // //   return result;
// // // };
// // // let result = merge(
// // //   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
// // //   [new Interval(2, 3), new Interval(5, 7)]
// // // );

// // // console.log(result);
// // // Given a binary tree, populate an array to represent its level-by-level traversal.
// // // You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     const levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //   }
// // //   return result;
// // // };

// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level order traversal: ${traverse(root)}`);
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// // // You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   const result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     let levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.unshift(currentLevel);
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Reverse level order traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its zigzag level order traversal.
// // // You should populate the values of all nodes of the first level from left to right,
// // // then right to left for the next level and keep alternating in the same manner for the following levels.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   leftToRight = true;
// // //   while (queue.length > 0) {
// // //     levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       if (leftToRight) {
// // //         currentLevel.push(currentNode.val);
// // //       } else {
// // //         currentLevel.unshift(currentNode.val);
// // //       }
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //     leftToRight = !leftToRight;
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // root.right.left.left = new TreeNode(20);
// // // root.right.left.right = new TreeNode(17);
// // // console.log(`Zigzag traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, 
// // // populate an array to represent the averages of all of its levels.

// // // class TreeNode {
// // //     constructor(val) {
// // //         this.val = val;
// // //         this.left = null;
// // //         this.right = null;
// // //     }
// // // }
// // // const findLevelAverage = (root) => {
// // //     result = [];
// // //     if (root === null) {
// // //         return result;
// // //     }
// // //     const queue = [];
// // //     queue.push(root);
// // //     while (queue.length > 0) {
// // //         let levelSize = queue.length,
// // //         levelSum = 0.0;
// // //         for (i = 0; i < levelSize; i++) {
// // //             currentNode = queue.shift();
// // //             levelSum += currentNode.val;
// // //             if (currentNode.left !== null) {
// // //                 queue.push(currentNode.left)
// // //             }
// // //             if (currentNode.right != null) {
// // //                 queue.push(currentNode.right);
// // //             }
// // //         }
// // //         result.push(levelSum / levelSize)
// // //     }
// // //     return result;
// // // }


// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.left.right = new TreeNode(2);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level averages are: ${findLevelAverage(root)}`);
// // // Given the head of a Singly LinkedList, reverse the LinkedList.
// // // Write a function to return the new head of the reversed LinkedList.
// // // class Node {
// // //     constructor(value, next = null){
// // //         this.value = value;
// // //         this.next = next;
// // //     }
// // //     printList() {
// // //         let temp = this;
// // //         while(temp !== null){
// // //             console.log(`${temp.value} `);
// // //             temp = temp.next;
// // //         }
// // //         console.log()
// // //     }
// // // }

// // // const reverse = (head) => {
// // //     let current = head;
// // //     previous = null;
// // //     while(current !== null){
// // //         next = current.next;
// // //         current.next = previous;
// // //         previous = current;
// // //         current = next
// // //     }
// // //     return previous;
// // // }

// // // const head = new Node(2);
// // // head.next = new Node(4);
// // // head.next.next = new Node(6);
// // // head.next.next.next = new Node(8);
// // // head.next.next.next.next = new Node(10);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverse(head);
// // // console.log("new order : ")
// // // result.printList();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given the head of a LinkedList and two positions ‘p’ and ‘q’,
// // // reverse the LinkedList from position ‘p’ to ‘q’.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseSubList = (head, p, q) => {
// // //   if (p === q) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   let i = 0;
// // //   while (current !== null && i < p - 1) {
// // //     previous = current;
// // //     current = current.next;
// // //     i += 1;
// // //   }
// // //   const lastNodeFirstPart = previous;
// // //   const lastNodeSubList = current;
// // //   let next = null;
// // //   i = 0;
// // //   while (current !== null && i < q - p + 1) {
// // //     next = current.next;
// // //     current.next = previous;
// // //     previous = current;
// // //     current = next;
// // //     i += 1;
// // //   }
// // //   if (lastNodeFirstPart !== null) {
// // //     lastNodeFirstPart.next = previous;
// // //   } else {
// // //     head = previous;
// // //   }
// // //   lastNodeSubList.next = current;
// // //   return head;
// // // };

// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseSubList(head, 3, 5);
// // // console.log("new order : ");
// // // result.printList();

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));
// // // // Explanation: The longest substring with no more than '2' distinct characters is "araa".

// // // const subString = (str, k) => {
// // //   let windowStart = 0,
// // //   maxLength = 0,
// // //   charFrequency = {};
// // // // in the following loop we'll try to extend the range [window_start, window_end]
// // // for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //   const rightChar = str[windowEnd];
// // //   if (!(rightChar in charFrequency)) {
// // //     charFrequency[rightChar] = 0;
// // //   }
// // //   charFrequency[rightChar] += 1;
// // //   // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// // //   while (Object.keys(charFrequency).length > k) {
// // //     const leftChar = str[windowStart];
// // //     charFrequency[leftChar] -= 1;
// // //     if (charFrequency[leftChar] === 0) {
// // //       delete charFrequency[leftChar];
// // //     }
// // //     windowStart += 1; // shrink the window
// // //   }
// // //   // remember the maximum length so far
// // //   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // // }

// // // return maxLength;
// // // }

// // // console.log(subString("araaci", 2));
// // // =============================================================================================================================

// // // // Input: Fruit=['A', 'B', 'C', 'A', 'C']
// // // // Output: 3
// // // // Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// // // const fruits_into_baskets = (fruits) => {
// // //   let windowStart = 0,
// // //     maxLength = 0,
// // //     fruitFrequency = {};

// // //   // try to extend the range [windowStart, windowEnd]
// // //   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
// // //     const rightFruit = fruits[windowEnd];
// // //     if (!(rightFruit in fruitFrequency)) {
// // //       fruitFrequency[rightFruit] = 0;
// // //     }
// // //     fruitFrequency[rightFruit] += 1;

// // //     // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// // //     while (Object.keys(fruitFrequency).length > 2) {
// // //       const leftFruit = fruits[windowStart];
// // //       fruitFrequency[leftFruit] -= 1;
// // //       if (fruitFrequency[leftFruit] === 0) {
// // //         delete fruitFrequency[leftFruit];
// // //       }
// // //       windowStart += 1; // shrink the window
// // //     }
// // //     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //   }

// // //   return maxLength;
// // // }

// // // console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };

// // // console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));
// // // Given a list of intervals,
// // // merge all the overlapping intervals to produce
// // // a list that has only mutually exclusive intervals.

// // // Intervals: [[1,4], [2,5], [7,9]]
// // // Output: [[1,5], [7,9]]
// // // Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// // // one [1,5].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }

// // //   getInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const merge = (intervals) => {
// // //   if (intervals.length < 2) {
// // //     return intervals;
// // //   }
// // //   intervals.sort((a, b) => a.start - b.start);
// // //   const mergedIntervals = [];
// // //   let start = intervals[0].start,
// // //     end = intervals[0].end;
// // //   for (i = 1; i < intervals.length; i++) {
// // //     const interval = intervals[i];
// // //     if (interval.start <= end) {
// // //       end = Math.max(interval.end, end);
// // //     } else {
// // //       mergedIntervals.push(new Interval(start, end));
// // //       start = interval.start;
// // //       end = interval.end;
// // //     }
// // //   }
// // //   mergedIntervals.push(new Interval(start, end));
// // //   return mergedIntervals;
// // // };

// // // let result = merge([
// // //   new Interval(1, 4),
// // //   new Interval(2, 5),
// // //   new Interval(7, 9),
// // // ]);
// // // console.log("Merged intervals :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Given a list of non-overlapping intervals sorted by their start time,
// // // insert a given interval at the correct position and
// // // merge all necessary intervals to produce a list
// // // that has only mutually exclusive intervals.

// // // Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// // // Output: [[1,3], [4,7], [8,12]]
// // // Explanation: After insertion, since [4,6] overlaps with [5,7],
// // // we merged them into one [4,7].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // //   printInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const insert = (intervals, newInterval) => {
// // //   let merged = [];
// // //   i = 0;
// // //   while (i < intervals.length && intervals[i].end < newInterval.start) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   while (i < intervals.length && intervals[i].start <= newInterval.end) {
// // //     newInterval.start = Math.min(intervals[i].start, newInterval.start);
// // //     newInterval.end = Math.max(intervals[i].end, newInterval.end);
// // //     i += 1;
// // //   }
// // //   merged.push(newInterval);

// // //   while (i < intervals.length) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   return merged;
// // // };
// // // let result = insert(
// // //   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
// // //   new Interval(4, 6)
// // // );

// // // console.log("new output :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given two lists of intervals,
// // // find the intersection of these two lists.
// // // Each list consists of disjoint intervals sorted on their start time.

// // // Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// // // Output: [2, 3], [5, 6], [7, 7]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// // // Output: [5, 7], [9, 10]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // // }
// // // const merge = (intervalsA, intervalsB) => {
// // //   let result = [],
// // //     i = 0,
// // //     j = 0;
// // //   while (i < intervalsA.length && j < intervalsB.length) {
// // //     aOverLapB =
// // //       intervalsA[i].start >= intervalsB[j].start &&
// // //       intervalsA[i].start <= intervalsB[j].end;
// // //     bOverLapA =
// // //       intervalsB[j].start >= intervalsA[i].start &&
// // //       intervalsB[j].start <= intervalsA[i].end;
// // //     if (aOverLapB || bOverLapA) {
// // //       result.push(
// // //         new Interval(
// // //           Math.max(intervalsA[i].start, intervalsB[j].start),
// // //           Math.min(intervalsA[i].end, intervalsB[j].end)
// // //         )
// // //       );
// // //     }
// // //     if (intervalsA[i].end < intervalsB[j].end) {
// // //       i += 1;
// // //     } else {
// // //       j += 1;
// // //     }
// // //   }
// // //   return result;
// // // };
// // // let result = merge(
// // //   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
// // //   [new Interval(2, 3), new Interval(5, 7)]
// // // );

// // // console.log(result);
// // // Given a binary tree, populate an array to represent its level-by-level traversal.
// // // You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     const levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //   }
// // //   return result;
// // // };

// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level order traversal: ${traverse(root)}`);
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// // // You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   const result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     let levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.unshift(currentLevel);
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Reverse level order traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its zigzag level order traversal.
// // // You should populate the values of all nodes of the first level from left to right,
// // // then right to left for the next level and keep alternating in the same manner for the following levels.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   leftToRight = true;
// // //   while (queue.length > 0) {
// // //     levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       if (leftToRight) {
// // //         currentLevel.push(currentNode.val);
// // //       } else {
// // //         currentLevel.unshift(currentNode.val);
// // //       }
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //     leftToRight = !leftToRight;
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // root.right.left.left = new TreeNode(20);
// // // root.right.left.right = new TreeNode(17);
// // // console.log(`Zigzag traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, 
// // // populate an array to represent the averages of all of its levels.

// // // class TreeNode {
// // //     constructor(val) {
// // //         this.val = val;
// // //         this.left = null;
// // //         this.right = null;
// // //     }
// // // }
// // // const findLevelAverage = (root) => {
// // //     result = [];
// // //     if (root === null) {
// // //         return result;
// // //     }
// // //     const queue = [];
// // //     queue.push(root);
// // //     while (queue.length > 0) {
// // //         let levelSize = queue.length,
// // //         levelSum = 0.0;
// // //         for (i = 0; i < levelSize; i++) {
// // //             currentNode = queue.shift();
// // //             levelSum += currentNode.val;
// // //             if (currentNode.left !== null) {
// // //                 queue.push(currentNode.left)
// // //             }
// // //             if (currentNode.right != null) {
// // //                 queue.push(currentNode.right);
// // //             }
// // //         }
// // //         result.push(levelSum / levelSize)
// // //     }
// // //     return result;
// // // }


// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.left.right = new TreeNode(2);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level averages are: ${findLevelAverage(root)}`);
// // // Given the head of a Singly LinkedList, reverse the LinkedList.
// // // Write a function to return the new head of the reversed LinkedList.
// // // class Node {
// // //     constructor(value, next = null){
// // //         this.value = value;
// // //         this.next = next;
// // //     }
// // //     printList() {
// // //         let temp = this;
// // //         while(temp !== null){
// // //             console.log(`${temp.value} `);
// // //             temp = temp.next;
// // //         }
// // //         console.log()
// // //     }
// // // }

// // // const reverse = (head) => {
// // //     let current = head;
// // //     previous = null;
// // //     while(current !== null){
// // //         next = current.next;
// // //         current.next = previous;
// // //         previous = current;
// // //         current = next
// // //     }
// // //     return previous;
// // // }

// // // const head = new Node(2);
// // // head.next = new Node(4);
// // // head.next.next = new Node(6);
// // // head.next.next.next = new Node(8);
// // // head.next.next.next.next = new Node(10);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverse(head);
// // // console.log("new order : ")
// // // result.printList();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given the head of a LinkedList and two positions ‘p’ and ‘q’,
// // // reverse the LinkedList from position ‘p’ to ‘q’.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseSubList = (head, p, q) => {
// // //   if (p === q) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   let i = 0;
// // //   while (current !== null && i < p - 1) {
// // //     previous = current;
// // //     current = current.next;
// // //     i += 1;
// // //   }
// // //   const lastNodeFirstPart = previous;
// // //   const lastNodeSubList = current;
// // //   let next = null;
// // //   i = 0;
// // //   while (current !== null && i < q - p + 1) {
// // //     next = current.next;
// // //     current.next = previous;
// // //     previous = current;
// // //     current = next;
// // //     i += 1;
// // //   }
// // //   if (lastNodeFirstPart !== null) {
// // //     lastNodeFirstPart.next = previous;
// // //   } else {
// // //     head = previous;
// // //   }
// // //   lastNodeSubList.next = current;
// // //   return head;
// // // };

// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseSubList(head, 3, 5);
// // // console.log("new order : ");
// // // result.printList();

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// // // If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseElements = (head, k) => {
// // //   if (k <= 1 || head === null) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   while (true) {
// // //     const lastNodePrevPart = previous;
// // //     const lastNodeSubList = current;
// // //     let next = null;
// // //     let i = 0;
// // //     while (current !== null && i < k) {
// // //       next = current.next;
// // //       current.next = previous;
// // //       previous = current;
// // //       current = next;
// // //       i += 1;
// // //     }
// // //     if (lastNodePrevPart !== null) {
// // //       lastNodePrevPart.next = previous;
// // //     } else {
// // //       head = previous;
// // //     }
// // //     lastNodeSubList.next = current;
// // //     if (current === null) {
// // //       break;
// // //     }
// // //     previous = lastNodeSubList;
// // //   }
// // //   return head;
// // // };
// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);
// // // head.next.next.next.next.next.next = new Node(7);
// // // head.next.next.next.next.next.next.next = new Node(8);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseElements(head, 3);
// // // console.log("new order : ");
// // // result.printList();
// // // // Given an array of positive numbers and a positive number ‘k,’
// // // // find the maximum sum of any contiguous subarray of size ‘k’.

// // // // Input: [2, 1, 5, 1, 3, 2], k=3
// // // // Output: 9
// // // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // // // sol-1-

// // // const maxArray = (k, arr) => {
// // //   let maxSub = 0;
// // //   let maxSum = 0;
// // //   for(let i = 0; i < arr.length - k + 1; i++){
// // //     maxSum = 0;
// // //     for(let j = i; j < i + k; j++) {
// // //       maxSum += arr[j];
// // //     }
// // //      maxSub = Math.max(maxSub,maxSum)
// // //   }
// // //   return maxSub;
// // // }

// // // console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));

// // // =============================================================================================================================

// // // // - sol 2---using sliding window.

// // // // Input: [2, 1, 5, 1, 3, 2], k=3
// // // // Output: 9

// // // const maxSum = (k, arr) => {
// // //   let start = 0
// // //   let  windowSum = 0
// // //   let  maxSum = 0

// // //   for( let i = 0; i < arr.length; i++){
// // //     windowSum += arr[i];

// // //     if(i >= k - 1){
// // //       maxSum = Math.max(maxSum, windowSum);
// // //       windowSum -= arr[start];
// // //       start += 1;
// // //     }
// // //   }
// // //   return maxSum;
// // // }
// // // =============================================================================================================================

// // // // Smallest Subarray With a Greater Sum

// // // // Input: [2, 1, 5, 2, 3, 2], S=7
// // // // Output: 2
// // // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // // // Input: [2, 1, 5, 2, 8], S=7
// // // // Output: 1
// // // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// // // const smallSubArray = (s, arr) => {
// // //   let minLength = Infinity;
// // //   let windowSum = 0;
// // //   let windowStart = 0;

// // //   for(let i = 0; i < arr.length; i++) {
// // //     windowSum += arr[i];

// // //     while(windowSum >= s) {
// // //       minLength = Math.min(minLength, i - windowStart + 1);
// // //       windowSum -= arr[windowStart];
// // //       windowStart += 1
// // //     }
// // //   }

// // //   if(minLength === Infinity) {
// // //     return 0;
// // //   }
// // //   return minLength;
// // // }

// // // console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));
// // // =============================================================================================================================

// // // // Given a string, find the length of the longest substring in it with no more than K distinct characters.
// // // // Input: String="araaci", K=2
// // // // Output: 4
// // // // Explanation: The longest substring with no more than '2' distinct characters is "araa".

// // // const subString = (str, k) => {
// // //   let windowStart = 0,
// // //   maxLength = 0,
// // //   charFrequency = {};
// // // // in the following loop we'll try to extend the range [window_start, window_end]
// // // for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //   const rightChar = str[windowEnd];
// // //   if (!(rightChar in charFrequency)) {
// // //     charFrequency[rightChar] = 0;
// // //   }
// // //   charFrequency[rightChar] += 1;
// // //   // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// // //   while (Object.keys(charFrequency).length > k) {
// // //     const leftChar = str[windowStart];
// // //     charFrequency[leftChar] -= 1;
// // //     if (charFrequency[leftChar] === 0) {
// // //       delete charFrequency[leftChar];
// // //     }
// // //     windowStart += 1; // shrink the window
// // //   }
// // //   // remember the maximum length so far
// // //   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // // }

// // // return maxLength;
// // // }

// // // console.log(subString("araaci", 2));
// // // =============================================================================================================================

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given the head of a LinkedList and two positions ‘p’ and ‘q’,
// // // reverse the LinkedList from position ‘p’ to ‘q’.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseSubList = (head, p, q) => {
// // //   if (p === q) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   let i = 0;
// // //   while (current !== null && i < p - 1) {
// // //     previous = current;
// // //     current = current.next;
// // //     i += 1;
// // //   }
// // //   const lastNodeFirstPart = previous;
// // //   const lastNodeSubList = current;
// // //   let next = null;
// // //   i = 0;
// // //   while (current !== null && i < q - p + 1) {
// // //     next = current.next;
// // //     current.next = previous;
// // //     previous = current;
// // //     current = next;
// // //     i += 1;
// // //   }
// // //   if (lastNodeFirstPart !== null) {
// // //     lastNodeFirstPart.next = previous;
// // //   } else {
// // //     head = previous;
// // //   }
// // //   lastNodeSubList.next = current;
// // //   return head;
// // // };

// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseSubList(head, 3, 5);
// // // console.log("new order : ");
// // // result.printList();

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// // // If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseElements = (head, k) => {
// // //   if (k <= 1 || head === null) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   while (true) {
// // //     const lastNodePrevPart = previous;
// // //     const lastNodeSubList = current;
// // //     let next = null;
// // //     let i = 0;
// // //     while (current !== null && i < k) {
// // //       next = current.next;
// // //       current.next = previous;
// // //       previous = current;
// // //       current = next;
// // //       i += 1;
// // //     }
// // //     if (lastNodePrevPart !== null) {
// // //       lastNodePrevPart.next = previous;
// // //     } else {
// // //       head = previous;
// // //     }
// // //     lastNodeSubList.next = current;
// // //     if (current === null) {
// // //       break;
// // //     }
// // //     previous = lastNodeSubList;
// // //   }
// // //   return head;
// // // };
// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);
// // // head.next.next.next.next.next.next = new Node(7);
// // // head.next.next.next.next.next.next.next = new Node(8);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseElements(head, 3);
// // // console.log("new order : ");
// // // result.printList();

// // // // Given an array of positive numbers and a positive number ‘k,’
// // // // find the maximum sum of any contiguous subarray of size ‘k’.

// // // // Input: [2, 1, 5, 1, 3, 2], k=3
// // // // Output: 9
// // // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // // // sol-1-

// // // const maxArray = (k, arr) => {
// // //   let maxSub = 0;
// // //   let maxSum = 0;
// // //   for(let i = 0; i < arr.length - k + 1; i++){
// // //     maxSum = 0;
// // //     for(let j = i; j < i + k; j++) {
// // //       maxSum += arr[j];
// // //     }
// // //      maxSub = Math.max(maxSub,maxSum)
// // //   }
// // //   return maxSub;
// // // }

// // // console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));

// // // =============================================================================================================================

// // // // - sol 2---using sliding window.

// // // // Input: [2, 1, 5, 1, 3, 2], k=3
// // // // Output: 9

// // // const maxSum = (k, arr) => {
// // //   let start = 0
// // //   let  windowSum = 0
// // //   let  maxSum = 0

// // //   for( let i = 0; i < arr.length; i++){
// // //     windowSum += arr[i];

// // //     if(i >= k - 1){
// // //       maxSum = Math.max(maxSum, windowSum);
// // //       windowSum -= arr[start];
// // //       start += 1;
// // //     }
// // //   }
// // //   return maxSum;
// // // }
// // // =============================================================================================================================

// // // // Smallest Subarray With a Greater Sum

// // // // Input: [2, 1, 5, 2, 3, 2], S=7
// // // // Output: 2
// // // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // // // Input: [2, 1, 5, 2, 8], S=7
// // // // Output: 1
// // // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// // // const smallSubArray = (s, arr) => {
// // //   let minLength = Infinity;
// // //   let windowSum = 0;
// // //   let windowStart = 0;

// // //   for(let i = 0; i < arr.length; i++) {
// // //     windowSum += arr[i];

// // //     while(windowSum >= s) {
// // //       minLength = Math.min(minLength, i - windowStart + 1);
// // //       windowSum -= arr[windowStart];
// // //       windowStart += 1
// // //     }
// // //   }

// // //   if(minLength === Infinity) {
// // //     return 0;
// // //   }
// // //   return minLength;
// // // }

// // // console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));
// // // =============================================================================================================================

// // // // Given a string, find the length of the longest substring in it with no more than K distinct characters.
// // // // Input: String="araaci", K=2
// // // // Output: 4
// // // // Explanation: The longest substring with no more than '2' distinct characters is "araa".

// // // const subString = (str, k) => {
// // //   let windowStart = 0,
// // //   maxLength = 0,
// // //   charFrequency = {};
// // // // in the following loop we'll try to extend the range [window_start, window_end]
// // // for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //   const rightChar = str[windowEnd];
// // //   if (!(rightChar in charFrequency)) {
// // //     charFrequency[rightChar] = 0;
// // //   }
// // //   charFrequency[rightChar] += 1;
// // //   // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// // //   while (Object.keys(charFrequency).length > k) {
// // //     const leftChar = str[windowStart];
// // //     charFrequency[leftChar] -= 1;
// // //     if (charFrequency[leftChar] === 0) {
// // //       delete charFrequency[leftChar];
// // //     }
// // //     windowStart += 1; // shrink the window
// // //   }
// // //   // remember the maximum length so far
// // //   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // // }

// // // return maxLength;
// // // }

// // // console.log(subString("araaci", 2));
// // // =============================================================================================================================

// // // // Input: Fruit=['A', 'B', 'C', 'A', 'C']
// // // // Output: 3
// // // // Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// // // const fruits_into_baskets = (fruits) => {
// // //   let windowStart = 0,
// // //     maxLength = 0,
// // //     fruitFrequency = {};

// // //   // try to extend the range [windowStart, windowEnd]
// // //   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
// // //     const rightFruit = fruits[windowEnd];
// // //     if (!(rightFruit in fruitFrequency)) {
// // //       fruitFrequency[rightFruit] = 0;
// // //     }
// // //     fruitFrequency[rightFruit] += 1;

// // //     // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// // //     while (Object.keys(fruitFrequency).length > 2) {
// // //       const leftFruit = fruits[windowStart];
// // //       fruitFrequency[leftFruit] -= 1;
// // //       if (fruitFrequency[leftFruit] === 0) {
// // //         delete fruitFrequency[leftFruit];
// // //       }
// // //       windowStart += 1; // shrink the window
// // //     }
// // //     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //   }

// // //   return maxLength;
// // // }

// // // console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));

// // // ============================================================================================================================
// // // // Given a string, find the length of the longest substring, which has all distinct characters.

// // // // Input: String="aabccbb"
// // // // Output: 3
// // // // Explanation: The longest substring with distinct characters is "abc".

// // // const non_repeat_substring = (str) => {
// // //   let windowStart = 0,
// // //     maxLength = 0,
// // //     charIndexMap = {};
// // //   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charIndexMap) {
// // //       windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
// // //     }
// // //     charIndexMap[rightChar] = windowEnd;
// // //     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //   }
// // //   return maxLength;
// // // }

// // // console.log(non_repeat_substring("aabccbb"))

// // // ============================================================================================================================

// // // // Longest Subarray with Ones after Replacement.
// // // // Given an array containing 0s and 1s,
// // // // if you are allowed to replace no more than ‘k’ 0s with 1s,
// // // // find the length of the longest contiguous subarray having all 1s.
// // // // Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// // // // Output: 6
// // // // Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// // // const lengthOfLongestSubString = (arr, k) => {
// // //     let windowStart = 0;
// // //     let maxLength = 0;
// // //     let maxOneCount = 0;

// // //     for (windowEnd = 0; windowEnd < arr.length; windowEnd++){
// // //         if (arr[windowEnd] === 1) {
// // //             maxOneCount += 1;
// // //         }
// // //         if ((windowEnd - windowStart + 1 - maxOneCount) > k) {
// // //             if(arr[windowStart] === 1) {
// // //                 maxOneCount -= 1;
// // //             }
// // //             windowStart += 1;
// // //         }
// // //         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //     }
// // //     return maxLength;
// // // }

// // // console.log(lengthOfLongestSubString([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

// // // ============================================================================================================================
// // // Given a string and a pattern, find out if the string contains any permutation of the pattern.
// // // Input: String="oidbcaf", Pattern="abc"
// // // Output: true
// // // Explanation: The string contains "bca" which is a permutation of the given pattern.

// // // const findPermutation = (str, pattern) => {
// // //   let windowStart = 0;
// // //   let matched = 0;
// // //   let charFrequency = {};

// // //   for (let i = 0; i < pattern.length; i++) {
// // //     const chr = pattern[i];
// // //     if (!(chr in charFrequency)) {
// // //       charFrequency[chr] = 0;
// // //     }
// // //     charFrequency[chr] += 1;
// // //   }
// // //   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charFrequency) {
// // //       charFrequency[rightChar] -= 1;
// // //       if (charFrequency[rightChar] === 0) {
// // //         matched += 1;
// // //       }
// // //     }
// // //     if (matched === Object.keys(charFrequency).length) {
// // //       return true;
// // //     }
// // //     if (windowEnd >= pattern.length - 1) {
// // //       let leftchar = str[windowStart];
// // //       windowStart += 1;
// // //       if (leftchar in charFrequency) {
// // //         if (charFrequency[leftchar] === 0) {
// // //           matched -= 1;
// // //         }
// // //         charFrequency[leftchar] += 1;
// // //       }
// // //     }
// // //   }
// // //   return false;
// // // };
// // // console.log(findPermutation("oidbcaf", "bca"));

// // // const arr = [-2, -1, 0, 1, 2];

// // // const squareSort = (arr) => {
// // // let left = 0;
// // // let len = arr.length;
// // // let right = len - 1;
// // // let resultArray = Array(len).fill(0);
// // // let lastIndex = len - 1;

// // // while (left < right) {
// // //   let leftIndexSquare = arr[left] * arr[left];
// // //   let rightIndexSquare = arr[right] * arr[right];
// // //   if (leftIndexSquare > rightIndexSquare) {
// // //     resultArray[lastIndex] = leftIndexSquare;
// // //     left++;
// // //   } else {
// // //     resultArray[lastIndex] = rightIndexSquare;
// // //     right--;
// // //   }
// // //   lastIndex--;
// // // }
// // // return resultArray;
// // // };

// // // console.log(squareSort([-2, -1, 0, 1, 2]));
// // // Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// // // Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// // // Input: [1, 2, 3, 4, 6], target=6
// // // Output: [1, 3]
// // // Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// // // const targetSum = (arr,target) => {
// // //     let start = 0;
// // //     let end = arr.length - 1;
// // //     while(start < end) {
// // //         const currentSum = arr[start] + arr[end];
// // //         if (currentSum === target) {
// // //             return [start, end]
// // //         }
// // //         if(target > currentSum){
// // //             start += 1;
// // //         }else{
// // //             end -= 1;
// // //         }
// // //     }
// // //     return[start, end]
// // // }

// // // console.log(targetSum([1, 2, 3, 4, 6], 6));

// // //====================================================================================================

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };

// // // console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));
// // // Given a list of intervals,
// // // merge all the overlapping intervals to produce
// // // a list that has only mutually exclusive intervals.

// // // Intervals: [[1,4], [2,5], [7,9]]
// // // Output: [[1,5], [7,9]]
// // // Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// // // one [1,5].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }

// // //   getInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const merge = (intervals) => {
// // //   if (intervals.length < 2) {
// // //     return intervals;
// // //   }
// // //   intervals.sort((a, b) => a.start - b.start);
// // //   const mergedIntervals = [];
// // //   let start = intervals[0].start,
// // //     end = intervals[0].end;
// // //   for (i = 1; i < intervals.length; i++) {
// // //     const interval = intervals[i];
// // //     if (interval.start <= end) {
// // //       end = Math.max(interval.end, end);
// // //     } else {
// // //       mergedIntervals.push(new Interval(start, end));
// // //       start = interval.start;
// // //       end = interval.end;
// // //     }
// // //   }
// // //   mergedIntervals.push(new Interval(start, end));
// // //   return mergedIntervals;
// // // };

// // // let result = merge([
// // //   new Interval(1, 4),
// // //   new Interval(2, 5),
// // //   new Interval(7, 9),
// // // ]);
// // // console.log("Merged intervals :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Given a list of non-overlapping intervals sorted by their start time,
// // // insert a given interval at the correct position and
// // // merge all necessary intervals to produce a list
// // // that has only mutually exclusive intervals.

// // // Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// // // Output: [[1,3], [4,7], [8,12]]
// // // Explanation: After insertion, since [4,6] overlaps with [5,7],
// // // we merged them into one [4,7].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // //   printInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const insert = (intervals, newInterval) => {
// // //   let merged = [];
// // //   i = 0;
// // //   while (i < intervals.length && intervals[i].end < newInterval.start) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   while (i < intervals.length && intervals[i].start <= newInterval.end) {
// // //     newInterval.start = Math.min(intervals[i].start, newInterval.start);
// // //     newInterval.end = Math.max(intervals[i].end, newInterval.end);
// // //     i += 1;
// // //   }
// // //   merged.push(newInterval);

// // //   while (i < intervals.length) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   return merged;
// // // };
// // // let result = insert(
// // //   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
// // //   new Interval(4, 6)
// // // );

// // // console.log("new output :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given two lists of intervals,
// // // find the intersection of these two lists.
// // // Each list consists of disjoint intervals sorted on their start time.

// // // Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// // // Output: [2, 3], [5, 6], [7, 7]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// // // Output: [5, 7], [9, 10]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // // }
// // // const merge = (intervalsA, intervalsB) => {
// // //   let result = [],
// // //     i = 0,
// // //     j = 0;
// // //   while (i < intervalsA.length && j < intervalsB.length) {
// // //     aOverLapB =
// // //       intervalsA[i].start >= intervalsB[j].start &&
// // //       intervalsA[i].start <= intervalsB[j].end;
// // //     bOverLapA =
// // //       intervalsB[j].start >= intervalsA[i].start &&
// // //       intervalsB[j].start <= intervalsA[i].end;
// // //     if (aOverLapB || bOverLapA) {
// // //       result.push(
// // //         new Interval(
// // //           Math.max(intervalsA[i].start, intervalsB[j].start),
// // //           Math.min(intervalsA[i].end, intervalsB[j].end)
// // //         )
// // //       );
// // //     }
// // //     if (intervalsA[i].end < intervalsB[j].end) {
// // //       i += 1;
// // //     } else {
// // //       j += 1;
// // //     }
// // //   }
// // //   return result;
// // // };
// // // let result = merge(
// // //   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
// // //   [new Interval(2, 3), new Interval(5, 7)]
// // // );

// // // console.log(result);
// // // Given a binary tree, populate an array to represent its level-by-level traversal.
// // // You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     const levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //   }
// // //   return result;
// // // };

// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level order traversal: ${traverse(root)}`);
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// // // You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   const result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     let levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.unshift(currentLevel);
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Reverse level order traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its zigzag level order traversal.
// // // You should populate the values of all nodes of the first level from left to right,
// // // then right to left for the next level and keep alternating in the same manner for the following levels.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   leftToRight = true;
// // //   while (queue.length > 0) {
// // //     levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       if (leftToRight) {
// // //         currentLevel.push(currentNode.val);
// // //       } else {
// // //         currentLevel.unshift(currentNode.val);
// // //       }
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //     leftToRight = !leftToRight;
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // root.right.left.left = new TreeNode(20);
// // // root.right.left.right = new TreeNode(17);
// // // console.log(`Zigzag traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, 
// // // populate an array to represent the averages of all of its levels.

// // // class TreeNode {
// // //     constructor(val) {
// // //         this.val = val;
// // //         this.left = null;
// // //         this.right = null;
// // //     }
// // // }
// // // const findLevelAverage = (root) => {
// // //     result = [];
// // //     if (root === null) {
// // //         return result;
// // //     }
// // //     const queue = [];
// // //     queue.push(root);
// // //     while (queue.length > 0) {
// // //         let levelSize = queue.length,
// // //         levelSum = 0.0;
// // //         for (i = 0; i < levelSize; i++) {
// // //             currentNode = queue.shift();
// // //             levelSum += currentNode.val;
// // //             if (currentNode.left !== null) {
// // //                 queue.push(currentNode.left)
// // //             }
// // //             if (currentNode.right != null) {
// // //                 queue.push(currentNode.right);
// // //             }
// // //         }
// // //         result.push(levelSum / levelSize)
// // //     }
// // //     return result;
// // // }


// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.left.right = new TreeNode(2);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level averages are: ${findLevelAverage(root)}`);
// // // Given the head of a Singly LinkedList, reverse the LinkedList.
// // // Write a function to return the new head of the reversed LinkedList.
// // // class Node {
// // //     constructor(value, next = null){
// // //         this.value = value;
// // //         this.next = next;
// // //     }
// // //     printList() {
// // //         let temp = this;
// // //         while(temp !== null){
// // //             console.log(`${temp.value} `);
// // //             temp = temp.next;
// // //         }
// // //         console.log()
// // //     }
// // // }

// // // const reverse = (head) => {
// // //     let current = head;
// // //     previous = null;
// // //     while(current !== null){
// // //         next = current.next;
// // //         current.next = previous;
// // //         previous = current;
// // //         current = next
// // //     }
// // //     return previous;
// // // }

// // // const head = new Node(2);
// // // head.next = new Node(4);
// // // head.next.next = new Node(6);
// // // head.next.next.next = new Node(8);
// // // head.next.next.next.next = new Node(10);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverse(head);
// // // console.log("new order : ")
// // // result.printList();

// // // ============================================================================================================================
// // // Given a string and a pattern, find out if the string contains any permutation of the pattern.
// // // Input: String="oidbcaf", Pattern="abc"
// // // Output: true
// // // Explanation: The string contains "bca" which is a permutation of the given pattern.

// // // const findPermutation = (str, pattern) => {
// // //   let windowStart = 0;
// // //   let matched = 0;
// // //   let charFrequency = {};

// // //   for (let i = 0; i < pattern.length; i++) {
// // //     const chr = pattern[i];
// // //     if (!(chr in charFrequency)) {
// // //       charFrequency[chr] = 0;
// // //     }
// // //     charFrequency[chr] += 1;
// // //   }
// // //   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charFrequency) {
// // //       charFrequency[rightChar] -= 1;
// // //       if (charFrequency[rightChar] === 0) {
// // //         matched += 1;
// // //       }
// // //     }
// // //     if (matched === Object.keys(charFrequency).length) {
// // //       return true;
// // //     }
// // //     if (windowEnd >= pattern.length - 1) {
// // //       let leftchar = str[windowStart];
// // //       windowStart += 1;
// // //       if (leftchar in charFrequency) {
// // //         if (charFrequency[leftchar] === 0) {
// // //           matched -= 1;
// // //         }
// // //         charFrequency[leftchar] += 1;
// // //       }
// // //     }
// // //   }
// // //   return false;
// // // };
// // // console.log(findPermutation("oidbcaf", "bca"));

// // // const arr = [-2, -1, 0, 1, 2];

// // // const squareSort = (arr) => {
// // // let left = 0;
// // // let len = arr.length;
// // // let right = len - 1;
// // // let resultArray = Array(len).fill(0);
// // // let lastIndex = len - 1;

// // // while (left < right) {
// // //   let leftIndexSquare = arr[left] * arr[left];
// // //   let rightIndexSquare = arr[right] * arr[right];
// // //   if (leftIndexSquare > rightIndexSquare) {
// // //     resultArray[lastIndex] = leftIndexSquare;
// // //     left++;
// // //   } else {
// // //     resultArray[lastIndex] = rightIndexSquare;
// // //     right--;
// // //   }
// // //   lastIndex--;
// // // }
// // // return resultArray;
// // // };

// // // console.log(squareSort([-2, -1, 0, 1, 2]));
// // // Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// // // Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// // // Input: [1, 2, 3, 4, 6], target=6
// // // Output: [1, 3]
// // // Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// // // const targetSum = (arr,target) => {
// // //     let start = 0;
// // //     let end = arr.length - 1;
// // //     while(start < end) {
// // //         const currentSum = arr[start] + arr[end];
// // //         if (currentSum === target) {
// // //             return [start, end]
// // //         }
// // //         if(target > currentSum){
// // //             start += 1;
// // //         }else{
// // //             end -= 1;
// // //         }
// // //     }
// // //     return[start, end]
// // // }

// // // console.log(targetSum([1, 2, 3, 4, 6], 6));

// // //====================================================================================================

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };

// // // ============================================================================================================================
// // // // Given a string, find the length of the longest substring, which has all distinct characters.

// // // // Input: String="aabccbb"
// // // // Output: 3
// // // // Explanation: The longest substring with distinct characters is "abc".

// // // const non_repeat_substring = (str) => {
// // //   let windowStart = 0,
// // //     maxLength = 0,
// // //     charIndexMap = {};
// // //   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charIndexMap) {
// // //       windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
// // //     }
// // //     charIndexMap[rightChar] = windowEnd;
// // //     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //   }
// // //   return maxLength;
// // // }

// // // console.log(non_repeat_substring("aabccbb"))

// // // ============================================================================================================================

// // // // Longest Subarray with Ones after Replacement.
// // // // Given an array containing 0s and 1s,
// // // // if you are allowed to replace no more than ‘k’ 0s with 1s,
// // // // find the length of the longest contiguous subarray having all 1s.
// // // // Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// // // // Output: 6
// // // // Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// // // const lengthOfLongestSubString = (arr, k) => {
// // //     let windowStart = 0;
// // //     let maxLength = 0;
// // //     let maxOneCount = 0;

// // //     for (windowEnd = 0; windowEnd < arr.length; windowEnd++){
// // //         if (arr[windowEnd] === 1) {
// // //             maxOneCount += 1;
// // //         }
// // //         if ((windowEnd - windowStart + 1 - maxOneCount) > k) {
// // //             if(arr[windowStart] === 1) {
// // //                 maxOneCount -= 1;
// // //             }
// // //             windowStart += 1;
// // //         }
// // //         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //     }
// // //     return maxLength;
// // // }

// // // console.log(lengthOfLongestSubString([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

// // // ============================================================================================================================
// // // Given a string and a pattern, find out if the string contains any permutation of the pattern.
// // // Input: String="oidbcaf", Pattern="abc"
// // // Output: true
// // // Explanation: The string contains "bca" which is a permutation of the given pattern.

// // // const findPermutation = (str, pattern) => {
// // //   let windowStart = 0;
// // //   let matched = 0;
// // //   let charFrequency = {};

// // //   for (let i = 0; i < pattern.length; i++) {
// // //     const chr = pattern[i];
// // //     if (!(chr in charFrequency)) {
// // //       charFrequency[chr] = 0;
// // //     }
// // //     charFrequency[chr] += 1;
// // //   }
// // //   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charFrequency) {
// // //       charFrequency[rightChar] -= 1;
// // //       if (charFrequency[rightChar] === 0) {
// // //         matched += 1;
// // //       }
// // //     }
// // //     if (matched === Object.keys(charFrequency).length) {
// // //       return true;
// // //     }
// // //     if (windowEnd >= pattern.length - 1) {
// // //       let leftchar = str[windowStart];
// // //       windowStart += 1;
// // //       if (leftchar in charFrequency) {
// // //         if (charFrequency[leftchar] === 0) {
// // //           matched -= 1;
// // //         }
// // //         charFrequency[leftchar] += 1;
// // //       }
// // //     }
// // //   }
// // //   return false;
// // // };
// // // console.log(findPermutation("oidbcaf", "bca"));

// // // const arr = [-2, -1, 0, 1, 2];

// // // const squareSort = (arr) => {
// // // let left = 0;
// // // let len = arr.length;
// // // let right = len - 1;
// // // let resultArray = Array(len).fill(0);
// // // let lastIndex = len - 1;

// // // while (left < right) {
// // //   let leftIndexSquare = arr[left] * arr[left];
// // //   let rightIndexSquare = arr[right] * arr[right];
// // //   if (leftIndexSquare > rightIndexSquare) {
// // //     resultArray[lastIndex] = leftIndexSquare;
// // //     left++;
// // //   } else {
// // //     resultArray[lastIndex] = rightIndexSquare;
// // //     right--;
// // //   }
// // //   lastIndex--;
// // // }
// // // return resultArray;
// // // };

// // // console.log(squareSort([-2, -1, 0, 1, 2]));
// // // Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// // // Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// // // Input: [1, 2, 3, 4, 6], target=6
// // // Output: [1, 3]
// // // Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// // // const targetSum = (arr,target) => {
// // //     let start = 0;
// // //     let end = arr.length - 1;
// // //     while(start < end) {
// // //         const currentSum = arr[start] + arr[end];
// // //         if (currentSum === target) {
// // //             return [start, end]
// // //         }
// // //         if(target > currentSum){
// // //             start += 1;
// // //         }else{
// // //             end -= 1;
// // //         }
// // //     }
// // //     return[start, end]
// // // }

// // // console.log(targetSum([1, 2, 3, 4, 6], 6));

// // //====================================================================================================

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };

// // // console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));
// // // Given a list of intervals,
// // // merge all the overlapping intervals to produce
// // // a list that has only mutually exclusive intervals.

// // // Intervals: [[1,4], [2,5], [7,9]]
// // // Output: [[1,5], [7,9]]
// // // Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// // // one [1,5].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }

// // //   getInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const merge = (intervals) => {
// // //   if (intervals.length < 2) {
// // //     return intervals;
// // //   }
// // //   intervals.sort((a, b) => a.start - b.start);
// // //   const mergedIntervals = [];
// // //   let start = intervals[0].start,
// // //     end = intervals[0].end;
// // //   for (i = 1; i < intervals.length; i++) {
// // //     const interval = intervals[i];
// // //     if (interval.start <= end) {
// // //       end = Math.max(interval.end, end);
// // //     } else {
// // //       mergedIntervals.push(new Interval(start, end));
// // //       start = interval.start;
// // //       end = interval.end;
// // //     }
// // //   }
// // //   mergedIntervals.push(new Interval(start, end));
// // //   return mergedIntervals;
// // // };

// // // let result = merge([
// // //   new Interval(1, 4),
// // //   new Interval(2, 5),
// // //   new Interval(7, 9),
// // // ]);
// // // console.log("Merged intervals :", result);
// // // Given a sorted array ,create  a new array-
// // // containing squares of all the numbers of the input array -
// // //in the sorted order.

// // // input : [-2, -1, 0, 2, 3]
// // // output :[0, 1, 4, 4, 9]

// // // Input: [-3, -1, 0, 1, 2]
// // // Output: [0, 1, 1, 4, 9]

// // const squares = (arr) => {
// //     const n = arr.length;
// //     squaresNew = Array(n).fill(0);
// //     let highestSqaureIndex = n -1;
// //     let left = 0,
// //         right = n - 1;
// //     while (left <= right) {
// //         let leftSquare = arr[left] * arr[left],
// //             rightSquare = arr[right] * arr[right];
// //         if (leftSquare > rightSquare) {
// //             squaresNew[highestSqaureIndex] = leftSquare;
// //             left += 1;
// //         } else {
// //             squaresNew[highestSqaureIndex] = rightSquare;
// //             right -= 1;
// //         }
// //         highestSqaureIndex -=1;
// //     }
// //     return squaresNew;
// // }
// // // console.log(squares([-2, -1, 0, 2, 3]));
// // // console.log(squares([-3, -1, 0, 1, 2]));

// // // Given an array of unsorted numbers, 
// // // find all unique triplets in it that add up to zero.

// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // const searchTriplets = (arr) => {
// //     arr.sort((a, b) => a - b);
// //     const triplets = [];
// //     for (i = 0; i < arr.length; i++) {
// //         if(i > 0 && arr[i] === arr[i - 1]) {
// //             continue;
// //         }
// //         searchPair(arr, -arr[i], i + 1, triplets);
// //     }
// //     return triplets;
// // }
// // const searchPair = (arr, targetSum, left, triplets) => {
// //     let right = arr.length - 1;
// //     while(left < right) {
// //         const currentSum = arr[left] + arr[right];
// //         if (currentSum === targetSum) {
// //             triplets.push([-targetSum, arr[left], arr[right]]);
// //             left += 1;
// //             right -= 1;
// //             while (left < right && arr[left] === arr[left - 1]) {
// //                 left += 1;
// //             }
// //             while (left < right && arr[right] === arr[right + 1]) {
// //                 right -= 1;
// //             }
// //         } else if (targetSum > currentSum) {
// //             left += 1;
// //         } else {
// //             right -= 1;
// //         }
// //     }
// // }
// // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
// // // // Input: Fruit=['A', 'B', 'C', 'A', 'C']
// // // // Output: 3
// // // // Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// // // const fruits_into_baskets = (fruits) => {
// // //   let windowStart = 0,
// // //     maxLength = 0,
// // //     fruitFrequency = {};

// // //   // try to extend the range [windowStart, windowEnd]
// // //   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
// // //     const rightFruit = fruits[windowEnd];
// // //     if (!(rightFruit in fruitFrequency)) {
// // //       fruitFrequency[rightFruit] = 0;
// // //     }
// // //     fruitFrequency[rightFruit] += 1;

// // //     // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// // //     while (Object.keys(fruitFrequency).length > 2) {
// // //       const leftFruit = fruits[windowStart];
// // //       fruitFrequency[leftFruit] -= 1;
// // //       if (fruitFrequency[leftFruit] === 0) {
// // //         delete fruitFrequency[leftFruit];
// // //       }
// // //       windowStart += 1; // shrink the window
// // //     }
// // //     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //   }

// // //   return maxLength;
// // // }

// // // console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));

// // // ============================================================================================================================
// // // // Given a string, find the length of the longest substring, which has all distinct characters.

// // // // Input: String="aabccbb"
// // // // Output: 3
// // // // Explanation: The longest substring with distinct characters is "abc".

// // // const non_repeat_substring = (str) => {
// // //   let windowStart = 0,
// // //     maxLength = 0,
// // //     charIndexMap = {};
// // //   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charIndexMap) {
// // //       windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
// // //     }
// // //     charIndexMap[rightChar] = windowEnd;
// // //     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //   }
// // //   return maxLength;
// // // }

// // // console.log(non_repeat_substring("aabccbb"))

// // // ============================================================================================================================

// // // // Longest Subarray with Ones after Replacement.
// // // // Given an array containing 0s and 1s,
// // // // if you are allowed to replace no more than ‘k’ 0s with 1s,
// // // // find the length of the longest contiguous subarray having all 1s.
// // // // Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// // // // Output: 6
// // // // Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// // // const lengthOfLongestSubString = (arr, k) => {
// // //     let windowStart = 0;
// // //     let maxLength = 0;
// // //     let maxOneCount = 0;

// // //     for (windowEnd = 0; windowEnd < arr.length; windowEnd++){
// // //         if (arr[windowEnd] === 1) {
// // //             maxOneCount += 1;
// // //         }
// // //         if ((windowEnd - windowStart + 1 - maxOneCount) > k) {
// // //             if(arr[windowStart] === 1) {
// // //                 maxOneCount -= 1;
// // //             }
// // //             windowStart += 1;
// // //         }
// // //         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //     }
// // //     return maxLength;
// // // }

// // // console.log(lengthOfLongestSubString([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

// // // ============================================================================================================================
// // // Given a string and a pattern, find out if the string contains any permutation of the pattern.
// // // Input: String="oidbcaf", Pattern="abc"
// // // Output: true
// // // Explanation: The string contains "bca" which is a permutation of the given pattern.

// // // const findPermutation = (str, pattern) => {
// // //   let windowStart = 0;
// // //   let matched = 0;
// // //   let charFrequency = {};

// // //   for (let i = 0; i < pattern.length; i++) {
// // //     const chr = pattern[i];
// // //     if (!(chr in charFrequency)) {
// // //       charFrequency[chr] = 0;
// // //     }
// // //     charFrequency[chr] += 1;
// // //   }
// // //   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //     const rightChar = str[windowEnd];
// // //     if (rightChar in charFrequency) {
// // //       charFrequency[rightChar] -= 1;
// // //       if (charFrequency[rightChar] === 0) {
// // //         matched += 1;
// // //       }
// // //     }
// // //     if (matched === Object.keys(charFrequency).length) {
// // //       return true;
// // //     }
// // //     if (windowEnd >= pattern.length - 1) {
// // //       let leftchar = str[windowStart];
// // //       windowStart += 1;
// // //       if (leftchar in charFrequency) {
// // //         if (charFrequency[leftchar] === 0) {
// // //           matched -= 1;
// // //         }
// // //         charFrequency[leftchar] += 1;
// // //       }
// // //     }
// // //   }
// // //   return false;
// // // };
// // // console.log(findPermutation("oidbcaf", "bca"));

// // // const arr = [-2, -1, 0, 1, 2];

// // // const squareSort = (arr) => {
// // // let left = 0;
// // // let len = arr.length;
// // // let right = len - 1;
// // // let resultArray = Array(len).fill(0);
// // // let lastIndex = len - 1;

// // // while (left < right) {
// // //   let leftIndexSquare = arr[left] * arr[left];
// // //   let rightIndexSquare = arr[right] * arr[right];
// // //   if (leftIndexSquare > rightIndexSquare) {
// // //     resultArray[lastIndex] = leftIndexSquare;
// // //     left++;
// // //   } else {
// // //     resultArray[lastIndex] = rightIndexSquare;
// // //     right--;
// // //   }
// // //   lastIndex--;
// // // }
// // // return resultArray;
// // // };

// // // console.log(squareSort([-2, -1, 0, 1, 2]));
// // // Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// // // Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// // // Input: [1, 2, 3, 4, 6], target=6
// // // Output: [1, 3]
// // // Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// // // const targetSum = (arr,target) => {
// // //     let start = 0;
// // //     let end = arr.length - 1;
// // //     while(start < end) {
// // //         const currentSum = arr[start] + arr[end];
// // //         if (currentSum === target) {
// // //             return [start, end]
// // //         }
// // //         if(target > currentSum){
// // //             start += 1;
// // //         }else{
// // //             end -= 1;
// // //         }
// // //     }
// // //     return[start, end]
// // // }

// // // console.log(targetSum([1, 2, 3, 4, 6], 6));

// // //====================================================================================================

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };


// // //====================================================================================================

// // //Remove Duplicates
// // // Input: [2, 3, 3, 3, 6, 9, 9]
// // // Output: 4
// // // Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// // // const removeDup = (arr) => {
// // //     let nextNonDup = 1;
// // //     let i = 0;
// // //     while(i < arr.length){
// // //         if(arr[nextNonDup - 1] !== arr[i]){
// // //             arr[nextNonDup] = arr[i];
// // //             nextNonDup += 1;
// // //         }
// // //         i += 1;
// // //     }
// // //     return nextNonDup;
// // // }

// // // console.log(removeDup([2, 3, 3, 3, 6, 9, 9]));

// // // const arr =  [-2, -1, 0, 2, 3]
// // // const result = Array(arr.length - 1).fill(0)
// // // let left = 0
// // // let right = arr.length - 1
// // // let lastIndex = arr.length - 1

// // // while (left < right) {
// // //   let leftSquare = arr[left] * arr[left]
// // //   let rightSquare = arr[right] * arr[right]
// // //   if (leftSquare > rightSquare) {
// // //     result[lastIndex] = leftSquare
// // //     left ++
// // //   } else {
// // //     result[lastIndex] = rightSquare
// // //     right --
// // //   }
// // //   lastIndex --
// // // }
// // // console.log(result)

// // // Given a sorted array,
// // // create a new array containing squares of all the numbers of the input array in the sorted order.

// // // Input: [-2, -1, 0, 2, 3]
// // // Output: [0, 1, 4, 4, 9]

// // // const makeSquares = (arr) => {
// // //   const n = arr.length;
// // //   squares = Array(n).fill(0);
// // //   let highestSquareIndex = n - 1;
// // //   let left = 0;
// // //   let right = n - 1;
// // //   while (left <= right) {
// // //     let leftSquare = arr[left] * arr[left];
// // //     let rightSquare = arr[right] * arr[right];
// // //     if (leftSquare > rightSquare) {
// // //       squares[highestSquareIndex] = leftSquare;
// // //       left += 1;
// // //     } else {
// // //       squares[highestSquareIndex] = rightSquare;
// // //       right -= 1;
// // //     }
// // //     highestSquareIndex -= 1;
// // //   }
// // //   return squares;
// // // };
// // // console.log(makeSquares([-2, -1, 0, 2, 3]));

// // // Given an array of unsorted numbers,
// // // find all unique triplets in it that add up to zero.
// // // Input: [-3, 0, 1, 2, -1, 1, -2]
// // // Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// // // Explanation: There are four unique triplets whose sum is equal to zero.

// // // const searchTriplets = (arr) => {
// // //   arr.sort((a, b) => a - b);
// // //   const triplets = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (i > 0 && arr[i] === arr[i - 1]) {
// // //       continue;
// // //     }
// // //     searchPair(arr, -arr[i], i + 1, triplets);
// // //   }
// // //   return triplets;
// // // };
// // // const searchPair = (arr, targetSum, left, triplets) => {
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     const currentSum = arr[left] + arr[right];
// // //     if (currentSum === targetSum) {
// // //       triplets.push([-targetSum, arr[left], arr[right]]);
// // //       left += 1;
// // //       right -= 1;
// // //       while (left < right && arr[left] === arr[left - 1]) {
// // //         left += 1;
// // //       }
// // //       while (left < right && arr[right] === arr[right + 1]) {
// // //         right -= 1;
// // //       }
// // //     } else if (targetSum > currentSum) {
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // // };
// // // console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));

// // // Given an array of unsorted numbers and a target number,
// // // find a triplet in the array whose sum is as close to the target number as possible,
// // // return the sum of the triplet. If there are more than one such triplet,
// // // return the sum of the triplet with the smallest sum.

// // // Input: [-2, 0, 1, 2], target=2
// // // Output: 1
// // // Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// // // const tripletSum = (arr, targetSum) => {
// // //     arr.sort((a, b) => a - b);
// // //     let smallDifferenece = Infinity;
// // //     for (let i = 0; i < arr.length - 2; i++) {
// // //         let left = i + 1;
// // //         let right = arr.length - 1;
// // //         while (left < right) {
// // //             const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
// // //             if (targetDifference === 0) {
// // //                 return targetSum
// // //             }
// // //             if (Math.abs(targetDifference) < Math.abs(smallDifferenece) ||
// // //                (Math.abs(targetDifference) === Math.abs(smallDifferenece) && targetDifference > smallDifferenece)) {
// // //                 smallDifferenece = targetDifference;
// // //             }
// // //             if (targetDifference > 0) {
// // //                 left += 1;
// // //             } else {
// // //               right -= 1;
// // //             }
// // //         }
// // //     }
// // //     return targetSum - smallDifferenece;
// // // }
// // // console.log(tripletSum([-2, 0, 1, 2], 2));

// // // Given an array arr of unsorted numbers and a target sum,
// // // count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// // // Write a function to return the count of such triplets.

// // // Input: [-1, 0, 2, 3], target=3
// // // Output: 2
// // // Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// // // const tripletWithSmallerSum = (arr, target) => {
// // //   arr.sort((a, b) => a - b);
// // //   let count = 0;
// // //   for (let i = 0; i < arr.length - 2; i++) {
// // //     count += searchPair(arr, target - arr[i], i);
// // //   }
// // //   return count;
// // // };
// // // const searchPair = (arr, targetSum, first) => {
// // //   let count = 0;
// // //   let left = first + 1;
// // //   let right = arr.length - 1;
// // //   while (left < right) {
// // //     if (arr[left] + arr[right] < targetSum) {
// // //       count += right - left;
// // //       left += 1;
// // //     } else {
// // //       right -= 1;
// // //     }
// // //   }
// // //   return count;
// // // };

// // // console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));
// // // Given a list of intervals,
// // // merge all the overlapping intervals to produce
// // // a list that has only mutually exclusive intervals.

// // // Intervals: [[1,4], [2,5], [7,9]]
// // // Output: [[1,5], [7,9]]
// // // Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// // // one [1,5].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }

// // //   getInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const merge = (intervals) => {
// // //   if (intervals.length < 2) {
// // //     return intervals;
// // //   }
// // //   intervals.sort((a, b) => a.start - b.start);
// // //   const mergedIntervals = [];
// // //   let start = intervals[0].start,
// // //     end = intervals[0].end;
// // //   for (i = 1; i < intervals.length; i++) {
// // //     const interval = intervals[i];
// // //     if (interval.start <= end) {
// // //       end = Math.max(interval.end, end);
// // //     } else {
// // //       mergedIntervals.push(new Interval(start, end));
// // //       start = interval.start;
// // //       end = interval.end;
// // //     }
// // //   }
// // //   mergedIntervals.push(new Interval(start, end));
// // //   return mergedIntervals;
// // // };

// // // let result = merge([
// // //   new Interval(1, 4),
// // //   new Interval(2, 5),
// // //   new Interval(7, 9),
// // // ]);
// // // console.log("Merged intervals :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Given a list of non-overlapping intervals sorted by their start time,
// // // insert a given interval at the correct position and
// // // merge all necessary intervals to produce a list
// // // that has only mutually exclusive intervals.

// // // Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// // // Output: [[1,3], [4,7], [8,12]]
// // // Explanation: After insertion, since [4,6] overlaps with [5,7],
// // // we merged them into one [4,7].

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // //   printInterval() {
// // //     return "[" + this.start + ", " + this.end + "]";
// // //   }
// // // }

// // // const insert = (intervals, newInterval) => {
// // //   let merged = [];
// // //   i = 0;
// // //   while (i < intervals.length && intervals[i].end < newInterval.start) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   while (i < intervals.length && intervals[i].start <= newInterval.end) {
// // //     newInterval.start = Math.min(intervals[i].start, newInterval.start);
// // //     newInterval.end = Math.max(intervals[i].end, newInterval.end);
// // //     i += 1;
// // //   }
// // //   merged.push(newInterval);

// // //   while (i < intervals.length) {
// // //     merged.push(intervals[i]);
// // //     i += 1;
// // //   }
// // //   return merged;
// // // };
// // // let result = insert(
// // //   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
// // //   new Interval(4, 6)
// // // );

// // // console.log("new output :", result);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given two lists of intervals,
// // // find the intersection of these two lists.
// // // Each list consists of disjoint intervals sorted on their start time.

// // // Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// // // Output: [2, 3], [5, 6], [7, 7]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// // // Output: [5, 7], [9, 10]
// // // Explanation: The output list contains the common intervals between the two lists.

// // // class Interval {
// // //   constructor(start, end) {
// // //     this.start = start;
// // //     this.end = end;
// // //   }
// // // }
// // // const merge = (intervalsA, intervalsB) => {
// // //   let result = [],
// // //     i = 0,
// // //     j = 0;
// // //   while (i < intervalsA.length && j < intervalsB.length) {
// // //     aOverLapB =
// // //       intervalsA[i].start >= intervalsB[j].start &&
// // //       intervalsA[i].start <= intervalsB[j].end;
// // //     bOverLapA =
// // //       intervalsB[j].start >= intervalsA[i].start &&
// // //       intervalsB[j].start <= intervalsA[i].end;
// // //     if (aOverLapB || bOverLapA) {
// // //       result.push(
// // //         new Interval(
// // //           Math.max(intervalsA[i].start, intervalsB[j].start),
// // //           Math.min(intervalsA[i].end, intervalsB[j].end)
// // //         )
// // //       );
// // //     }
// // //     if (intervalsA[i].end < intervalsB[j].end) {
// // //       i += 1;
// // //     } else {
// // //       j += 1;
// // //     }
// // //   }
// // //   return result;
// // // };
// // // let result = merge(
// // //   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
// // //   [new Interval(2, 3), new Interval(5, 7)]
// // // );

// // // console.log(result);
// // // Given a binary tree, populate an array to represent its level-by-level traversal.
// // // You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     const levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //   }
// // //   return result;
// // // };

// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level order traversal: ${traverse(root)}`);
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// // // You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   const result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   while (queue.length > 0) {
// // //     let levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       currentLevel.push(currentNode.val);
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.unshift(currentLevel);
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Reverse level order traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, populate an array to represent its zigzag level order traversal.
// // // You should populate the values of all nodes of the first level from left to right,
// // // then right to left for the next level and keep alternating in the same manner for the following levels.

// // // class TreeNode {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // const traverse = (root) => {
// // //   result = [];
// // //   if (root === null) {
// // //     return result;
// // //   }
// // //   const queue = [];
// // //   queue.push(root);
// // //   leftToRight = true;
// // //   while (queue.length > 0) {
// // //     levelSize = queue.length;
// // //     currentLevel = [];
// // //     for (i = 0; i < levelSize; i++) {
// // //       currentNode = queue.shift();
// // //       if (leftToRight) {
// // //         currentLevel.push(currentNode.val);
// // //       } else {
// // //         currentLevel.unshift(currentNode.val);
// // //       }
// // //       if (currentNode.left !== null) {
// // //         queue.push(currentNode.left);
// // //       }
// // //       if (currentNode.right !== null) {
// // //         queue.push(currentNode.right);
// // //       }
// // //     }
// // //     result.push(currentLevel);
// // //     leftToRight = !leftToRight;
// // //   }
// // //   return result;
// // // };
// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // root.right.left.left = new TreeNode(20);
// // // root.right.left.right = new TreeNode(17);
// // // console.log(`Zigzag traversal: ${traverse(root)}`);

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given a binary tree, 
// // // populate an array to represent the averages of all of its levels.

// // // class TreeNode {
// // //     constructor(val) {
// // //         this.val = val;
// // //         this.left = null;
// // //         this.right = null;
// // //     }
// // // }
// // // const findLevelAverage = (root) => {
// // //     result = [];
// // //     if (root === null) {
// // //         return result;
// // //     }
// // //     const queue = [];
// // //     queue.push(root);
// // //     while (queue.length > 0) {
// // //         let levelSize = queue.length,
// // //         levelSum = 0.0;
// // //         for (i = 0; i < levelSize; i++) {
// // //             currentNode = queue.shift();
// // //             levelSum += currentNode.val;
// // //             if (currentNode.left !== null) {
// // //                 queue.push(currentNode.left)
// // //             }
// // //             if (currentNode.right != null) {
// // //                 queue.push(currentNode.right);
// // //             }
// // //         }
// // //         result.push(levelSum / levelSize)
// // //     }
// // //     return result;
// // // }


// // // const root = new TreeNode(12);
// // // root.left = new TreeNode(7);
// // // root.right = new TreeNode(1);
// // // root.left.left = new TreeNode(9);
// // // root.left.right = new TreeNode(2);
// // // root.right.left = new TreeNode(10);
// // // root.right.right = new TreeNode(5);
// // // console.log(`Level averages are: ${findLevelAverage(root)}`);
// // // Given the head of a Singly LinkedList, reverse the LinkedList.
// // // Write a function to return the new head of the reversed LinkedList.
// // // class Node {
// // //     constructor(value, next = null){
// // //         this.value = value;
// // //         this.next = next;
// // //     }
// // //     printList() {
// // //         let temp = this;
// // //         while(temp !== null){
// // //             console.log(`${temp.value} `);
// // //             temp = temp.next;
// // //         }
// // //         console.log()
// // //     }
// // // }

// // // const reverse = (head) => {
// // //     let current = head;
// // //     previous = null;
// // //     while(current !== null){
// // //         next = current.next;
// // //         current.next = previous;
// // //         previous = current;
// // //         current = next
// // //     }
// // //     return previous;
// // // }

// // // const head = new Node(2);
// // // head.next = new Node(4);
// // // head.next.next = new Node(6);
// // // head.next.next.next = new Node(8);
// // // head.next.next.next.next = new Node(10);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverse(head);
// // // console.log("new order : ")
// // // result.printList();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Given the head of a LinkedList and two positions ‘p’ and ‘q’,
// // // reverse the LinkedList from position ‘p’ to ‘q’.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseSubList = (head, p, q) => {
// // //   if (p === q) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   let i = 0;
// // //   while (current !== null && i < p - 1) {
// // //     previous = current;
// // //     current = current.next;
// // //     i += 1;
// // //   }
// // //   const lastNodeFirstPart = previous;
// // //   const lastNodeSubList = current;
// // //   let next = null;
// // //   i = 0;
// // //   while (current !== null && i < q - p + 1) {
// // //     next = current.next;
// // //     current.next = previous;
// // //     previous = current;
// // //     current = next;
// // //     i += 1;
// // //   }
// // //   if (lastNodeFirstPart !== null) {
// // //     lastNodeFirstPart.next = previous;
// // //   } else {
// // //     head = previous;
// // //   }
// // //   lastNodeSubList.next = current;
// // //   return head;
// // // };

// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseSubList(head, 3, 5);
// // // console.log("new order : ");
// // // result.printList();

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // //   1
// // // //   1 2
// // // //   1 2 3
// // // //   1 2 3 4
// // // //   1 2 3 4 5


// // // // const out = (num) => {
// // // //     for(let i = 1; i <= num; i++){
// // // //         result = ""
// // // //         for(let j = 1; j <= i; j++){
// // // //             result += j + " ";
// // // //         }
// // // //         console.log(result);
// // // //     }
// // // // }
// // // // out(5);


// // // //====================QUESTION-2===================================================

// // // // 5 4 3 2 1
// // // // 4 3 2 1
// // // // 3 2 1
// // // // 2 1
// // // // 1

// // // // const num = (n) => {
// // // //     for(let i = n; i >= 1; i--){
// // // //         result = "";
// // // //         for(let j = i; j >= 1; j--){
// // // //             result += j +" ";
// // // //         }
// // // //         console.log(result);
// // // //     }
// // // // }

// // // // num(5);

// // // //====================QUESTION-3===================================================
// // // // 1
// // // // 2 3
// // // // 4 5 6
// // // // 7 8 9 10
// // // // 11 12 13 14 15

// // // // const num = (n) => {
// // // //     let counter = 1;
// // // //     for(let i = 1; i <= n; i++){
// // // //         let result = ""
// // // //         for(let j = 1; j <= i; j++){
// // // //             result += counter + " ";
// // // //             counter++
// // // //         }
// // // //         console.log(result);
// // // //     }
// // // // }

// // // // num(5);

// // // //====================QUESTION-4===================================================
// // // // 1
// // // // 1 2
// // // // 1 2 3
// // // // 1 2 3 4 5
// // // // 1 2 3 4
// // // // 1 2 3
// // // // 1 2
// // // // 1

// // // // const num = (n) => {
// // // //     for(let i = 1; i <= n; i++){
// // // //         result = ""
// // // //         for(j = 1; j <= i; j++){
// // // //             result += j + " "
// // // //         }
// // // //         console.log(result);
// // // //     }
// // // //     for(let i = n-1; i >= 1; i--){
// // // //         result = "";
// // // //         for(let j = 1; j <= i; j++ ){
// // // //             result += j + " ";
// // // //         }
// // // //         console.log(result);
// // // //     }
// // // // }

// // // // num(5);

// // // //====================QUESTION-4===================================================
// // // // Write a program to check if a number is pailndrome.

// // // // input = 121;
// // // // output = true;


// // // // const num = (n) => {
// // // //     let temp = n;
// // // //     let result = 0;

// // // //     while(temp > 0){
// // // //         let digit = temp % 10;
// // // //         result = result * 10 + digit
// // // //         temp = parseInt(temp/10);
// // // //     }
// // // //     if(result == n){
// // // //         console.log("The number is palindrome")
// // // //     }else[
// // // //         console.log("It is not palindrome")
// // // //     ]
// // // //     console.log (result);
// // // // }

// // // // //num(121);
// // // // num(123);

// // // //====================QUESTION-5===================================================
// // // //IS THIS AN AMSTRONG NUMBER ?
// // // // 153 => (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

// // // // const ams = (num) => {
// // // //     let temp = num;
// // // //     sum = 0;
// // // //     while(temp > 0){
// // // //         let rem = temp % 10;
// // // //         sum += rem ** 3;
// // // //         temp = parseInt(temp/10); 
// // // //     }
// // // //     if(sum == num){
// // // //         console.log("this is amstrong num")
// // // //     }else{
// // // //         console.log("this is not amstrong num")
// // // //     }
// // // //     console.log(sum)
// // // // };
// // // // ams(153);
// // // //====================QUESTION-6===================================================
// // // //WAP to print "n" fibonacci numbers.

// // // // fibonacci numbers = 0,1,1,2,3,5,8,13,21

// // // // const fib = (num) => {
// // // //     let n1 = 0;
// // // //     let n2 = 1;
// // // //     for(let i = 0; i <= num; i++){
// // // //         console.log (n1);
// // // //         nextNum = n1 + n2;
// // // //         n1 = n2;
// // // //         n2 = nextNum;
// // // //     }
// // // // }
// // // // fib(5);
// // // //====================QUESTION-7===================================================
// // // //Input: [2, 1, 5, 1, 3, 2], k=3 
// // // // Output: 9
// // // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // // // const maxSub = (arr, k) => {
// // // //     let maxSum = 0;
// // // //     let start = 0;
// // // //     let windowSum = 0;

// // // //     for(let i = 0; i < arr.length; i++){
// // // //         windowSum += arr[i];
    
// // // //       if(i >= k-1){
// // // //         maxSum = Math.max(maxSum, windowSum);
// // // //         windowSum -= arr[start];
// // // //         start += 1;
// // // //         }
// // // //       }
// // // //     return maxSum;
// // // // }

// // // // console.log(maxSub([2, 1, 5, 1, 3, 2], 3));

// // // // let findMaxSlidingWindow = (nums, windowSize) => {
// // // //   const result = [];
// // // //   for (let i = 0; i <= nums.length - windowSize; i++) {
// // // //     const max = findMax(i, windowSize, nums);
// // // //     result.push(max);
// // // //   }
// // // //   return result;
// // // // };

// // // // let findMaxSlidingWindow = (nums, windowSize) => {
// // // //   const result = [];
// // // //   for (let i = 0; i <= nums.length - windowSize; i++) {
// // // //     const max = findMax(i, windowSize, nums);
// // // //     result.push(max);
// // // //   }
// // // //   return result;
// // // // };
// // // // const findMax = (index, size, array) => {
// // // //   const result = [];
// // // //   for (let i = 0; i < size; i++) {
// // // //     result.push(array[index]);
// // // //     index += 1;
// // // //   }
// // // //   return Math.max(...result);
// // // //   //return result;
// // // // };

// // // // console.log(findMaxSlidingWindow([1,2,3,4,5,6], 3));


// // // const slide = (arr, k) => {
// // //     let sumWindow = 0;
// // //     let sub = [];
// // //     start = 0;


// // //     for(let i = 0; i < arr.length; i++){
// // //         sumWindow += arr[i];
// // //         if( i >= k -1){
// // //             sub.push(sumWindow);
// // //             sumWindow -= arr[start];
// // //             start += 1;
// // //         }
// // //     }
// // //     return sub;
// // // }

// // // console.log(slide([1,2,3,4,5,6], 3))

// // // // let findMaxSlidingWindow = (k, arr) => {
// // // //   const result = [];
// // // //   let windowSum  = 0.0
// // // //       windowStart = 0
// // // //   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
// // // //     windowSum += arr[windowEnd];

// // // //     if(windowEnd >= k-1) {
// // // //       result.push(windowSum / k)
// // // //       windowSum -= arr[windowStart];
// // // //       windowStart += 1;
// // // //       }
// // // //     }
// // // //     return result;
// // // //   }

// // // // console.log(findMaxSlidingWindow(2, [2,4,6]));

// // // // Given an array of positive numbers and a positive number ‘k,’ 
// // // // find the maximum sum of any contiguous subarray of size ‘k’.

// // // // Input: [2, 1, 5, 1, 3, 2], k=3 
// // // // Output: 9
// // // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // // // sol-1-

// // // // const maxArray = (k, arr) => {
// // // //   let maxSub = 0;
// // // //   let maxSum = 0;
// // // //   for(let i = 0; i < arr.length - k + 1; i++){
// // // //     maxSum = 0;
// // // //     for(let j = i; j < i + k; j++) {
// // // //       maxSum += arr[j];
// // // //     }
// // // //      maxSub = Math.max(maxSub,maxSum)
// // // //   }
// // // //   return maxSub;
// // // // }

// // // // console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));



// // // //- sol 2---using sliding window.

// // // // Input: [2, 1, 5, 1, 3, 2], k=3 
// // // // Output: 9

// // // // const maxSum = (k, arr) => {
// // // //   let start = 0
// // // //   let  windowSum = 0
// // // //   let  maxSum = 0

// // // //   for( let i = 0; i < arr.length; i++){
// // // //     windowSum += arr[i];

// // // //     if(i >= k - 1){
// // // //       maxSum = Math.max(maxSum, windowSum);
// // // //       windowSum -= arr[start];
// // // //       start += 1;
// // // //     }
// // // //   }
// // // //   return maxSum;
// // // // }

// // // //Smallest Subarray With a Greater Sum

// // // // Input: [2, 1, 5, 2, 3, 2], S=7
// // // // Output: 2
// // // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // // // Input: [2, 1, 5, 2, 8], S=7
// // // // Output: 1
// // // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// // // const smallSubArray = (s, arr) => {
// // //     let minLength = Infinity;
// // //     let windowSum = 0;
// // //     let windowStart = 0;
  
// // //     for(let i = 0; i < arr.length; i++) {
// // //       windowSum += arr[i];
  
// // //       while(windowSum >= s) {
// // //         minLength = Math.min(minLength, i - windowStart + 1);
// // //         windowSum -= arr[windowStart];
// // //         windowStart += 1
// // //       }
// // //     }
  
// // //     if(minLength === Infinity) {
// // //       return 0;
// // //     }
// // //     return minLength;
// // //   }
  
// // //   console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));

// // var pattern = (n) => {
// //     for (let i = 1; i <= n; i++) {
// //       let string = "";
// //       for (let j = n; j > i; j--) {
// //         string += " ";
// //       }
// //       for (let k = 0; k < i * 2; k++) {
// //         if (k === 0 || k === 2 * i - 2) {
// //           string += "*";
// //         } else {
// //           string += " ";
// //         }
// //       }
// //       console.log(string);
// //     }
// //   };
  
// //   pattern(5);
  
// // // Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// // // If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// // // class Node {
// // //   constructor(value, next = null) {
// // //     this.value = value;
// // //     this.next = next;
// // //   }
// // //   printList() {
// // //     let temp = this;
// // //     while (temp != null) {
// // //       console.log(`${temp.value}`);
// // //       temp = temp.next;
// // //     }
// // //     console.log();
// // //   }
// // // }

// // // const reverseElements = (head, k) => {
// // //   if (k <= 1 || head === null) {
// // //     return head;
// // //   }
// // //   let current = head,
// // //     previous = null;
// // //   while (true) {
// // //     const lastNodePrevPart = previous;
// // //     const lastNodeSubList = current;
// // //     let next = null;
// // //     let i = 0;
// // //     while (current !== null && i < k) {
// // //       next = current.next;
// // //       current.next = previous;
// // //       previous = current;
// // //       current = next;
// // //       i += 1;
// // //     }
// // //     if (lastNodePrevPart !== null) {
// // //       lastNodePrevPart.next = previous;
// // //     } else {
// // //       head = previous;
// // //     }
// // //     lastNodeSubList.next = current;
// // //     if (current === null) {
// // //       break;
// // //     }
// // //     previous = lastNodeSubList;
// // //   }
// // //   return head;
// // // };
// // // const head = new Node(1);
// // // head.next = new Node(2);
// // // head.next.next = new Node(3);
// // // head.next.next.next = new Node(4);
// // // head.next.next.next.next = new Node(5);
// // // head.next.next.next.next.next = new Node(6);
// // // head.next.next.next.next.next.next = new Node(7);
// // // head.next.next.next.next.next.next.next = new Node(8);

// // // console.log("previous node : ");
// // // head.printList();
// // // result = reverseElements(head, 3);
// // // console.log("new order : ");
// // // result.printList();
// // / question - 1
// // //Given an array of positive numbers and a positive number ‘k,’ 
// // //find the maximum sum of any contiguous subarray of size ‘k’.

// // // Input: [2, 1, 5, 1, 3, 2], k=3 
// // // Output: 9
// // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // const maxSubArray = (arr, k) => {
// //     let maxSum = 0;
// //     let windowSum = 0,
// //         windowStart = 0;
// //     for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// //         windowSum += arr[windowEnd];

// //         if (winndowEnd >= k - 1) {
// //             maxSum = Math.max(maxSum, windowSum);
// //             windowSum -= arr[windowStart];
// //             windowStart += 1;
// //         }
// //     }
// //     return maxSum;
// // }

// // // console.log(maxSubArray([2, 1, 5, 1, 3, 2], 3));

// // //question - 2
// // // Given an array of positive integers and a number ‘S,’ 
// // // find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
// // // Return 0 if no such subarray exists.
// // // Input: [2, 1, 5, 2, 3, 2], S=7
// // // Output: 2
// // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // // const smallestSubArraySum = (arr, s) => {
// // //     let minLength = Infinity;
// // //     let windowSum = 0;
// // //     let windowStart = 0;

// // //     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// // //         windowSum += arr[windowEnd];

// // //         while (windowSum >= s) {
// // //             minLength = Math.min(minLength, windowEnd - windowStart + 1);
// // //             windowSum -= arr[windowStart]
// // //             windowStart += 1;
// // //         }
// // //     }
// // //     if (minLength === Infinity) {
// // //         return 0;
// // //     }
// // //     return minLength;

// // // }

// // // // console.log(smallestSubArraySum([2, 1, 5, 2, 3, 2], 7));

// // // // question - 3
// // // // Longest Substring with maximum K Distinct Characters (medium)
// // // // Given a string, 
// // // // find the length of the longest substring in it with no more than K distinct characters.

// // // // Input: String="araaci", K=2
// // // // Output: 4
// // // // Explanation: The longest substring with no more than '2' distinct characters is "araa".

// // // const longestSubstring = (str, k) => {
// // //     let windowStart = 0,
// // //         maxLength = 0,
// // //         charFrequency = {};

// // //     for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// // //         const rightChar = str[windowEnd];
// // //         if(!(rightChar in charFrequency)) {
// // //             charFrequency[rightChar] = 0;
// // //         }
// // //         charFrequency[rightChar] += 1;

// // //         while(Object.keys(charFrequency).length > k) {
// // //             const leftChar = str[windowStart];
// // //             charFrequency[leftChar] -= 1;
// // //             if (charFrequency[leftChar] === 0) {
// // //                 delete charFrequency[leftChar];
// // //             }
// // //             windowStart += 1;
// // //         }
// // //         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// // //     }
// // //     return maxLength;
// // // }
// // // // console.log(longestSubstring("araaci", 2));
// /////////////////////////////////////////////////////PROBLEM - 1//////////////////////////////////////////////////////////////////
// // Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
// // Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// // Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// // const avg = (arr, k) => {
// //     let result = [];
// //     let sum_sub = 0.0;
// //     let start = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         sum_sub += arr[i]
// //         if(i >= k - 1){
// //         result.push(sum_sub / k);
// //         sum_sub -= arr[start];
// //         start += 1;
// //         }
// //     }
// //     return result;
// // };

// // console.log(avg([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

// /////////////////////////////////////////////////////PROBLEM - 2//////////////////////////////////////////////////////////////////
// //Given an array of positive numbers and a positive number ‘k,’
// //find the maximum sum of any contiguous subarray of size ‘k’.
// // Input: [2, 1, 5, 1, 3, 2], k=3
// // Output: 9
// // Explanation: Subarray with maximum sum is [5, 1, 3].

// // const sum = (arr, k) => {
// //     let sub_sum = 0;
// //     let start = 0;
// //     let result = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         sub_sum += arr[i];
// //         if(i >= k -1){
// //             result = Math.max(result, sub_sum);
// //             sub_sum -= arr[start];
// //             start += 1;
// //         }
// //     }
// //     return result;
// // }

// // console.log(sum([2, 1, 5, 1, 3, 2], 3));

// /////////////////////////////////////////////////////PROBLEM - 3//////////////////////////////////////////////////////////////////
// // Given an array of positive integers and a number ‘S,’
// // find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// // Return 0 if no such subarray exists.

// // Input: [2, 1, 5, 2, 3, 2], S=7
// // Output: 2
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // Input: [2, 1, 5, 2, 8], S=7
// // Output: 1
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// // const arr_length = (arr, s) => {
// //     let sum = 0;
// //     let start = 0;
// //     let min_length = Infinity;

// //     for(let i = 0; i < arr.length; i++){
// //         sum += arr[i];
// //         while(sum >= s){
// //             min_length = Math.min(min_length, i - start + 1);
// //             sum -= arr[start];
// //             start++;
// //         }
// //     }
// //     if(min_length === Infinity){
// //         return 0;
// //     }
// //     return min_length;
// // }
// // console.log(arr_length([2, 1, 5, 2, 3, 2], 7));
// // console.log(arr_length([2, 1, 5, 2, 8], 7));

// /////////////////////////////////////////////////////PROBLEM - 4//////////////////////////////////////////////////////////////////

// //Given a string, find the length of the longest substring in it with no more than K distinct characters.
// // Input: String="araaci", K=2
// // Output: 4
// // Explanation: The longest substring with no more than '2' distinct characters is "araa".

// // const longSubString = (str, k) => {
// //   let start = 0;
// //   (maxLength = 0), (charFreq = {});

// //   for (let end = 0; end < str.length; end++) {
// //     const rightChar = str[end];
// //     if (!(rightChar in charFreq)) {
// //       charFreq[rightChar] = 0;
// //     }
// //     charFreq[rightChar] += 1;

// //     while (Object.keys(charFreq).length > k) {
// //       const leftChar = str[start];
// //       charFreq[leftChar] -= 1;
// //       if (charFreq[leftChar] === 0) {
// //         delete charFreq[leftChar];
// //       }
// //       start += 1;
// //     }
// //     console.log("start" + start);
// //     console.log("end" + end);
// //     maxLength = Math.max(maxLength, end - start + 1);
// //   }
// //   return maxLength;
// // };
// // console.log(longSubString("araaci", 2));

// /////////////////////////////////////////////////////PROBLEM - 4//////////////////////////////////////////////////////////////////
// // Given a string, find the length of the longest substring, which has all distinct characters.

// // Input: String="abbbb"
// // Output: 2
// // Explanation: The longest substring with distinct characters is "ab".

// // Input: String="abbbb"
// // // Output: 2
// // // Explanation: The longest substring with distinct characters is "ab".

// // const longSubString = (str) => {
// //     let windowStart = 0;
// //     let maxLength = 0;
// //     charIndexMap = {};

// //     for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// //         const rightChar = str[windowEnd];
// //         if (rightChar in charIndexMap) {
// //             windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
// //         }
// //         charIndexMap[rightChar] = windowEnd;
// //         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// //     }
// //     return maxLength;
// // }
// // console.log(longSubString("abacbd"))


// // //   1
// // //   1 2
// // //   1 2 3
// // //   1 2 3 4
// // //   1 2 3 4 5


// // // const out = (num) => {
// // //     for(let i = 1; i <= num; i++){
// // //         result = ""
// // //         for(let j = 1; j <= i; j++){
// // //             result += j + " ";
// // //         }
// // //         console.log(result);
// // //     }
// // // }
// // // out(5);


// // //====================QUESTION-2===================================================

// // // 5 4 3 2 1
// // // 4 3 2 1
// // // 3 2 1
// // // 2 1
// // // 1

// // // const num = (n) => {
// // //     for(let i = n; i >= 1; i--){
// // //         result = "";
// // //         for(let j = i; j >= 1; j--){
// // //             result += j +" ";
// // //         }
// // //         console.log(result);
// // //     }
// // // }

// // // num(5);

// // //====================QUESTION-3===================================================
// // // 1
// // // 2 3
// // // 4 5 6
// // // 7 8 9 10
// // // 11 12 13 14 15

// // // const num = (n) => {
// // //     let counter = 1;
// // //     for(let i = 1; i <= n; i++){
// // //         let result = ""
// // //         for(let j = 1; j <= i; j++){
// // //             result += counter + " ";
// // //             counter++
// // //         }
// // //         console.log(result);
// // //     }
// // // }

// // // num(5);

// // //====================QUESTION-4===================================================
// // // 1
// // // 1 2
// // // 1 2 3
// // // 1 2 3 4 5
// // // 1 2 3 4
// // // 1 2 3
// // // 1 2
// // // 1

// // // const num = (n) => {
// // //     for(let i = 1; i <= n; i++){
// // //         result = ""
// // //         for(j = 1; j <= i; j++){
// // //             result += j + " "
// // //         }
// // //         console.log(result);
// // //     }
// // //     for(let i = n-1; i >= 1; i--){
// // //         result = "";
// // //         for(let j = 1; j <= i; j++ ){
// // //             result += j + " ";
// // //         }
// // //         console.log(result);
// // //     }
// // // }

// // // num(5);

// // //====================QUESTION-4===================================================
// // // Write a program to check if a number is pailndrome.

// // // input = 121;
// // // output = true;


// // // const num = (n) => {
// // //     let temp = n;
// // //     let result = 0;

// // //     while(temp > 0){
// // //         let digit = temp % 10;
// // //         result = result * 10 + digit
// // //         temp = parseInt(temp/10);
// // //     }
// // //     if(result == n){
// // //         console.log("The number is palindrome")
// // //     }else[
// // //         console.log("It is not palindrome")
// // //     ]
// // //     console.log (result);
// // // }

// // // //num(121);
// // // num(123);

// // //====================QUESTION-5===================================================
// // //IS THIS AN AMSTRONG NUMBER ?
// // // 153 => (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

// // // const ams = (num) => {
// // //     let temp = num;
// // //     sum = 0;
// // //     while(temp > 0){
// // //         let rem = temp % 10;
// // //         sum += rem ** 3;
// // //         temp = parseInt(temp/10); 
// // //     }
// // //     if(sum == num){
// // //         console.log("this is amstrong num")
// // //     }else{
// // //         console.log("this is not amstrong num")
// // //     }
// // //     console.log(sum)
// // // };
// // // ams(153);
// // //====================QUESTION-6===================================================
// // //WAP to print "n" fibonacci numbers.

// // // fibonacci numbers = 0,1,1,2,3,5,8,13,21

// // // const fib = (num) => {
// // //     let n1 = 0;
// // //     let n2 = 1;
// // //     for(let i = 0; i <= num; i++){
// // //         console.log (n1);
// // //         nextNum = n1 + n2;
// // //         n1 = n2;
// // //         n2 = nextNum;
// // //     }
// // // }
// // // fib(5);
// // //====================QUESTION-7===================================================
// // //Input: [2, 1, 5, 1, 3, 2], k=3 
// // // Output: 9
// // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // // const maxSub = (arr, k) => {
// // //     let maxSum = 0;
// // //     let start = 0;
// // //     let windowSum = 0;

// // //     for(let i = 0; i < arr.length; i++){
// // //         windowSum += arr[i];
    
// // //       if(i >= k-1){
// // //         maxSum = Math.max(maxSum, windowSum);
// // //         windowSum -= arr[start];
// // //         start += 1;
// // //         }
// // //       }
// // //     return maxSum;
// // // }

// // // console.log(maxSub([2, 1, 5, 1, 3, 2], 3));

// // // let findMaxSlidingWindow = (nums, windowSize) => {
// // //   const result = [];
// // //   for (let i = 0; i <= nums.length - windowSize; i++) {
// // //     const max = findMax(i, windowSize, nums);
// // //     result.push(max);
// // //   }
// // //   return result;
// // // };

// // // let findMaxSlidingWindow = (nums, windowSize) => {
// // //   const result = [];
// // //   for (let i = 0; i <= nums.length - windowSize; i++) {
// // //     const max = findMax(i, windowSize, nums);
// // //     result.push(max);
// // //   }
// // //   return result;
// // // };
// // // const findMax = (index, size, array) => {
// // //   const result = [];
// // //   for (let i = 0; i < size; i++) {
// // //     result.push(array[index]);
// // //     index += 1;
// // //   }
// // //   return Math.max(...result);
// // //   //return result;
// // // };

// // // console.log(findMaxSlidingWindow([1,2,3,4,5,6], 3));


// // const slide = (arr, k) => {
// //     let sumWindow = 0;
// //     let sub = [];
// //     start = 0;


// //     for(let i = 0; i < arr.length; i++){
// //         sumWindow += arr[i];
// //         if( i >= k -1){
// //             sub.push(sumWindow);
// //             sumWindow -= arr[start];
// //             start += 1;
// //         }
// //     }
// //     return sub;
// // }

// // console.log(slide([1,2,3,4,5,6], 3))

// // // let findMaxSlidingWindow = (k, arr) => {
// // //   const result = [];
// // //   let windowSum  = 0.0
// // //       windowStart = 0
// // //   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
// // //     windowSum += arr[windowEnd];

// // //     if(windowEnd >= k-1) {
// // //       result.push(windowSum / k)
// // //       windowSum -= arr[windowStart];
// // //       windowStart += 1;
// // //       }
// // //     }
// // //     return result;
// // //   }

// // // console.log(findMaxSlidingWindow(2, [2,4,6]));

// // // Given an array of positive numbers and a positive number ‘k,’ 
// // // find the maximum sum of any contiguous subarray of size ‘k’.

// // // Input: [2, 1, 5, 1, 3, 2], k=3 
// // // Output: 9
// // // Explanation: Subarray with maximum sum is [5, 1, 3].

// // // sol-1-

// // // const maxArray = (k, arr) => {
// // //   let maxSub = 0;
// // //   let maxSum = 0;
// // //   for(let i = 0; i < arr.length - k + 1; i++){
// // //     maxSum = 0;
// // //     for(let j = i; j < i + k; j++) {
// // //       maxSum += arr[j];
// // //     }
// // //      maxSub = Math.max(maxSub,maxSum)
// // //   }
// // //   return maxSub;
// // // }

// // // console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));



// // //- sol 2---using sliding window.

// // // Input: [2, 1, 5, 1, 3, 2], k=3 
// // // Output: 9

// // // const maxSum = (k, arr) => {
// // //   let start = 0
// // //   let  windowSum = 0
// // //   let  maxSum = 0

// // //   for( let i = 0; i < arr.length; i++){
// // //     windowSum += arr[i];

// // //     if(i >= k - 1){
// // //       maxSum = Math.max(maxSum, windowSum);
// // //       windowSum -= arr[start];
// // //       start += 1;
// // //     }
// // //   }
// // //   return maxSum;
// // // }

// // //Smallest Subarray With a Greater Sum

// // // Input: [2, 1, 5, 2, 3, 2], S=7
// // // Output: 2
// // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // // Input: [2, 1, 5, 2, 8], S=7
// // // Output: 1
// // // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// // const smallSubArray = (s, arr) => {
// //     let minLength = Infinity;
// //     let windowSum = 0;
// //     let windowStart = 0;
  
// //     for(let i = 0; i < arr.length; i++) {
// //       windowSum += arr[i];
  
// //       while(windowSum >= s) {
// //         minLength = Math.min(minLength, i - windowStart + 1);
// //         windowSum -= arr[windowStart];
// //         windowStart += 1
// //       }
// //     }
  
// //     if(minLength === Infinity) {
// //       return 0;
// //     }
// //     return minLength;
// //   }
  
// //   console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));

// var pattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//       let string = "";
//       for (let j = n; j > i; j--) {
//         string += " ";
//       }
//       for (let k = 0; k < i * 2; k++) {
//         if (k === 0 || k === 2 * i - 2) {
//           string += "*";
//         } else {
//           string += " ";
//         }
//       }
//       console.log(string);
//     }
//   };
  
//   pattern(5);
  
// // Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

// const avg = (k, arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let sum = 0.0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / k);
//   }
//   console.log(result);
// };

// avg(2, [2,4,6]);
// avg(2, [2,4,6,8,10,12]);
// time complexity - O(n*k);

// let findMaxSlidingWindow = (k, arr) => {
//   const result = [];
//   let windowSum  = 0.0
//       windowStart = 0
//   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
//     windowSum += arr[windowEnd];

//     if(windowEnd >= k-1) {
//       result.push(windowSum / k)
//       windowSum -= arr[windowStart];
//       windowStart += 1;
//       }
//     }
//     return result;
//   }

// console.log(findMaxSlidingWindow(2, [2,4,6]));
// =============================================================================================================================

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

//Write a function to return
//a list of starting indices of the anagrams of the pattern in the given string.
// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation:
// The two anagrams of the pattern in the given string are "pq" and "qp".

// const findStringAnagrams = (str, pattern) => {
//     let windowSatrt = 0;
//     let matched = 0;
//     let charFreq = {};
//     for (let i = 0; i < pattern.length; i++) {
//         const chr = pattern[i];
//         if (!(chr in charFreq)) {
//             charFreq[chr] = 0;
//         }
//         charFreq[chr] += 1;
//     }
//     const resultIndices = [];
//     for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//         let rightChar = str[windowEnd];
//         if (rightChar in charFreq) {
//             charFreq[rightChar] -= 1;
//             if (charFreq[rightChar] === 0) {
//                 matched += 1;
//             }
//         }
//         if (matched === Object.keys(charFreq).length) {
//             resultIndices.push(windowSatrt)
//         }
//         if (windowEnd >= pattern.length - 1) {
//            let leftChar = str[windowSatrt]
//            windowSatrt += 1;
//            if (leftChar in charFreq) {
//             if (charFreq[leftChar] === 0) {
//                 matched -= 1;
//             }
//             charFreq[leftChar] += 1
//            }
//         }
//     }
//     return resultIndices;
// }
// console.log(findStringAnagrams("ppqp", "pq"))

// Given a string and a pattern,
// find the smallest substring in the given string
// which has all the character occurrences of the given pattern.

// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring
// having all characters of the pattern is "abdec"

// const findSubstring = (str, pattern) => {
//   let windowStart = 0,
//     matched = 0,
//     substrStart = 0,
//     minLength = str.length + 1,
//     charFrequency = {};

//   for (i = 0; i < pattern.length; i++) {
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
//       if (charFrequency[rightChar] >= 0) {
//         matched += 1;
//       }
//     }
//     while (matched === pattern.length) {
//       if (minLength > windowEnd - windowStart + 1) {
//         minLength = windowEnd - windowStart + 1;
//         substrStart = windowStart;
//       }
//       const leftChar = str[windowStart];
//       windowStart += 1;
//       if (leftChar in charFrequency) {
//         if (charFrequency[leftChar] === 0) {
//           matched -= 1;
//         }
//         charFrequency[leftChar] += 1;
//       }
//     }
//   }

//   if (minLength > str.length) {
//     return "";
//   }
//   return str.substring(substrStart, substrStart + minLength);
// };
// console.log(findSubstring("aabdec", "abc"));

// Given a string and a list of words,
// find all the starting indices of substrings in the given string
// that are a concatenation of all the given words exactly once without any overlapping of words.
// It is given that all words are of the same length.

// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

// const findWordConcatenation = (str, words) => {
//   if (words.length === 0 || words[0].length === 0) {
//     return [];
//   }
//   wordFrequency = {};
//   words.forEach((word) => {
//     if (!(word in wordFrequency)) {
//       wordFrequency[word] = 0;
//     }
//     wordFrequency[word] += 1;
//   });
//   const resultIndices = [],
//     wordsCount = words.length;
//     wordLength = words[0].length;
//     for (i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
//          const wordsSeen = {};
//         for (j = 0; j < wordsCount; j++) {
//             next_word_index = i + j * wordLength;
//             word = str.substring(next_word_index, next_word_index + wordLength);
//             if (!(word in wordFrequency)) {
//                  break;
//             }
//             if (!(word in wordsSeen)) {
//                  wordsSeen[word] = 0;
//             }
//             wordsSeen[word] += 1;
//             if (wordsSeen[word] > (wordFrequency[word] || 0)) {
//              break;
//             }
//              if (j + 1 === wordsCount) {
//             resultIndices.push(i);
//              }
//         }
//   }
//   return resultIndices;
// };
// console.log(findWordConcatenation("catfoxcat", ["cat", "fox"]));

  
  
  // Depth First Search

// Question - 1
// Given a binary tree and a number ‘S’, 
// find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

// class TreeNode {

//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null; 
//     }
//   };
  
  
//   const hasPath = (root, sum) => {
//     if (root === null) {
//         return false;
//     }
    
//     if (root.val === sum && root.left === null && root.right === null) {
//         return true
//     }

//     return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
//   };
  
  
//   var root = new TreeNode(12)
//   root.left = new TreeNode(7)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(9)
//   root.right.left = new TreeNode(10)
//   root.right.right = new TreeNode(5)
//   console.log(`Tree has path: ${hasPath(root, 23)}`)
//   console.log(`Tree has path: ${hasPath(root, 16)}`)

// Question - 2
// Given a binary tree and a number ‘S’, 
// find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null; 
//     }
//   };
  
  
//   const findPaths = (root, sum) => {
//     allPaths = [];
//     deQue = [];
//     findPathRecursive(root, sum, deQue, allPaths);
//     return allPaths;
//   };

//   const findPathRecursive = (currentNode, sum, currentPath, allPaths) => {
//     if (currentNode === null) {
//         return;
//     }
//     currentPath.push(currentNode.val);
//     if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
//         allPaths.push(currentPath);
//     }else {
//         findPathRecursive(currentNode.left, sum - currentNode.val, currentPath, allPaths)
//         findPathRecursive(currentNode.right, sum - currentNode.val, currentPath, allPaths)
//     }
//     currentPath.pop();
//   }
  
  
  
//   var root = new TreeNode(12)
//   root.left = new TreeNode(7)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(4)
//   root.right.left = new TreeNode(10)
//   root.right.right = new TreeNode(5)
//   sum = 23
//   console.log(`Tree paths with sum: ${sum}: ${findPaths(root, sum)}`)
  // Depth First Search

// Question - 1
// Given a binary tree and a number ‘S’, 
// find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

// class TreeNode {

//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null; 
//     }
//   };
  
  
//   const hasPath = (root, sum) => {
//     if (root === null) {
//         return false;
//     }
    
//     if (root.val === sum && root.left === null && root.right === null) {
//         return true
//     }

//     return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
//   };
  
  
//   var root = new TreeNode(12)
//   root.left = new TreeNode(7)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(9)
//   root.right.left = new TreeNode(10)
//   root.right.right = new TreeNode(5)
//   console.log(`Tree has path: ${hasPath(root, 23)}`)
//   console.log(`Tree has path: ${hasPath(root, 16)}`)

/// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

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

// console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fnd the factorial of a given input.
// input  = 5!
// output = 5 * 4 * 3 * 2 * 1

// f(0), f(1) => return 1
// f(n) => return num * fact(num -1)

const fact = (n) => {
  return n < 2 ? 1 : n * fact(n - 1);
};

console.log(fact(5));




// Write a program to get the first 'n' fibonacci numbers.

const fib = (n) => {
  if (n === 1) return [0]
  if (n === 2) return [0, 1];
  const state = fib(n - 1);
  state.push(state[state.length - 1] + state[state.length - 2]);
  return state
}
console.log(fib(5));