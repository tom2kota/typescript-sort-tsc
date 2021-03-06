"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var LinkedList_1 = __importDefault(require("./LinkedList"));
var inputData = [100, 3, -40, 2.5, 0, 10];
var numbersCollection = new NumbersCollection_1.default(inputData);
console.log(inputData);
console.log('... sort() ...');
numbersCollection.sort();
console.log(numbersCollection.data);
console.log('---------------------------------------------');
var inputText = 'Lorem ipsum gci skb Qa, DFD 2021, Zorro!';
var charactersCollection = new CharactersCollection_1.default(inputText);
console.log(inputText);
console.log('... sort() ...');
charactersCollection.sort();
console.log(charactersCollection.data);
console.log('---------------------------------------------');
var linkedList = new LinkedList_1.default();
linkedList.add(100);
linkedList.add(-100);
linkedList.add(50);
linkedList.add(-200);
linkedList.add(11.50);
linkedList.print();
console.log('... sort() ...');
linkedList.sort();
linkedList.print();
