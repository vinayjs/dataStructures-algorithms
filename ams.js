// 153 => (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

//IS THIS AAN AMSTRONG NUMBER ?


const ams = (n) => {
    let result = 0;
    let temp = n;
    let len = (""+ temp).length;
    while(temp > 0) {
        let digit = temp % 10;
        result += digit**len;
        temp = parseInt(temp/10);
    }
    if(result == n){
        console.log("The number is  amstrong")
    }else{
        console.log("not amstrong")
    }
    console.log(result);
}

//ams(1634);
// ams(155);
// ams(371);
ams(133);

