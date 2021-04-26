import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import LinkedList from "./LinkedList";

const inputData = [100, 3, -40, 2.5, 0, 10]
const numbersCollection = new NumbersCollection(inputData)

console.log(inputData)
console.log('... sort() ...')
numbersCollection.sort()
console.log(numbersCollection.data)

console.log('---------------------------------------------')

const inputText = 'Lorem ipsum gci skb Qa, DFD 2021, Zorro!'
const charactersCollection = new CharactersCollection(inputText)

console.log(inputText)
console.log('... sort() ...')
charactersCollection.sort()
console.log(charactersCollection.data)


console.log('---------------------------------------------')

// const linkedList = new LinkedList()
// linkedList.add(100)
// linkedList.add(-100)
// linkedList.add(50)
// linkedList.add(-200)
// linkedList.add(1100)
//
// const linkedListSorter = new Sorter(linkedList)
// linkedList.print()
// console.log('... sort() ...')
// linkedListSorter.sort()
// linkedList.print()

