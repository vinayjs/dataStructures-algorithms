//   1
//   1 2
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5


// const out = (num) => {
//     for(let i = 1; i <= num; i++){
//         result = ""
//         for(let j = 1; j <= i; j++){
//             result += j + " ";
//         }
//         console.log(result);
//     }
// }
// out(5);


//====================QUESTION-2===================================================

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// const num = (n) => {
//     for(let i = n; i >= 1; i--){
//         result = "";
//         for(let j = i; j >= 1; j--){
//             result += j +" ";
//         }
//         console.log(result);
//     }
// }

// num(5);

//====================QUESTION-3===================================================
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// const num = (n) => {
//     let counter = 1;
//     for(let i = 1; i <= n; i++){
//         let result = ""
//         for(let j = 1; j <= i; j++){
//             result += counter + " ";
//             counter++
//         }
//         console.log(result);
//     }
// }

// num(5);

//====================QUESTION-4===================================================
// 1
// 1 2
// 1 2 3
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// const num = (n) => {
//     for(let i = 1; i <= n; i++){
//         result = ""
//         for(j = 1; j <= i; j++){
//             result += j + " "
//         }
//         console.log(result);
//     }
//     for(let i = n-1; i >= 1; i--){
//         result = "";
//         for(let j = 1; j <= i; j++ ){
//             result += j + " ";
//         }
//         console.log(result);
//     }
// }

// num(5);

//====================QUESTION-4===================================================
// Write a program to check if a number is pailndrome.

// input = 121;
// output = true;


const num = (n) => {
    let temp = n;
    let result = 0;

    while(temp > 0){
        let digit = temp % 10;
        result = result * 10 + digit
        temp = parseInt(temp/10);
    }
    if(result == n){
        console.log("The number is palindrome")
    }else[
        console.log("It is not palindrome")
    ]
    console.log (result);
}

//num(121);
num(123);