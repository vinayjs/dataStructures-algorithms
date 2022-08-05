// // WAP to check if a string is pailndrome.
// 454
// check if number is palidrome
//  - reverse a number
//   - take out individual digits (using modulus)
//   - reconstruct the number in reverse

const test = num => {
    let result = 0
    temp = num
    while (temp > 0) {
      digit = temp % 10
      result = result * 10 + digit
      temp = parseInt(temp/10)
    }
    if(result == num){
        console.log("The number is palindrome")
    }else{
        console.log("not palindrome")
    }
    console.log(temp)
  }
  
  test(123);