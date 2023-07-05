function multiplesOf3and5(number) {
  let acc = 0;
  for (let i = 3; i < number; i++ ){
    if (!(i%3 && i%5)) acc +=i; 
  }
  return acc;
}
