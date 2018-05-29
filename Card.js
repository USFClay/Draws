//constructor for Card object
//input the suite h,d,s,c and rank 2-14
function Card(suite, rank) {
    this.Suite= this.setSuite(suite);
    this.Rank= this.setRank(rank);
    this.Display=this.Suite + this.Rank.toString();
}

//setter method for Suite
Card.prototype.setSuite = function(cardSuite) {
    //check to see if the suite is allowed
        return (cardSuite==="h"|| cardSuite==="d" || cardSuite==="s" || cardSuite==="c") ? cardSuite : null;
};
//setter method for Rank
Card.prototype.setRank = (cardRank) => {
    //check to see if rank in range
    return (cardRank>=2 && cardRank<=14) ? cardRank : null;
};

var a = new Card("h",2);

console.log(a);
console.log(a.Suite);
console.log(a.Rank);
console.log(a.Display);


