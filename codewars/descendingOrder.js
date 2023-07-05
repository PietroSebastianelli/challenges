function descendingOrder(n){
    let digits = n.toString().split('').map(Number);
    let sortedDigits = digits.sort((a,b)=>b-a);
    sortedDigits = sortedDigits.map(x => x.toString());
    return Number(sortedDigits.join(''));
}


