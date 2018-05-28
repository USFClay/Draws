//constructor for Card object
//input the suite h,d,s,c and rank 2-14

//var Card here is unecassary prototype runs off function name remove it an rerun... same result
var Card = function Card(suite, rank) {
    this.Suite= this.setSuite(suite);
    this.Rank= this.setRank(rank);
    //Display is probably unecessaary if this is all its every going to do
    this.Display=this.Suite + this.Rank.toString();

}
//setter method for Suite
Card.prototype.setSuite = function(x) {
    //check to see if the suite is allowed
        if (x==="h"|| x==="d" || x==="s" || x==="c"){
            //this.Suite=x;
          //this is probably not appropriate place for this return
          //every function should return something... so needs reworked.
          return x;
        } else {
            console.log("Error setting suite to "+ x);
            this.Suite=null;
        }
}
//setter method for Rank
Card.prototype.setRank = function(x) {
    //check to see if the rank is in range
    if (x>=2 && x<=14){
        //this.Rank=x;
      //Same as above comment.
      return x;
    } else {
        console.log("Error setting rank to "+ x);
        this.Rank=null;
    }
}

//example fixed function
Card.prototype.better = function(cardRank){
  var rankToReturn;
  if (cardRank>=2 && cardRank<=14){
    rankToReturn = cardRank;
  }else{
    //this is unnecassary as the undefined variable is already undefined
    rankToReturn = null;
  }
  return rankToReturn;
};

Card.prototype.evenBetter = function(cardRank){
  var rankToReturn = (cardRank>=2 && cardRank<=14) ? cardRank : null;
  return rankToReturn;
};

Card.prototype.betterYet = (cardRank) => {
  return (cardRank>=2 && cardRank<=14) ? cardRank : null;
};

var a = new Card("h",2);

console.log('##############');
console.log(a.better(10));
console.log(a.evenBetter(11));
console.log(a.betterYet(12));
console.log(a.betterYet(15));
console.log('##############');


console.log(a);
console.log(a.Suite);
console.log(a.Rank);
console.log(a.Display);


