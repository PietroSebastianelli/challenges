function narcissistic(num){
    let digits = num.toString().split('').map( x => parseInt(x));  
    let n = digits.length;
    if (num == digits.reduce((acc, a) => acc + a**n, 0)) return true;
    else return false;     
}

console.log(narcissistic(153))