"use strict";
// Bubble Sort the array of numbers
var NumArrSorter = /** @class */ (function () {
    function NumArrSorter(collection) {
        this.collection = collection;
    }
    NumArrSorter.prototype.sort = function () {
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
    return NumArrSorter;
}());
var numArrSorter = new NumArrSorter([5, -7, 10, -8, 0, 25]);
console.log("Initial value: " + numArrSorter.collection);
numArrSorter.sort();
console.log("Bubble sorted: " + numArrSorter.collection);
