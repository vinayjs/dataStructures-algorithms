// DFS
//Given a binary tree, populate an array to represent its level-by-level traversal.
//You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const traverse = (root) => {
//   result = [];
//   if (root === null) {
//     return result
//   }
//   const queue = []
//   queue.push(root)
//   while(queue.length > 0){
//     const levelSize = queue.length;
//     currentLevel = [];
//     for (let i = 0; i < levelSize; i++) {
//         currentNode = queue.shift();
//         currentLevel.push(currentNode.val)

//         if(currentNode.left !== null) {
//             queue.push(currentNode.left)
//         }
//         if(currentNode.right !== null) {
//             queue.push(currentNode.right)
//         }
//     }
//     result.push(currentLevel);
//   }
//   return result;
// };

// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Level order traversal: ${traverse(root)}`);

// Question - 2
// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const traverse = (root) => {
//   result = [];
//   if (root === null) {
//     return result
//   }
//   const queue = []
//   queue.push(root)
//   while(queue.length > 0){
//     const levelSize = queue.length;
//     currentLevel = [];
//     for (let i = 0; i < levelSize; i++) {
//         currentNode = queue.shift();
//         currentLevel.push(currentNode.val)

//         if(currentNode.left !== null) {
//             queue.push(currentNode.left)
//         }
//         if(currentNode.right !== null) {
//             queue.push(currentNode.right)
//         }
//     }
//     result.unshift(currentLevel);
//   }
//   return result;
// };

// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Level order traversal: ${traverse(root)}`);


// Question -3
// Given a binary tree, populate an array to represent its zigzag level order 
// traversal. 
// from left to right then from right to left.


// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }



// const traverse = (root) => {
//   let result = [];
//   if (root === null) {
//     return result
//   }
//   let queue = [];
//   queue.push(root);
//   leftToRight = true;
//   while(queue.length > 0) {
//     const levelSize = queue.length;
//     let currentLevel = []
//     for (let i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();
//       if(leftToRight) {
//         currentLevel.push(currentNode.val)
//       }else {
//         currentLevel.unshift(currentNode.val)
//       }
//       if(currentNode.left !== null) {
//         queue.push(currentNode.left)
//       }
//       if(currentNode.right !== null) {
//         queue.push(currentNode.right)
//       }
//     }
//     result.push(currentLevel)
//     leftToRight = !leftToRight
//   }
  
//   return result;
// };


// var root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// root.right.left.left = new TreeNode(20)
// root.right.left.right = new TreeNode(17)
// console.log(`Zigzag traversal: ${traverse(root)}`)

// Question - 4
// Given a binary tree, 
// populate an array to represent the averages of all of its levels.


// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null; 
//   }
// };

// const find_level_averages = (root) => {
//   let result = [];
//   if(root ===  null) {
//     return result;
//   }
//   const queue = [];
//   queue.push(root);
//   while(queue.length > 0) {
//     let levelSize = queue.length,
//       levelSum = 0.0;
//       for (let i = 0; i < levelSize; i++) {
//         currentNode = queue.shift();
//         levelSum += currentNode.value
//       }
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left)
//       }
//       if(currentNode.right !== null) {
//         queue.push(currentNode.right)
//       }
//       result.push(levelSum/levelSize)
//   }

//   return result;
// };


// var root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.left.right = new TreeNode(2)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)

// console.log(`Level averages are: ${find_level_averages(root)}`)

// Question - 5
// Find the minimum depth of a binary tree. 
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

// class TreeNode {

//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null; 
//   }
// };


// const findMinDepth = (root) => {
//   if (root === null) {
//     return 0;
//   }
//   const queue = [];
//   queue.push(root);
//   let minTreeDepth = 0;
//   while (queue.length > 0) {
//     minTreeDepth += 1;
//     levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();

//       if (currentNode.left === null && currentNode.right === null) {
//         return minTreeDepth;
//       }
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//     }
//   } 
  
// };



// var root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// console.log(`Tree Minimum Depth: ${findMinDepth(root)}`)
// root.left.left = new TreeNode(9)
// root.right.left.left = new TreeNode(11)
// console.log(`Tree Minimum Depth: ${findMinDepth(root)}`)

// Question - 6
// Given a binary tree and a node, find the level order successor of the given node in the tree. 
// The level order successor is the node that appears right after the given node in the level order traversal.

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null; 
//   }
// };


// const findSuccessor = (root, key) => {
//   if (root === null){
//     return null
//   }
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     currentNode = queue.shift();
//     if (currentNode.left !== null) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right !== null) {
//       queue.push(currentNode.right)
//     }
//     if (currentNode.val === key) {
//       break;
//     }
//   }
//   // if(queue.length > 0) {
//   //   return queue.peek();
//   // }
//   // return null;
// };



// const root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// root.left.left = new TreeNode(9)
// root.right.left.left = new TreeNode(11)

// console.log(findSuccessor(root, 10))