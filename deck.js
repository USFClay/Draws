class Deck {
  constructor(){
    this.cards = this._getCards();
  }
  _getCards(){
    var cards = [];
    var suites = ["h", "d", "s", "c"];
    var rankBottom = 2;
    var rankTop  = 14;

    suites.forEach(function(suiteEl){
      for(var i = 0; i <= rankTop; i++){
        if(i >= rankBottom){
          cards.push({"suite": suiteEl, "rank": i});
        }
      }
    });
    return cards;
  }

  getRandomCard(){
    var topNum = this.cards.length;
    var indexToReturn = Math.floor(Math.random() * topNum) + 1;
    return this.cards[indexToReturn];
  }
}

var myDeck =  new Deck();

// console.log(myDeck.cards);
console.log(myDeck.getRandomCard());
