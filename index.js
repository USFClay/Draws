//constructor for Card object
//input the suite h,d,s,c and rank 2-14
var Card = function Card(suite, rank) {
    this.Suite= this.setSuite(suite);
    this.Rank= this.setRank(rank);
    this.Display=this.Suite + toString(this.Rank);
       
}
//setter method for Suite
Card.prototype.setSuite = function(x) {
    //check to see if the suite is allowed
        if (x==="h"|| x==="d" || x==="s" || x==="c"){
            this.Suite=x;
        } else {
            console.log("Error setting suite to "+ x);
            this.Suite=null;
        }
}
//setter method for Rank
Card.prototype.setRank = function(x) {
    //check to see if the rank is in range
    if (x>=2 && x<=14){
        this.Rank=x;
    } else {
        console.log("Error setting rank to "+ x);
        this.Rank=null;
    }
}

var a = new Card("h",2);
console.log(a.Suite);
console.log(a.Rank);
console.log(a.Display);


