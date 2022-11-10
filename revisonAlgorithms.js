// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// output: [ 2.2, 2.8, 2.4, 3.6, 2.8 ]

const average = (arr, k) => {
    let n = arr.length;
    result = []
    sum  = 0;
    windowStart = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i] 
        if (i >= k-1) {
            result.push(sum / k);
            sum -= arr[windowStart];
            windowStart += 1;

        }
    }
    return result;
}

console.log(average([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
