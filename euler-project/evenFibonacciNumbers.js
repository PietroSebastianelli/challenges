let n = 4000000;
let fibo = [1,1,2];
let acc = 0;
while(fibo[2]<=n){
    if (fibo[2]%2 == 0) acc += fibo[2];
    fibo[0]=fibo[1];
    fibo[1]=fibo[2];
    fibo[2]=fibo[0]+fibo[1];
}
console.log(acc);