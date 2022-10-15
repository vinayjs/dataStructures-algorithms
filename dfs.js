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

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const findPaths = (root, sum) => {
    allPaths = [];
    deQue = [];
    findPathRecursive(root, sum, deQue, allPaths);
    return allPaths;
  };

  const findPathRecursive = (currentNode, sum, currentPath, allPaths) => {
    if (currentNode === null) {
        return;
    }
    currentPath.push(currentNode.val);
    if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
        allPaths.push(currentPath);
    }else {
        findPathRecursive(currentNode.left, sum - currentNode.val, currentPath, allPaths)
        findPathRecursive(currentNode.right, sum - currentNode.val, currentPath, allPaths)
    }
    currentPath.pop();
  }
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  sum = 23
  console.log(`Tree paths with sum: ${sum}: ${findPaths(root, sum)}`)