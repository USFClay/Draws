//constructor for Card object
//input the suite h,d,s,c and rank 2-14
var Card = function (suit, rank) {
    this.Suit = suit;
    this.Rank = rank;
    this.Display = rank + suit;
};

//cardStack can function as a hand, deck, or community cards
//It contains a card array and functions for moving cards in and out
var cardStack = function () {
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
        return this.Cards.splice(indexToReturn, 1);
    };
};

var game = function () {
    this.hand = new cardStack();
    this.flop = new cardStack();
    this.turn = new cardStack();
    this.river = new cardStack();
};

exports.Card = Card;
exports.cardStack = cardStack;
exports.game = game;