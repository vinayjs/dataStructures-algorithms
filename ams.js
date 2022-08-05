// 153 => (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

//IS THIS AAN AMSTRONG NUMBER ?


const ams = (n) => {
    let result = 0;
    let temp = n;
    while(temp > 0) {
        let digit = temp % 10;
        result += digit**3;
        temp = parseInt(temp/10);
    }
    if(result == n){
        console.log("The number is  amstrong")
    }else{
        console.log("not amstrong")
    }
    console.log(result);
}

//ams(153);
//ams(155);
//ams(371);
