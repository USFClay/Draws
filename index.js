/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Card = require("./Card");

var deck = new Card.cardStack();
deck.fillDeck();

console.log(deck.Cards.length);

var hand = new Card.cardStack();
hand.Cards.push(deck.dealRandom());
hand.Cards.push(deck.dealRandom());
console.log(hand.Cards.length);

console.log(deck.Cards.length);

console.log(deck.Cards);
console.log(hand.Cards);
