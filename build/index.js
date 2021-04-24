"use strict";
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter(collection) {
        this.collection = collection;
    }
    BubbleSorter.prototype.sort = function () {
        console.log('... sort() ...');
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return BubbleSorter;
}());
var bubbleSorter = new BubbleSorter([5, -7, 10, -8, 0, 25]);
console.log("Initial value: " + bubbleSorter.collection);
bubbleSorter.sort();
console.log("Bubble sorted: " + bubbleSorter.collection);
