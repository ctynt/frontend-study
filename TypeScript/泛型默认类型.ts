function createArray<T = string>(length: number, value: T): T[] {
  return new Array(length).fill(value);
}

let stringArray = createArray(3, "hello");
let numberArray = createArray(3, 42);

console.log(stringArray); // ["hello", "hello", "hello"]
console.log(numberArray); // [42, 42, 42]
