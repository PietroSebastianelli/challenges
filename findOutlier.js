function findOutlier(integers){
    let parity = 0;
    
    if ((integers[0]+integers[1])%2) parity = integers[2]%2;
    else parity = integers[0] % 2;
    return integers.filter(x => Math.abs((x%2))!= Math.abs(parity))[0];
}


console.log(findOutlier([1,1,0,1,1]))