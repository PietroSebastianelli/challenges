var mySqrt = function(x) {
    if ( x == 0 || x == 1)
        return x;
    let upper = x-1;
    let lower = 1;
    let middle, midSquare;
    while ( (upper - lower) > 1)
    {
        middle = (upper + lower) / 2;
        midSquare = middle * middle;

        if (midSquare > x)
        {
            upper = Math.ceil(middle);
        }
        else if ( midSquare < x)
        {
            lower = Math.floor(middle);
        }
        else
        { 
            return middle;
        }
    }
    return lower;
    
};
