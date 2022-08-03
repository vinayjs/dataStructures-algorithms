// How to solve a problem ?

// 1. Don't Panic.
// 2. Write the Input.
// 3. Write the output.
// 4. Write the examples of input and output.
// 5. Think how a human will solve manually.
// 6. Write algorithms/pseudocode.
// 7. Write functions.
// 8. Write line by line.
// 9. Test line by line.
// 10. Refactor if needed.

// *
// * *
// * * *
// * * * *
// * * * * *

// 1. first draw a star on the first line.
// 2. Draw two stars on the second line.
// n. Draw "n" stars on "nth" line.

// function generatePattern(lineNum) {
//   for (let i = 1; i <= lineNum; i++) {
//     let output = "";
//     for (let j = 1; j <= i; j++) {
//       //
//       output += "* ";
//     }
//     console.log(output);
//   }
// }

// generatePattern(1);

//--------------------------------------------------------------------------------------------

//-----------------------------------QUESTIONS------------------------------------------------

//   x
//  x  x
// x    x
//  x  x
//   x

//         1
//       2 1 2
//     3 2 1 2 3
//   4 3 2 1 2 3 4
// 5 4 3 2 1 2 3 4 5
//   4 3 2 1 2 3 4
//     3 2 1 2 3
//       2 1 2
//         1


// Write a program to check if a number is pailndrome.
// WAP to check if a string is pailndrome.
// WAP to check if a number is amstrong.(153- is an amstrong number)
// WAP to print "n" fibonacci numbers.
// WAP to swap two numbers without using temporary variable.

// --------------------------SOULTIONS-------------------------------------------------------

//--------------------------------------------------------------------------------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// function pattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     for (let j = 1; j <= i; j++) {
//        output = output + " " + j;
//     }
//   console.log(output);
//   }
// }

// // pattern(4);
// pattern(10);

//--------------------------------------------------------------------------------------------


// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// function pattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     for (let j = 1; j <= n - i + 1; j++) {
//       output += (n - j - i + 2) + " ";
//     }
//     console.log(output);
//   }
// }

// function test(n) {
//   for(let i = 5; i >= 1; i--) {
//     let out = ""
//     for(let j = i; j >= 1; j--){
//       out += j + " ";
//     }
//     console.log(out);
//   }
// }

 //test(5);
// //pattern(10);

//--------------------------------------------------------------------------------------------

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let counter = 1;
// function pattern(num) {
//   for(let i = 1; i <= num; i++){
//     let string = "";
//     for(let j = 1; j <= i; j++){
//       string += counter + " "
//       counter++
//     }
//   console.log(string);
//   }
// }

// pattern(5);

//--------------------------------------------------------------------------------------------


// 1
// 1 2
// 1 2 3
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// function pattern(num) {
//   for (let i = 1; i <= num; i++) {
//     let output = "";
//     for (let j = 1; j <= i; j++) {
//       output += j + " ";
//     }
//     console.log(output);
//   }
//   for (let i = 1; i <= num - 1; i++) {
//     let output = "";
//     for (let j = 1; j <= num - i; j++) {
//       output += j + " ";
//     }
//     console.log(output);
//   }
// }

// pattern(5);

//--------------------------------------------------------------------------------------------


//   x
//  x  x
// x    x
//  x  x
//   x

// for(let i = 1; i <= 3; i++){
//   result = ""
//   for(let j = 1; j <= 3; j++){
//     if((i === 1 && (j === 1 || j === 3))){
//     result += " "
//     }else {
//     result += "*"
//     }
//   }
//   console.log(result);
// }

for(let i = 1; i <= 5; i++){
  result = ""
  for(let j = 1; j <= i; j++){
    result += "*" + " "  
  }
  console.log(result);
}



