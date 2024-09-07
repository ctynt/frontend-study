function DefaultValue(value: any) {
    return function (target: any, propertyKey: string ) {
        target[propertyKey] = value;
    }
}

class TestClass {
    @DefaultValue('Hello, World')
    greeting: string
}

const testClass = new TestClass();

console.log(testClass.greeting); // Hello, World