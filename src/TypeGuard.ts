class TypeGuard {
    constructor(public collection: number[] | string) {
    }

    test(): void {

        // TYPE GUARD: (collection of Array) - Date, Other class ...
        if (this.collection instanceof Array) {
            console.log('Array')
        }
        // TYPE GUARD: (collection of string) - primitive type (number, boolean, symbol ...)
        if (typeof this.collection === 'string') {
            console.log('String')
        }

    }
}

const testArray = new TypeGuard([5, -7, 10, -8, 0, 25])
testArray.test()
const testString = new TypeGuard('hi')
testString.test()
