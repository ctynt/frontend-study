interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength("Hello TypeScript!");
logLength([1, 2, 3]);
logLength({ length: 10, value: 42 });