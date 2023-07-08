function validatePIN (pin) {
    let digits = pin.split('');
    if (digits.length != 4 && digits.length != 6) return false;
    let alldigits = ['1','2','3','4','5','6','7','8','9','0'];
    
    let filtered = digits.filter(x => alldigits.includes(x));
    return filtered.length == digits.length; 
  }