var isPalindrome = function(x) {
    let digits = x.toString().split('');
    let l = digits.length;
    let n = l / 2;
    l
    for (let i = 0; i < n; i++){
        if (digits[i] != digits[l-i-1])
            return false;
    }
    return true;

};
