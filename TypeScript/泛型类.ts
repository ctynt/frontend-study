class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add; 
    }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10));

let myGenericString = new GenericNumber<string>("", (x, y) => x + y);
console.log(myGenericString.add("Hello", "World"));