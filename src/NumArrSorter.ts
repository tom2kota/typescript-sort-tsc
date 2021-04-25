// Bubble Sort the array of numbers

class NumArrSorter {
    constructor(public collection: number[]) {
    }

    sort(): void {
        console.log('... sort() ...')
        const {length} = this.collection
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    let leftHand = this.collection[j]
                    this.collection[j] = this.collection[j + 1]
                    this.collection[j + 1] = leftHand
                }
            }
        }
    }
}

const numArrSorter = new NumArrSorter([5, -7, 10, -8, 0, 25])

console.log(`Initial value: ${numArrSorter.collection}`)
numArrSorter.sort()
console.log(`Bubble sorted: ${numArrSorter.collection}`)
