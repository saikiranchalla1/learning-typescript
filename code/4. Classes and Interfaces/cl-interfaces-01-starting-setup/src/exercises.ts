// class Person {
//     constructor(public name: string, public age: number, public gender: string) {}

//     greet() {
//         console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I am ${this.gender}.`)
//     }
// }

// const raine = new Person('Raine', 24, 'non-binary')
// raine.greet();

class Rectangle {
    constructor(public width: number, public height: number) {}

    getArea() {
        const area = this.width * this.height
        return area;
    }

    getPerimeter() {
        const perimeter = 2 * (this.width + this.height);
        return perimeter;
    }
}

const rectangle1 = new Rectangle(15, 19);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());

class BankAccount {
    constructor(public balance: number, public accountNumber: string) {}

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (this.balance === 0) {
            throw new Error("No money in bank account to withdraw!")
        }
        else if (this.balance - amount < 0) {
            throw new Error("Not enough money in bank account to withdraw.")
        }
        this.balance -= amount;
    }

    printBalance() {
        console.log(`Amount in bank account is $${this.balance}.`)
    }
}

const bankAccount1 = new BankAccount(100, "12345678")
bankAccount1.printBalance();
bankAccount1.deposit(50);
bankAccount1.printBalance();
bankAccount1.withdraw(150);
bankAccount1.printBalance();
bankAccount1.withdraw(1);