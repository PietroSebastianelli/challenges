function encodeCD(n){
    let bin = n.toString(2);
    bin = bin.padStart(8,'0');
    let pitlands = ['P'];
    for (let i = 0; i < 8; i++){
        if (bin[8-i-1]=='1'){
            if (pitlands[pitlands.length-1] == 'P') pitlands.push('L');
            else pitlands.push('P');

        }
        else pitlands.push(pitlands[pitlands.length-1]);
    }


    return pitlands.join('');
}
