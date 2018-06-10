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
const dbName = 'Draws'; //db name

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName); //db name
    const col = "testDraw"; //collection name
    //create bulk operation to improve speed
    var bulk = db.testDraw.initializeUnorderedBulkOp();
    for (var i = 0; i < 10000; i++) {
        var deck = new Card.cardStack();
        deck.fillDeck();
        var currentGame = new Card.game();
        currentGame.hand.Cards.push(deck.dealRandom());
        currentGame.hand.Cards.push(deck.dealRandom());
        currentGame.flop.Cards.push(deck.dealRandom());
        currentGame.flop.Cards.push(deck.dealRandom());
        currentGame.flop.Cards.push(deck.dealRandom());
        currentGame.turn.Cards.push(deck.dealRandom());
        currentGame.river.Cards.push(deck.dealRandom());

        //push object into db
        bulk.insert(currentGame);
    }
    
    bulk.execute();
    //close db
    client.close();
    console.log("Connected successfully ended");

});

//define insert function for inserting into specified collection
const insertDocuments = function (db, coll, doc) {
    // Get the documents collection
    const collection = db.collection(coll);
    // Insert some documents
    collection.insert(doc, function (err, result) {
        assert.deepEqual(err, null);
        assert.deepEqual(1, result.result.n);
        assert.deepEqual(1, result.ops.length);

    });
};










