/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//pull in required files
const Card = require("./Card");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL for database
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Draws';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    insertDocuments(db, "testDraw", [{a: 1}], function () {
        client.close();
    });

});

//define insert function for inserting into specified collection
const insertDocuments = function (db, coll, doc, callback) {
    // Get the documents collection
    const collection = db.collection(coll);
    // Insert some documents
    collection.insert(doc, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        callback(result);
    });
};




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






