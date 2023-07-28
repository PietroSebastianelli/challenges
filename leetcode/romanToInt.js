var romanToInt = function(s) {
    const roman ={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 
    };
    const letters = s.split('');
    const n = letters.length;
    let sum = 0;
    for (let i = 0; i < n-1; i++)
    {
        if(roman[letters[i]] < roman[letters[i+1]])
            sum -= roman[letters[i]];
        else
            sum += roman[letters[i]];        
    }
    sum += roman[letters[n-1]];

    return sum;


};
