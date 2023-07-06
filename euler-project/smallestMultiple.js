function gcd(n,m) {
    let a = Math.max(n,m);
    let b = Math.min(n,m);
    let r = 0, q=0;
    while (a != b){
        q = Math.floor(a/b);
        console.log(q);
        r = a - b*q;
        if (r==0) return b;
        a = b;
        b = r;
    }
    return a;
}
let num = 2;
for (let i = 2; i <= 20; i++){
    num = num * i / gcd(num,i);
}
console.log(num);