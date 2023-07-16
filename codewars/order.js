function findNumber(word){
    return word.split('').filter(x => !isNaN(x))[0];
}

function order(string){
    if (string == '') return '';
    let words = string.split(' ');
    words.sort((a,b)=>findNumber(a)-findNumber(b));

    return words.join(' ');
}
