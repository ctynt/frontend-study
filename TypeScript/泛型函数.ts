function identity<T>(args: T): T {
  return args;
}

let output1 = identity<string>("Hello TypeScript");
let output2 = identity<number>(42);

console.log(output1);
console.log(output2);