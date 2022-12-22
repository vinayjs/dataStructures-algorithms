// //   1
// //   1 2
// //   1 2 3
// //   1 2 3 4
// //   1 2 3 4 5


// // const out = (num) => {
// //     for(let i = 1; i <= num; i++){
// //         result = ""
// //         for(let j = 1; j <= i; j++){
// //             result += j + " ";
// //         }
// //         console.log(result);
// //     }
// // }
// // out(5);


// //====================QUESTION-2===================================================

// // 5 4 3 2 1
// // 4 3 2 1
// // 3 2 1
// // 2 1
// // 1

// // const num = (n) => {
// //     for(let i = n; i >= 1; i--){
// //         result = "";
// //         for(let j = i; j >= 1; j--){
// //             result += j +" ";
// //         }
// //         console.log(result);
// //     }


// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


const traverse = (root) => {
  result = [];
  if (root === null) {
    return result
  }
  const queue = []
  queue.push(root)
  while(queue.length > 0){
    const levelSize = queue.length;
    currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
        currentNode = queue.shift();
        currentLevel.push(currentNode.val)

        if(currentNode.left !== null) {
            queue.push(currentNode.left)
        }
        if(currentNode.right !== null) {
            queue.push(currentNode.right)
        }
    }
    result.unshift(currentLevel);
  }
  return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);


// Given a binary tree, populate an array to represent its zigzag level order 
// traversal. 
// from left to right then from right to left.


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



const traverse = (root) => {
  let result = [];
  if (root === null) {
    return result
  }
  let queue = [];
  queue.push(root);
  leftToRight = true;
  while(queue.length > 0) {
    const levelSize = queue.length;
    let currentLevel = []
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      if(leftToRight) {
        currentLevel.push(currentNode.val)
      }else {
        currentLevel.unshift(currentNode.val)
      }
      if(currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if(currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
    result.push(currentLevel)
    leftToRight = !leftToRight
  }
  
  return result;
};


let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)






// // }

// // num(5);

// //====================QUESTION-3===================================================
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // 11 12 13 14 15

// // const num = (n) => {
// //     let counter = 1;
// //     for(let i = 1; i <= n; i++){
// //         let result = ""
// //         for(let j = 1; j <= i; j++){
// //             result += counter + " ";
// //             counter++
// //         }
// //         console.log(result);
// //     }
// // }

// // num(5);

// //====================QUESTION-4===================================================
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1

// // const num = (n) => {
// //     for(let i = 1; i <= n; i++){
// //         result = ""
// //         for(j = 1; j <= i; j++){
// //             result += j + " "
// //         }
// //         console.log(result);
// //     }
// //     for(let i = n-1; i >= 1; i--){
// //         result = "";
// //         for(let j = 1; j <= i; j++ ){
// //             result += j + " ";
// //         }
// //         console.log(result);
// //     }
// // }

// // num(5);

// //====================QUESTION-4===================================================
// // Write a program to check if a number is pailndrome.

// // input = 121;
// // output = true;


// // const num = (n) => {
// //     let temp = n;
// //     let result = 0;

// //     while(temp > 0){
// //         let digit = temp % 10;
// //         result = result * 10 + digit
// //         temp = parseInt(temp/10);
// //     }
// //     if(result == n){
// //         console.log("The number is palindrome")
// //     }else[
// //         console.log("It is not palindrome")
// //     ]
// //     console.log (result);
// // }

// // //num(121);
// // num(123);

// //====================QUESTION-5===================================================
// //IS THIS AN AMSTRONG NUMBER ?
// // 153 => (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

// // const ams = (num) => {
// //     let temp = num;
// //     sum = 0;
// //     while(temp > 0){
// //         let rem = temp % 10;
// //         sum += rem ** 3;
// //         temp = parseInt(temp/10); 
// //     }
// //     if(sum == num){
// //         console.log("this is amstrong num")
// //     }else{
// //         console.log("this is not amstrong num")
// //     }
// //     console.log(sum)
// // };
// // ams(153);
// //====================QUESTION-6===================================================
// //WAP to print "n" fibonacci numbers.

// // fibonacci numbers = 0,1,1,2,3,5,8,13,21

// // const fib = (num) => {
// //     let n1 = 0;
// //     let n2 = 1;
// //     for(let i = 0; i <= num; i++){
// //         console.log (n1);
// //         nextNum = n1 + n2;
// //         n1 = n2;
// //         n2 = nextNum;
// //     }
// // }
// // fib(5);
// //====================QUESTION-7===================================================
// //Input: [2, 1, 5, 1, 3, 2], k=3 
// // Output: 9
// // Explanation: Subarray with maximum sum is [5, 1, 3].

// // const maxSub = (arr, k) => {
// //     let maxSum = 0;
// //     let start = 0;
// //     let windowSum = 0;

// //     for(let i = 0; i < arr.length; i++){
// //         windowSum += arr[i];
    
// //       if(i >= k-1){
// //         maxSum = Math.max(maxSum, windowSum);
// //         windowSum -= arr[start];
// //         start += 1;
// //         }
// //       }
// //     return maxSum;
// // }

// // console.log(maxSub([2, 1, 5, 1, 3, 2], 3));

// // let findMaxSlidingWindow = (nums, windowSize) => {
// //   const result = [];
// //   for (let i = 0; i <= nums.length - windowSize; i++) {
// //     const max = findMax(i, windowSize, nums);
// //     result.push(max);
// //   }
// //   return result;
// // };

// // let findMaxSlidingWindow = (nums, windowSize) => {
// //   const result = [];
// //   for (let i = 0; i <= nums.length - windowSize; i++) {
// //     const max = findMax(i, windowSize, nums);
// //     result.push(max);
// //   }
// //   return result;
// // };
// // const findMax = (index, size, array) => {
// //   const result = [];
// //   for (let i = 0; i < size; i++) {
// //     result.push(array[index]);
// //     index += 1;
// //   }
// //   return Math.max(...result);
// //   //return result;
// // };

// // console.log(findMaxSlidingWindow([1,2,3,4,5,6], 3));


// const slide = (arr, k) => {
//     let sumWindow = 0;
//     let sub = [];
//     start = 0;


//     for(let i = 0; i < arr.length; i++){
//         sumWindow += arr[i];
//         if( i >= k -1){
//             sub.push(sumWindow);
//             sumWindow -= arr[start];
//             start += 1;
//         }
//     }
//     return sub;
// }

// console.log(slide([1,2,3,4,5,6], 3))

// // let findMaxSlidingWindow = (k, arr) => {
// //   const result = [];
// //   let windowSum  = 0.0
// //       windowStart = 0
// //   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
// //     windowSum += arr[windowEnd];

// //     if(windowEnd >= k-1) {
// //       result.push(windowSum / k)
// //       windowSum -= arr[windowStart];
// //       windowStart += 1;
// //       }
// //     }
// //     return result;
// //   }

// // console.log(findMaxSlidingWindow(2, [2,4,6]));

// // Given an array of positive numbers and a positive number ‘k,’ 
// // find the maximum sum of any contiguous subarray of size ‘k’.

// // Input: [2, 1, 5, 1, 3, 2], k=3 
// // Output: 9
// // Explanation: Subarray with maximum sum is [5, 1, 3].

// // sol-1-

// // const maxArray = (k, arr) => {
// //   let maxSub = 0;
// //   let maxSum = 0;
// //   for(let i = 0; i < arr.length - k + 1; i++){
// //     maxSum = 0;
// //     for(let j = i; j < i + k; j++) {
// //       maxSum += arr[j];
// //     }
// //      maxSub = Math.max(maxSub,maxSum)
// //   }
// //   return maxSub;
// // }

// // console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));



// //- sol 2---using sliding window.

// // Input: [2, 1, 5, 1, 3, 2], k=3 
// // Output: 9

// // const maxSum = (k, arr) => {
// //   let start = 0
// //   let  windowSum = 0
// //   let  maxSum = 0

// //   for( let i = 0; i < arr.length; i++){
// //     windowSum += arr[i];

// //     if(i >= k - 1){
// //       maxSum = Math.max(maxSum, windowSum);
// //       windowSum -= arr[start];
// //       start += 1;
// //     }
// //   }
// //   return maxSum;
// // }

// //Smallest Subarray With a Greater Sum

// // Input: [2, 1, 5, 2, 3, 2], S=7
// // Output: 2
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// // Input: [2, 1, 5, 2, 8], S=7
// // Output: 1
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// const smallSubArray = (s, arr) => {
//     let minLength = Infinity;
//     let windowSum = 0;
//     let windowStart = 0;
  
//     for(let i = 0; i < arr.length; i++) {
//       windowSum += arr[i];
  
//       while(windowSum >= s) {
//         minLength = Math.min(minLength, i - windowStart + 1);
//         windowSum -= arr[windowStart];
//         windowStart += 1
//       }
//     }
  
//     if(minLength === Infinity) {
//       return 0;
//     }
//     return minLength;
//   }
  
//   console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));
// Remove Duplicates
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

// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

const maxSub = (arr, k) => {
    let sum = 0;
    let windowStart = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i >= k - 1) {
            result = Math.max(sum , result);
            sum -= arr[windowStart];
            windowStart += 1;

        }
    }
    return result;
}
console.log(maxSub([2, 1, 5, 1, 3, 2], 3));
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

const targetSum = (arr,target) => {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        const currentSum = arr[start] + arr[end];
        if (currentSum === target) {
            return [start, end]
        }
        if(target > currentSum){
            start += 1;
        }else{
            end -= 1;
        }
    }
    return[start, end]
}

console.log(targetSum([1, 2, 3, 4, 6], 6));

// Given a list of intervals,
// merge all the overlapping intervals to produce
// a list that has only mutually exclusive intervals.

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// one [1,5].

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start);
  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
};

let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
console.log("Merged intervals :", result);


// DFS
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
