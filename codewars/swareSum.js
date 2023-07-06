function squareSum(numbers){
    return numbers.reduce( (acc,x) => acc + x**2, 0);

}
console.log(squareSum([1,2,2,2,2,2]));