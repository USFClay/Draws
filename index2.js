class Card {
  constructor(suite, rank){
    this.suite = this._setSuite(suite);
    this.rank = this._setRank(rank);
  }

  _setSuite(suite){
    return (suite==="h"|| suite==="d" || suite==="s" || suite==="c")? suite : null;
  }

  _setRank(rank){
    return (rank>=2 && rank<=14) ? rank : null;
  }

}

var newCard = new Card("h",2);

console.log(newCard);
//will do nothing since the the setFunction is called from constructor
//this prevents card from being changed after the fact... if you need to
// the set function will have to set the this.suite and rank directly
newCard._setRank(3);
console.log(newCard);