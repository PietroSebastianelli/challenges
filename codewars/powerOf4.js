function powerOf4(n) {
  if (typeof(n) != 'number')
    return false;
  let x = 1;
  while(x <= n){
    if (x == n)
      return true;
    else x *= 4;
  }
  return false;
  
}
