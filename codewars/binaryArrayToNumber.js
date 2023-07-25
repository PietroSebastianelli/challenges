const binaryArrayToNumber = arr => {
  let n = arr.length;
  let m = 0;
  for (let i = 0; i < n; i++)
  {
    m += (2**(n-1-i))*arr[i]
  }
  return m;
};
