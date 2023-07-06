let n = 600851475143; // find the largest prime divisor
let m = n;
let largest = 1;
for (let i =2 ; i <= m; i++ ){      // the worst case scenario is that n = p * 2; where p is a prime.
    while( m % i == 0){              // there's no need to distinguish between primes and non primes, its easy to prove that if m mod i = 0, then i is prime.
        m /= i;
        largest = i;
        console.log(i);
    }
}
console.log(largest);