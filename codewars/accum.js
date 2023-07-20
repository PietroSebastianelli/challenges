function accum(s) {
	let t = s.toUpperCase();
  let n = s.length;
  let res = "";
  for ( let i = 0; i < n; i++){
    res+= t[i];
    for( let j = 0; j < i; j++){
      res += t[i].toLowerCase();
    }
    if (i < n-1)
      res += '-';
  }
  return res;
}
