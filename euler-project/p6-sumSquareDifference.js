const n = 100;
let sumOfSquares = 0;
for (let i = 1; i <= n; i++)
{
    sumOfSquares += i*i;
}
let squareOfSum = 0;
for (let i = 1; i <=n; i++)
{
    squareOfSum += i;
}
squareOfSum = squareOfSum*squareOfSum;

console.log(squareOfSum - sumOfSquares);