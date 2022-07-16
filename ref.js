// --Reverse a string--


// function rev(str){
//  return str.split('').reverse().join('')
// }

// console.log(rev('vinay'));

// const val = "vinay";
// const rev = (str)=>{
// let res = '';
// for (let i = 0; i<str.length; i ++){
//     const char = str[i];
//     res = char + res;
// }
// return res;

// }
// console.log(rev(val));


//--PALINDROME--

// const pal = (str)=>{
//     const rev = str.split('').reverse().join('');
//     if(str === rev){
//         console.log ("The given string is palindrome")
//     }else { 
//         console.log("This is not a palindrome")
//     }
// }


// console.log(pal('dad'));
// console.log(pal('nam'));


// --Reverse an integer--

// const rev = (val)=>{
   
//     let reversed = val.toString().split('').reverse().join('')
//     reversed = parseInt(reversed);
  
//     if(val<0){
//         return reversed* -1;
//     }
//     return reversed;
   
// }

// console.log(rev(-32));
// console.log(rev(52));


//-- RETURN THE CHARACTER MOST COMMONLY REPEATED IN THE STRING

// const maxChar = (str)=>{
//     let charObj = {};
//     let maxChar = '';
//     let maxCount = 0;
  
//     for(let char of str){
        

//         charObj[char] = charObj[char] +1 || 1;

//         if(charObj[char] > maxCount){
//             maxChar = char;
//             maxCount = charObj[char];
//         }
//     }
//     //return charObj;
//     return maxChar;

// }

// console.log(maxChar("1337"));
// console.log(maxChar("yxxyxyy"));


// //--DIVISBLE-fizzbuzz--

// const diviSble= (x)=>{
// for (let i = 0; i <= x ; i ++){
//     if(i % 2===0 && i % 5===0){
//         console.log("FizzBuzz") 
//     }else if( i % 5===0){
//         console.log ("fizz")
//     }else if( i % 2===0){
//         console.log("Buzz") 
//     }else{
//         console.log(i)
//     }
// }};


// console.log(diviSble(10));

//--Catilize the firstletter of each word in the array


const capitalize= (str)=>{
    const arrOfWords = str.split(' ');
    const arrOfWordsCased = [];

    for(let i = 0 ; i <arrOfWords.length ; i++){
        const word = arrOfWords[i];
        arrOfWordsCased.push(word[0].toUpperCase()+ word.slice(1).toLowerCase());
    }
    return arrOfWordsCased.join(' ');
}

console.log(capitalize("i am vinay"));

