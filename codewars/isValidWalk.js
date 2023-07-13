function isValidWalk(walk){
    if (walk.length != 10) return false;
    if (walk.filter(c => c=='e').length != walk.filter(c => c=='w').length) return false;
    if (walk.filter(c => c=='n').length != walk.filter(c => c=='s').length) return false;
    return true;
}