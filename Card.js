//constructor for Card object
//input the suite h,d,s,c and rank 2-14
function Card(suit, rank) {
    this.Suit = suit;
    this.Rank = rank;
    this.Display = rank + suit;
}




//suit validation method that will return the valid suit or null
function suitValidate(cardSuit) {
    return (cardSuit === "h" || cardSuit === "d" || cardSuit === "s" || cardSuit === "c") ? cardSuit : null;

}
//rank validation methid that will return the valid rank or null
function rankValidate(cardRank) {
    return (cardRank >= 2 && cardRank <= 14) ? cardRank : null;

}




