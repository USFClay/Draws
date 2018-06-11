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

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    // Database Name
    const dbName = 'Draws'; //db name
    const collection = 'testDraw'; //collection name
    const db = client.db(dbName); //db name
    const col = db.collection(collection); //collection name
    //create bulk operation to improve speed
    //dumpCounter is variable to count the number of bulk dumps into mongo
    var dumpCounter = 0;

    //dumpCycles is variable that holds the number of bulk dumps into mongo desired
    var dumpCycles = 20;

    //gameCount sets how many games are dealt before each bulkinsert is executed
    //total records executed will be gameCount * dumpCycles
    var gameCount = 5000;

    //variables to track insert stats
    var toInsert = 0;
    var actualInsert = 0;

    //loop array is function that calls itself until the number of dumps
    //into mongo db cotnrolled via x is done. Pass in callback function that recalls
    //the loop only when the batch opertion is done from the previous cycle
    var loopArray = function (arr) {
        bulkData(function () {
            // set x to next item
            dumpCounter++;

            // stop after set number of dumps
            if (dumpCounter < dumpCycles) {
                loopArray(arr);

            }
        });
    };

    //this function creates the data and does the bulk instert into mongo.
    //it has callback that is exexuted once the cycle is done
    function bulkData(callback) {
        var bulk = col.initializeUnorderedBulkOp();
        //create the data
        for (var i = 0; i < gameCount; i++) {
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

            //push object into bulk for upload
            bulk.insert(currentGame);
        }
        //count the number of uploads and complete the bulk insert
        toInsert += gameCount;
        bulk.execute(function (error, result) {
            //log actual inserts
            actualInsert = 2;
            console.log('this is happening');
            //actualInsert+parseInt(result.nInserted)
        });
        // do callback when bulk is done
        callback();
    }

    //start the loop wait for bulkinsert before next cycle
    loopArray(dumpCounter);

    client.close();//close db
    console.log("Connected successfully ended");
    console.log('required inserts: ' + toInsert);
    console.log('acutual inserts: ' + actualInsert);
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










