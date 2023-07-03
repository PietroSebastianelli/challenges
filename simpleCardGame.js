function winner(deckSteve, deckJosh) {
    deckSteve = deckTranslate(deckSteve).map(Number);
    deckJosh = deckTranslate(deckJosh).map(Number);
    winsJosh = 0;
    winsSteve = 0;
    for (let i = 0; i<deckSteve.length; i++){
        if (deckJosh[i] > deckSteve[i]) winsJosh++;
        if (deckSteve[i] > deckJosh[i]) winsSteve++;
    }
    if (winsJosh > winsSteve) return `Josh wins ${winsJosh} to ${winsSteve}`;
    if (winsSteve > winsJosh) return `Steve wins ${winsSteve} to ${winsJosh}`;
    else return "Tie";

}
function deckTranslate(deck){
    for (i=0; i < deck.length; i++){
        if (deck[i]=='T')   deck[i]= '10';
        if (deck[i]=='J')   deck[i]= '11';
        if (deck[i]=='Q')   deck[i]= '12';
        if (deck[i]=='K')   deck[i]= '13';
        if (deck[i]=='A')   deck[i]= '14';
}
return deck;
}

let deckSteve = ["K","2","4","5","4","3","2","K","A","T"];
let deckJosh = ["Q","3","4","6","4","3","5","A","8","7"];
console.log(winner(deckSteve,deckJosh));
