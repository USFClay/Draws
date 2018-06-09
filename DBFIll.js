/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const Card = require("./Card");


//deal some hands 
var hand = new Card.cardStack();
var deck = new Card.cardStack();
var board = new Card.cardStack();
deck.fillDeck();


hand.Cards.push(deck.dealRandom());
hand.Cards.push(deck.dealRandom());
board.Cards.push(deck.dealRandom());
board.Cards.push(deck.dealRandom());
board.Cards.push(deck.dealRandom());
board.Cards.push(deck.dealRandom());
board.Cards.push(deck.dealRandom());






