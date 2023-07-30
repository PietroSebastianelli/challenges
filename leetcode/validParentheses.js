var isValid = function(s) {
    let brackets = [];
    let x;
    for (const a of s)
    {
        if (a == '(' || a == '[' || a == '{')
            brackets.push(a);
        else
        { 
            if (a == ')')
                x = '(';
            if (a == ']')
                x = '[';
            if (a == '}')
                x = '{'
            if (x != brackets.pop())
                return false;
        }
    }
    if (brackets.length == 0)
        return true
    return false;
};


console.log(isValid('[()]'));