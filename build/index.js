"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var Sorter_1 = __importDefault(require("./Sorter"));
var inputData = [100, 3, -40, 2.5, 0, 10];
var numbersCollection = new NumbersCollection_1.default(inputData);
var sorter = new Sorter_1.default(numbersCollection);
console.log(inputData);
console.log('... sort() ...');
sorter.sort();
console.log(numbersCollection.data);
