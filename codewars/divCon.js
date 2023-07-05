function divCon(x){
    return x.reduce((acc,curr) => typeof(curr)!=='string' ? acc + curr : acc - parseInt(curr),0);
}