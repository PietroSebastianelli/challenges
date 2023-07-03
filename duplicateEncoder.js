function duplicateEncode(word){
    word = word.toLowerCase();
    word = word.split('');
    let encoded = [];
    for (let i = 0; i< word.length; i++){
        let word2 = word.slice();
        word2.splice(i,1);
        if (word2.includes(word[i])) encoded[i]=')';
        else encoded[i] = '(';
    }
    return encoded;
}
console.log(duplicateEncode('Success'));


//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 