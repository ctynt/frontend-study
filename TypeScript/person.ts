interface Person {
    firstName: string
    lastName: string
    age: number
    greet: () => string
}

function createPerson(
    firstName: string, 
    lastName: string, 
    age: number): Person {
    return {
        firstName,
        lastName,
        age,
        greet: function() {
            return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
        }
    }
}

const person: Person = createPerson('John','Doe', 30)

console.log(person.greet())