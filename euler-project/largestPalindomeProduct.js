//find largest palindrome number st is the product of two 3 digit numbers
// brute force approach

function isPalindrome(n){
    let digits = n.toString().split('');
    let l = digits.length;
    for (let i = 0; i < Math.floor(l/2)+1; i++){
        if (digits[i]!=digits[l-1-i]) return false;
    }
    return true;
}
let largest = 0;
for (let i = 100; i < 1000; i++){
    for (let j = 100; j < 1000; j++){
        if (isPalindrome(i*j)) largest = Math.max(largest,i*j);
    }
}
console.log(largest);