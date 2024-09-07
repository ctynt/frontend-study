interface Pair<T, U> {
    first: T;
    second: U;
}

let pair1: Pair<string, number> = {first: "One", second: 1};
let pair2: Pair<boolean, string> = {first: true, second: "true"};

console.log(pair1);
console.log(pair2);