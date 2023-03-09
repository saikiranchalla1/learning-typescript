// type AddFn = (a: number, b: number) => number;


interface AddFn {
    (a: number, b: number): number;
}

// let add: AddFn;


// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }

// btn?.innerHTML
interface Named {
    readonly name?: string;

    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

// extends (for classes)
class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
        console.log("Hello");
        }
    }

}

let user1: Greetable;

user1 = new Person('Noah');

let user2 = new Person();
user2.greet("Optional");
user1.greet("Hello!");
console.log(user1);
