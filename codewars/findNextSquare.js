function findNextSquare(n){
    let k = Math.sqrt(n);
    if (!Number.isInteger(k))
        return -1;
    else 
        return (k+1)**2;
}