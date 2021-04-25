"use strict";
var TypeGuard = /** @class */ (function () {
    function TypeGuard(collection) {
        this.collection = collection;
    }
    TypeGuard.prototype.test = function () {
        // TYPE GUARD: (collection of Array) - Date, Other class ...
        if (this.collection instanceof Array) {
            console.log('Array');
        }
        // TYPE GUARD: (collection of string) - primitive type (number, boolean, symbol ...)
        if (typeof this.collection === 'string') {
            console.log('String');
        }
    };
    return TypeGuard;
}());
var testArray = new TypeGuard([5, -7, 10, -8, 0, 25]);
testArray.test();
var testString = new TypeGuard('hi');
testString.test();
