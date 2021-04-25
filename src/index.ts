import NumbersCollection from "./NumbersCollection";
import Sorter from "./Sorter";
import CharactersCollection from "./CharactersCollection";
import LinkedList from "./LinkedList";

const inputData = [100, 3, -40, 2.5, 0, 10]
const numbersCollection = new NumbersCollection(inputData)
const dataSorter = new Sorter(numbersCollection)

console.log(inputData)
console.log('... sort() ...')
dataSorter.sort()
console.log(numbersCollection.data)

const inputText = 'Lorem ipsum gci skb Qa, DFD 2021, Zorro!'
const charactersCollection = new CharactersCollection(inputText)
const textSorter = new Sorter(charactersCollection)

console.log(inputText)
console.log('... sort() ...')
textSorter.sort()
console.log(charactersCollection.data)


const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(-100)
linkedList.add(50)
linkedList.add(-200)
linkedList.add(1100)

const linkedListSorter = new Sorter(linkedList)
linkedList.print()
console.log('... sort() ...')
linkedListSorter.sort()
linkedList.print()
