function expand(sequence,n){
    let expandedSequence = [];
    let count = 1, j=0;
    for (let i=0; i < sequence.length; i++){
        if (j > n+1) return expandedSequence;
        let offset = sequence[i]; 
        let stop = j + offset;

        while (j < stop){
            expandedSequence[j++] = count++;
        }
        expandedSequence[j++] = offset;
    }
    return expandedSequence;

}

function a112382(n) {
    seq = [1, 1, 2, 1, 3, 4, 2, 5, 1, 6, 7, 8, 3, 9, 10, 11, 12, 4, 13, 14, 2, 15, 16, 17, 18, 19, 5, 20];
    while (n >= seq.length){
        seq = expand(seq,n);
    }
    return seq[n];
}

let n = 100000;
console.log(a112382(n));