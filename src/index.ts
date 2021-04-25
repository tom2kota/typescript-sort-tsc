import NumbersCollection from "./NumbersCollection";
import Sorter from "./Sorter";

const inputData = [100, 3, -40, 2.5, 0, 10]
const numbersCollection = new NumbersCollection(inputData)
const sorter = new Sorter(numbersCollection)

console.log(inputData)
console.log('... sort() ...')
sorter.sort()
console.log(numbersCollection.data)
