var isPalindrome = function(s) {
    const regex = /[^A-Za-z0-9]/g;
    const t = s.replace(regex, '').toLowerCase();
    const n = t.length;
    for (let i = 0; i < (n/2); i++)
    {
        if (t[i] !== t[n-i-1])
            return false;
    }
    return true;

};
