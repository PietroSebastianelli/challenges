function XO(str) {
    let letters = str.toLowerCase().split('');
    counter = 0;
    for (c of letters){
        if (c == 'x') counter++;
        if (c == 'o') counter--;
    }
    return !Boolean(counter);
}
