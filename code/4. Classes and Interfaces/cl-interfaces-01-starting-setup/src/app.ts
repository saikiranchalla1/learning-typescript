// union type
// intersection type

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface Elevated Employee extends Employee, Admin

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Erwin',
    privileges: ['stop-server', 'create-server'],
    startDate: new Date()
}

type Combinable = string | number;


type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guard

// typeof
// function overload

function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

const result = add('Jean', 'Charles');
result.split(' ');

type UnknownEmployee = Employee | Admin;

// IN
function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }

}

printEmployeeInfo({
    name: "Raine",
    startDate: new Date()
})


// Classes and interfaces  <= instanceOf

class Car {
    drive() {
        console.log("Driving....vrom....");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading Cargo..." + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    console.log(typeof vehicle);
    // console.log('loadCardo' in vehicle);

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
    // kind, type
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;

    switch (animal.type) {
        case 'horse':
            speed = animal.runningSpeed
            break;
    
        case 'bird':
            speed = animal.flyingSpeed;
            break;
    }

    console.log(speed);
}

moveAnimal({
    type: 'bird',
    flyingSpeed: 100

})

const elem = document.getElementById("user-input");

(elem as HTMLInputElement).value = "Hi, Webber"

// Index Properties

/** 
 * email: 'Not a valid email'
 * username: 'Already Exists'
 * 
 * password: 'Too short'
 */

interface ErrorContainer {
    [prop: string]: string
}

const fetchingUserData = {
    id: 'ud1',
    name: 'Steven',
    job: {
        title: 'ceo',
        description: 'My company'
    }
}

console.log(fetchingUserData?.job?.title);

const userInput = ''; // '', null

console.log(userInput ?? 'DEFAULT');