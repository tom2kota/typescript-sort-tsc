class BubbleSorter {
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

const bubbleSorter = new BubbleSorter([5, -7, 10, -8, 0, 25])

console.log(`Initial value: ${bubbleSorter.collection}`)
bubbleSorter.sort()
console.log(`Bubble sorted: ${bubbleSorter.collection}`)
