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

//cardStack can function as a hand, deck, or community cards
//It contains a card array and functions for moving cards in and out
function cardStack() {
//array that contains all Card objects in the stack
    this.Cards = [];
    //method to fill Cards array with standard 52 count card deck
    this.fillDeck = function () {
        var stack = [];
        var suits = ["h", "d", "s", "c"];
        var rankBottom = 2;
        var rankTop = 14;
        suits.forEach(function (suitEl) {
            for (var i = rankBottom; i <= rankTop; i++) {
                var c = new Card(suitEl, i);
                stack.push(c);
            }
        });
        this.Cards = stack;
    };
    //return a random card from Cards and remove that card from cards
    this.dealRandom = function () {
        var topNum = this.Cards.length;
        var indexToReturn = Math.floor(Math.random() * topNum);
        return this.Cards.splice(indexToReturn,1);
    }
}


var a = new cardStack;
//a.fillDeck();
console.log(a.Cards.length);
console.log(a.dealRandom());
console.log(a.Cards.length);
console.log(a.Cards);