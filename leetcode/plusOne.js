var plusOne = function(digits) {
    let n = digits.length;
    let i = n - 1;
    while (i >= 0)
    {
        digits[i]+=1;
        if (digits[i] > 9)
            digits[i--] = 0;
        else
            return digits;
    }
    if (digits [0] == 0)
        return ([1].concat(digits))
    return digits;
    
};
