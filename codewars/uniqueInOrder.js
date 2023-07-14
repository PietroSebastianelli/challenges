var uniqueInOrder=function(iterable){
    if (iterable.length == 0) return [];
    let unique = [iterable[0]];
    for(let i=1; i < iterable.length; i++){
        if(iterable[i] != iterable[i-1]) unique.push(iterable[i]);
    }
    return unique;
}