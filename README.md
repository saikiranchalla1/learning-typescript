# TypeScript
## To import the diagrams
- Visit diagrams.net (formerly draw.io).

- Select Open Existing Diagram and use the file explorer to select the diagram file from your computer. or

- Click on File from the diagrams.net menu.

- Select Open From Device and use the file explorer to select the diagram file from your computer.

## Working with code examples
Before you start to work on any code examples under the folder `code` of this repo, make sure to execute the command:

```
npm install
```

to install all the dependencies.

## Installing TypeScript
In order to install TypeScript we need Node Package Manager (NPM) which is part of NodeJS. Hence, first install NodeJS:
1. Navigate to https://nodejs.org/en/
2. Download the latest LTS and install it.

Once NodeJS is installed, open command line and execute the following command:

```
sudo npm install -g typescript
```

This installs TypeScript on your machine globally and it can be invoked irrespective of the directory.

### Further setup for the course project
1. Create a folder with any name and execute the command `npm init` inside the folder.
2. Follow the wizard and use all the defaults.
3. Once the wizard, execute the command `npm install --save-dev lite-server`.
4. Add the following to the `package.json` file's script section.

```
"start": "lite-server"
```

So the final `scripts` would look like: 
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
```

Now, you can run the command `npm start` to launch the application from a web server.
### Reading
1. https://basarat.gitbook.io/typescript/getting-started Please go over the Getting Started with Typescript page only.

## Basic Types
Static typing helps to catch errors at compile time rather than at runtime, making code more reliable and easier to maintain. In TypeScript, there are several types that can be used to define variables, functions, and classes.

Here are the most commonly used types in TypeScript:

1. Number Type
The number type is used to represent numeric values in TypeScript. It can be used to define variables, parameters, and return types of functions.

Example:
```
let age: number = 25;
function add(a: number, b: number): number {
  return a + b;
}
```

2. String Type
The string type is used to represent string values in TypeScript. It can be used to define variables, parameters, and return types of functions.

Example:

```
let name: string = "John";
function greet(name: string): string {
  return "Hello, " + name + "!";
}

```
## TypeScript Compiler Options

### Watch mode
On every change, we've to run the `tsc` command to compile the files to JS. Instead, we can use the watch mode, to let TS watch for files and compile them immediately. TO do so, use the follow command:

```
tsc <FILE NAME> --watch
```
3. Boolean Type
The boolean type is used to represent boolean values in TypeScript. It can be used to define variables, parameters, and return types of functions.

Example:

```
let isLogged: boolean = true;
function isLoggedIn(): boolean {
  return isLogged;
}

```
4. Array Type
The array type is used to represent an array of values of the same type in TypeScript. It can be used to define variables, parameters, and return types of functions.

Example:
```
let numbers: number[] = [1, 2, 3, 4, 5];
function getFirstNumber(numbers: number[]): number {
  return numbers[0];
}

```

5. Object Type
The object type is used to represent an object in TypeScript. It can be used to define variables, parameters, and return types of functions.

Example:

```
let person: object = { name: "John", age: 25 };
function getPersonName(person: object): string {
  return person["name"];
}

```

6. Any Type
The any type is used to represent any type in TypeScript. It can be used to define variables, parameters, and return types of functions. However, using the any type should be avoided whenever possible as it undermines the benefits of using TypeScript.

Example:

```
let value: any = "hello";
function doSomething(value: any): any {
  // ...
}

```

7. Void Type
The void type is used to represent the absence of a value in TypeScript. It is typically used as the return type of functions that do not return a value.

Example:

```
function sayHello(name: string): void {
  console.log("Hello, " + name + "!");
}

```

8. Null and Undefined Types
The null and undefined types are used to represent null and undefined values in TypeScript. They can be used to define variables, parameters, and return types of functions.

Example:

```
let someValue: null = null;
function doSomething(): undefined {
  // ...
}

```
#### Reading
1. https://basarat.gitbook.io/typescript/type-system/enums
2. https://basarat.gitbook.io/typescript/type-system/literal-types
3. https://basarat.gitbook.io/typescript/type-system/type-inference
4. https://basarat.gitbook.io/typescript/type-system/never (MUST READ)
5. https://basarat.gitbook.io/typescript/type-system/functions

#### Extras
1. https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-types/cheatsheet
### Compiling the entire project
TO compile a project with multiple files, we can let TS know that the entire folder can be treated as a single project. To do so:
1. run `tsc --init` to generate the `tsconfig.json` file.

This file will have a lot of options which we don't really care about at this time. Run `tsc` at the root of the project and that will take care of comiling all the files in the folder.

This also works with `--watch` option.


### Including and Excluding Files
To exclude a particular file or a folder from compilation, edit the `tsconfig.json` file and add the following at the end i.e. after the `compilerOptions`.

```
exclude: [
    "analytics.ts",
    "**/tests/*.ts",
    "node_modules"
]
```

__node_modules is always excluded__

To include a file explictly, use the `include` option:

```
include: [
    'app.ts`
]
```

When using `include`, only that file will be compiled by TS and the compiler will ignore all the other files.

include and exclude support wildcard characters to make glob patterns:

- * matches zero or more characters (excluding directory separators)
- ? matches any one character (excluding directory separators)
- **/ matches any directory nested to any level
### Setting a Compilation Target.

The `compilerOptions` key in the `tsconfig.json` allows us to configure the TS compiler.

Below are some of the options that we use most often.

1. target - this is used to set the target JavaScript version when TS compiles the files. By default, the value is set to `es5` and hence you'll not see use of `let` and `const` keywords in the generated JS files. Change this to `es6` and check the generated JS files.
2. lib - specify default options that TS should be aware of. If you don't set a value for this, the types are automatically included based on the `target` version. If you're building an app for browser, for example, we can include DOM as below:

```
lib: [
    "dom",
    "es6",
    "dom.iterable",
    "scripthost"
]
```

3. allowJs and checkJs - TS will compile JS files and report any errors in .js files respectively. This can be used in projects where no TS is used at all.
4. sourceMap - Generates correpoinding .map files that can be used by browsers to map JS files to corresponding TS files. This can be used for debugging.
5. rootDir and outDir - Helps organizing your project. `rootDir` is used to specify the root of your source code in your project. `outDir` sets the output directory to which the generated JS files will be written to. Always use the `outDir` to keep your source code free from any JS files.
6. noEmitOnError - can be true or false. By default this is true. This prevents a JS file from being created if there are errors in the TS file if set to `false`. If set to `true`, and there is an error in the TS file, not output file will be generated for the file with error.
7. strict - enables all strict type checking. Setting this to `true` is as good as setting `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `alwaysStrict` to`true`.
   
   - strictNullChecks: When strictNullChecks is false, null and undefined are effectively ignored by the language. This can lead to unexpected errors at runtime.
   - noImplicitAny - In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type. Turning on noImplicitAny however TypeScript will issue an error whenever it would have inferred any:
   - strictNullChecks - When strictNullChecks is false, null and undefined are effectively ignored by the language. This can lead to unexpected errors at runtime. When strictNullChecks is true, null and undefined have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected.
   - strictFunctionTypes - When enabled, this flag causes functions parameters to be checked more correctly.
   - strictBindCallApply - When set, TypeScript will check that the built-in methods of functions call, bind, and apply are invoked with correct argument for the underlying function:
   - strictPropertyInitialization - When set to true, TypeScript will raise an error when a class property was declared but not set in the constructor.
   - noImplicitThis - Raise error on ‘this’ expressions with an implied ‘any’ type.
   - alwaysStrict - Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict” for each source file.

These links might also be interesting:

- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging



## Classes and Interfaces

In TypeScript, a class is a blueprint or template for creating objects that have properties and methods. Classes are defined using the class keyword and can have constructors, properties, and methods.

Here's an example of a simple class in TypeScript:

```
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

```
In this example, the Person class has two properties, firstName and lastName, and a constructor that takes in two arguments to set these properties. It also has a method getFullName that returns a string concatenation of the firstName and lastName properties.

To create an object from this class, you can use the new keyword:

In this example, the Person class has two properties, firstName and lastName, and a constructor that takes in two arguments to set these properties. It also has a method getFullName that returns a string concatenation of the firstName and lastName properties.

To create an object from this class, you can use the new keyword:

```
const person = new Person("John", "Doe");
console.log(person.getFullName()); // "John Doe"

```

This creates a new Person object with the firstName and lastName properties set to "John" and "Doe" respectively, and then logs the result of the getFullName method to the console.

Classes in TypeScript allow for object-oriented programming concepts such as inheritance, encapsulation, and polymorphism. You can extend a class using the extends keyword to create a subclass, and you can use access modifiers (public, private, and protected) to control the visibility of properties and methods within a class.

### Constructor Functions and the `this` keyword
In TypeScript, a constructor function is a special function that is called when an object is created from a class. It is used to initialize the properties of the object and set it up for use.

The constructor function in TypeScript is defined using the constructor keyword within a class definition. It can take in parameters, just like any other function, and can access and modify the properties of the object being created using the this keyword.

Here's an example of a simple class with a constructor function in TypeScript:

```
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

```

In this example, the Person class has a constructor function that takes in two arguments, firstName and lastName, and sets the corresponding properties of the object being created using the this keyword.

The this keyword in TypeScript refers to the current instance of the class. It is used to access and modify the properties and methods of the object being created or currently being operated on within a class.

For example, in the getFullName method of the Person class, the this keyword is used to access the firstName and lastName properties of the current instance of the class and return a concatenated string.

```
getFullName(): string {
  return `${this.firstName} ${this.lastName}`;
}
```


When you create a new object from the Person class, the constructor function is called with the specified arguments to initialize the object's properties:

```
const person = new Person("John", "Doe");
console.log(person.getFullName()); // "John Doe"

```

In this example, a new Person object is created with the firstName and lastName properties set to "John" and "Doe" respectively, and then the getFullName method is called to log the full name to the console.

### private and public Access modifiers

In TypeScript, access modifiers are used to control the visibility and accessibility of class members (properties and methods). TypeScript provides three access modifiers: public, private, and protected.

Here's a brief explanation of each access modifier:

public: members with this access modifier are accessible from anywhere, both inside and outside of the class.

private: members with this access modifier are only accessible within the class. They cannot be accessed from outside the class, including subclasses.

protected: members with this access modifier are only accessible within the class and its subclasses. They cannot be accessed from outside the class hierarchy.

Let's take a look at some examples of how to use these access modifiers:

```
class Person {
  public firstName: string; // public member
  private lastName: string; // private member
  protected age: number; // protected member

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  greet(): void {
    console.log(`Hello, I am ${this.firstName} and I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  position: string;

  constructor(firstName: string, lastName: string, age: number, position: string) {
    super(firstName, lastName, age);
    this.position = position;
  }

  getPosition(): string {
    return this.position;
  }

  introduce(): void {
    console.log(`Hello, I am ${this.getFullName()}, and I work as a ${this.position}.`);
  }
}
```

In this example, the Person class has three members, firstName, lastName, and age, with different access modifiers. firstName is public, which means it can be accessed from anywhere, including outside the class. lastName is private, which means it can only be accessed within the Person class. age is protected, which means it can be accessed within the Person class and its subclasses.

The Employee class extends the Person class and adds a position property. It also has two methods, getPosition and introduce, that access members of the parent class.

Now let's create some instances of these classes and see how the access modifiers work:

```
const person = new Person("John", "Doe", 30);
console.log(person.firstName); // "John"
console.log(person.lastName); // Error: Property 'lastName' is private and only accessible within class 'Person'
console.log(person.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses
person.greet(); // "Hello, I am John and I am 30 years old."

const employee = new Employee("Jane", "Smith", 25, "Manager");
console.log(employee.firstName); // "Jane"
console.log(employee.getPosition()); // "Manager"
employee.introduce(); // "Hello, I am Jane Smith, and I work as a Manager."
console.log(employee.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses
```


In this example, we create an instance of the Person class and attempt to access its properties with different access modifiers. We can access the firstName property because it is public, but we get errors when we try to access the lastName and age properties because they are private and protected, respectively.

We also create an instance of the Employee class, which extends the Person class. We can access the `firstName` property of the employee object because it is public. We can also access the getPosition method, which is defined in the Employee class. When we call the introduce method, it uses the getFullName method defined in the Person class to access the firstName and lastName properties, which are inherited from the parent class.

Finally, we attempt to access the age property of the employee object, but we get an error because it is protected and can only be accessed within the class hierarchy.

In summary, access modifiers in TypeScript allow us to control the visibility and accessibility of class members. Public members can be accessed from anywhere, private members can only be accessed within the class, and protected members can be accessed within the class hierarchy. It is important to choose the appropriate access modifier for each member to ensure the correct level of encapsulation and to prevent unauthorized access to sensitive data.

### Shorthand initialization

In TypeScript, we can use shorthand initialization to simplify the process of creating classes with properties and methods. With shorthand initialization, we can define class properties directly in the constructor, without having to create separate property declarations. This can make our code more concise and easier to read.

Here's an example of how to use shorthand initialization in TypeScript:

```
class Person {
  constructor(public firstName: string, public lastName: string, private age: number) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  greet(): void {
    console.log(`Hello, I am ${this.firstName} and I am ${this.age} years old.`);
  }
}
```

In this example, the Person class has three members, firstName, lastName, and age. Instead of creating separate property declarations for each member, we define them directly in the constructor using the shorthand initialization syntax.

The shorthand initialization syntax works by adding an access modifier (public, private, or protected) in front of the constructor parameter. This creates a class property with the same name as the parameter, and assigns the parameter value to the property. We can then access the property from anywhere in the class, just like any other class member.

We can also use shorthand initialization with methods, like this:

```
class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}


```


In this example, the Rectangle class has two members, width and height, which are defined using shorthand initialization in the constructor. The getArea method uses these properties to calculate and return the area of the rectangle.

Using shorthand initialization can help to reduce the amount of boilerplate code required to define a class, especially for classes with many properties. However, it is important to use it judiciously and to consider the readability and maintainability of the code. In some cases, it may be more appropriate to define properties and methods separately, especially if they have complex logic or depend on other class members.

In addition to the benefits of reducing boilerplate code, shorthand initialization can also make it easier to work with data coming from external sources, such as JSON. For example, if we have a JSON object representing a person:

```
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
}

```


We can use the shorthand initialization syntax to create a Person object directly from the JSON:
```
const personData = { firstName: "John", lastName: "Doe", age: 30 };
const person = new Person(personData.firstName, personData.lastName, personData.age);

```

This can be more concise than manually assigning each property to the corresponding class member, especially if the JSON object has many properties.

In summary, shorthand initialization is a useful feature in TypeScript that allows us to define class properties directly in the constructor, without having to create separate property declarations. It can help to reduce boilerplate code and make it easier to work with data from external sources. However, it is important to use it judiciously and to consider the readability and maintainability of the code.


### Inheritance
Inheritance is a fundamental feature of object-oriented programming (OOP) that allows us to create new classes by extending existing classes. In TypeScript, we can use the extends keyword to create a subclass that inherits properties and methods from a superclass.

Here's an example of how to use inheritance in TypeScript:

```
class Animal {
  constructor(private name: string) {}

  move(distanceInMeters: number = 0): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Fido");
dog.bark();
dog.move(10);
```

In this example, we define two classes, Animal and Dog. The Animal class has a move method that takes a distance in meters and logs a message to the console. The Dog class extends the Animal class using the extends keyword, and adds a bark method that logs a message to the console.

To call the superclass constructor, we use the super keyword inside the Dog constructor. This ensures that the name property is initialized correctly.

We can create a new instance of the Dog class and call its methods, including the move method inherited from the Animal class.

Inheritance allows us to reuse code and build on top of existing functionality. It also enables us to create more specialized classes that have additional properties and methods, while still maintaining a relationship with the original class.

In TypeScript, we can also override methods and properties in the subclass. For example:

```
class Animal {
  constructor(private name: string) {}

  move(distanceInMeters: number = 0): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters: number = 5): void {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

const snake = new Snake("Sammy the Python");
snake.move();

```


In this example, we define a Snake class that extends the Animal class. We override the move method in the Snake class to add additional behavior, such as logging a message to the console before calling the superclass move method using the super keyword.

When we create a new instance of the Snake class and call its move method, it logs a message to the console indicating that it is slithering, before calling the move method of the superclass.

In summary, inheritance is a powerful feature of TypeScript that allows us to create new classes by extending existing classes. It enables us to reuse code and build on top of existing functionality, while still maintaining a relationship with the original class. We can also override methods and properties in the subclass to add additional behavior or modify existing behavior.


### Overriding Properties and the "protected" modifier
In TypeScript, we can override properties in a subclass when we extend a superclass. Overriding properties allows us to provide a different implementation or value for a property in the subclass. We can do this by declaring the property in the subclass with the same name as the property in the superclass.

Here's an example of how to override a property in TypeScript:

```
class Animal {
  protected legs: number;

  constructor(private name: string, legs: number) {
    this.legs = legs;
  }

  getLegs(): number {
    return this.legs;
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name, 0);
  }

  getLegs(): number {
    return 0;
  }
}

const animal = new Animal("Fido", 4);
console.log(animal.getLegs()); // 4

const snake = new Snake("Sammy");
console.log(snake.getLegs()); // 0

```

In this example, we define two classes, Animal and Snake. The Animal class has a protected property legs and a method getLegs that returns the value of legs. The Snake class extends the Animal class and overrides the getLegs method to always return 0.

When we create a new instance of the Animal class and call its getLegs method, it returns the value of the legs property, which is 4. When we create a new instance of the Snake class and call its getLegs method, it returns 0, because the Snake class has overridden the getLegs method.

In this example, we also used the protected modifier to declare the legs property in the Animal class. The protected modifier allows the property to be accessed by subclasses, but not by external code. This is useful when we want to make a property available to subclasses, but not to the outside world.

When we use the protected modifier, the property is not accessible outside of the class or its subclasses. For example:

```
const animal = new Animal("Fido", 4);
console.log(animal.legs); // Error: Property 'legs' is protected and only accessible within class 'Animal' and its subclasses.

```

This prevents external code from accessing or modifying the property directly, and ensures that subclasses have access to the property when they need it.

In summary, overriding properties in a subclass allows us to provide a different implementation or value for a property in the subclass. We can use the protected modifier to make a property available to subclasses, but not to external code. This helps to ensure encapsulation and maintainability in our code.


### Getters and Setters

In TypeScript, getters and setters are a way to define methods that are used to retrieve or set the value of an object's property. They provide a convenient way to encapsulate the access to an object's data and to control the read and write operations.

To define a getter or a setter in TypeScript, we use the get and set keywords followed by the property name. The getter is defined by a function that has no parameters and returns a value, while the setter is defined by a function that takes a single parameter and does not return a value.

Here's an example of how to define getters and setters in TypeScript:

```
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const person = new Person("Alice", 25);
console.log(person.name); // Alice
console.log(person.age); // 25

person.name = "Bob";
person.age = 30;

console.log(person.name); // Bob
console.log(person.age); // 30

person.age = -1; // Error: Age cannot be negative

```


In this example, we define a Person class with two private properties, _name and _age. We then define getter and setter methods for each property using the get and set keywords. The get methods return the value of the corresponding private property, while the set methods set the value of the corresponding private property after performing some validation.

We can use these getter and setter methods to read and write the values of the _name and _age properties. When we call the name and age getters, they return the values of the corresponding private properties. When we call the name and age setters, they set the values of the corresponding private properties after performing some validation.

In this example, we also use the throw keyword to raise an error when the age setter is called with a negative value. This demonstrates how we can use getters and setters to control the access to an object's data and to enforce data validation rules.

In summary, getters and setters in TypeScript provide a way to define methods that are used to retrieve or set the value of an object's property. They allow us to encapsulate the access to an object's data and to control the read and write operations. We can use getters and setters to enforce data validation rules and to ensure the consistency of an object's state.


### Static Methods and Properties

In TypeScript, static methods and properties are class-level members that are associated with the class itself, rather than with any particular instance of the class. This means that they can be accessed directly from the class, without the need to create an instance of the class first.

To define a static method or property in TypeScript, we use the static keyword followed by the method or property name. Here's an example of how to define static methods and properties in TypeScript:

```
class Person {
  private static numberOfPeople: number = 0;

  constructor(private name: string, private age: number) {
    Person.numberOfPeople++;
  }

  static getNumberOfPeople(): number {
    return Person.numberOfPeople;
  }

  static resetNumberOfPeople(): void {
    Person.numberOfPeople = 0;
  }

  sayHello(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
  }
}

const alice = new Person("Alice", 25);
console.log(alice.sayHello()); // Hello, my name is Alice and I'm 25 years old

const bob = new Person("Bob", 30);
console.log(bob.sayHello()); // Hello, my name is Bob and I'm 30 years old

console.log(Person.getNumberOfPeople()); // 2

Person.resetNumberOfPeople();
console.log(Person.getNumberOfPeople()); // 0

```

In this example, we define a Person class with two private properties, name and age, and a static property called numberOfPeople, which keeps track of the number of Person instances that have been created. We also define two static methods, getNumberOfPeople and resetNumberOfPeople, which respectively return the value of numberOfPeople and reset it to zero.

We can access the static methods and properties directly from the Person class, without the need to create an instance of the class first. For example, we can call the getNumberOfPeople method to get the current number of Person instances, or the resetNumberOfPeople method to reset the count to zero.

Static methods and properties are useful for defining behavior or state that is shared among all instances of a class. For example, a static property can be used to keep track of the number of instances of a class, while a static method can be used to perform a computation or operation that is related to the class as a whole, rather than to any particular instance of the class.

In summary, static methods and properties in TypeScript are class-level members that are associated with the class itself, rather than with any particular instance of the class. They can be accessed directly from the class, without the need to create an instance of the class first, and they are useful for defining behavior or state that is shared among all instances of a class.


### Abstract Classes

In TypeScript, an abstract class is a class that cannot be instantiated directly, but can be used as a base class for other classes. An abstract class can contain both concrete and abstract members, and is intended to be subclassed by other classes that implement the abstract members.

To define an abstract class in TypeScript, we use the abstract keyword before the class keyword. Here's an example of how to define an abstract class in TypeScript:

```
abstract class Animal {
  abstract makeSound(): void;

  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

```

In this example, we define an abstract class called Animal that has an abstract method makeSound and a concrete method move. The makeSound method is declared but not defined in the abstract class, meaning that it must be implemented by any subclass of Animal. The move method is defined in the abstract class, meaning that it can be inherited by any subclass of Animal.

We can then create concrete classes that extend the Animal abstract class and implement the abstract makeSound method. Here's an example of how to define a concrete subclass of Animal:

```
class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

```

In this example, we define a concrete class called Dog that extends the Animal abstract class and implements the abstract makeSound method by logging "Woof! Woof!" to the console.

We can then create instances of the Dog class and call the move and makeSound methods:

```
const dog = new Dog();
dog.move(10); // Animal moved 10m.
dog.makeSound(); // Woof! Woof!

```

In this example, we create a new instance of the Dog class and call the move method, which is inherited from the Animal class, passing in a distance of 10 meters. We then call the makeSound method, which is implemented by the Dog class, causing it to log "Woof! Woof!" to the console.

Abstract classes are useful when you want to define a base class that provides some default behavior, but also leaves some behavior to be implemented by concrete subclasses. They allow you to define a common interface for a set of related classes, while also allowing for variation in implementation. Abstract classes are also useful for enforcing a certain structure on subclasses, by requiring them to implement certain methods or properties.

Another advantage of abstract classes is that they can provide a level of type safety and code reuse. Since an abstract class provides a common interface for a set of related classes, we can write functions or methods that operate on instances of that abstract class or its subclasses, without having to write separate functions for each subclass.

For example, consider a function that takes an instance of an Animal or its subclass and logs its sound to the console:

```
function logAnimalSound(animal: Animal) {
  animal.makeSound();
}

```

In this example, we define a function called logAnimalSound that takes an instance of the Animal abstract class or any of its concrete subclasses. We then call the makeSound method on the animal parameter, which is guaranteed to exist since all subclasses of Animal must implement it.

We can then call this function with instances of the Animal class or any of its concrete subclasses:

```
const dog = new Dog();
const cat = new Cat();
logAnimalSound(dog); // Woof! Woof!
logAnimalSound(cat); // Meow! Meow!

```

In this example, we create instances of the Dog and Cat classes, which are both subclasses of Animal. We then call the logAnimalSound function with each instance, which logs the appropriate sound to the console.

In summary, abstract classes in TypeScript provide a way to define a common interface for a set of related classes, while allowing for variation in implementation. They are useful for enforcing a certain structure on subclasses, while also providing a level of type safety and code reuse.


### Singleton Pattern and Private Constructors

Singleton pattern is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. In other words, it ensures that only one instance of a class can be created and that instance can be accessed globally.

Singleton pattern is useful in situations where we need to ensure that only one instance of a class is created and used throughout the application, such as in configuration settings or database connections. It also helps in reducing memory consumption as only one instance of the class is created.

In TypeScript, the Singleton pattern can be implemented using a combination of a private constructor and a static method to create and return the single instance of the class. Here is an example of how to implement the Singleton pattern in TypeScript:

```
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public sayHello(): void {
    console.log("Hello World!");
  }
}

```

In this example, we define a class called Singleton with a private constructor and a static method called getInstance that returns a single instance of the Singleton class. The getInstance method checks if an instance of the class already exists and if not, creates a new instance and returns it. The sayHello method is a public method that can be called on the single instance of the Singleton class.

To use the Singleton class, we can call the getInstance method to get the single instance of the class and then call the sayHello method on that instance:

```
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true

singleton1.sayHello(); // Hello World!
singleton2.sayHello(); // Hello World!

```

In this example, we create two instances of the Singleton class using the getInstance method and check if they are the same instance by comparing their references. Since the getInstance method always returns the same instance of the Singleton class, the two instances are the same. We then call the sayHello method on each instance, which logs "Hello World!" to the console.

In summary, Singleton pattern is a design pattern that ensures that only one instance of a class is created and provides a global point of access to that instance. In TypeScript, Singleton pattern can be implemented using a private constructor and a static method to create and return the single instance of the class.

### Exercises
1. Create a class called Person that has the following properties: name, age, and gender. Add a method called greet that returns a string greeting the person. Instantiate the class with a person's information and call the greet method.

Solution:
```
class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    return `Hello, my name is ${this.name}, I'm ${this.age} years old, and I'm ${this.gender}. Nice to meet you!`;
  }
}

const person = new Person("Alice", 25, "female");
console.log(person.greet()); // Hello, my name is Alice, I'm 25 years old, and I'm female. Nice to meet you!

```

2. Create a class called Rectangle that has the following properties: width and height. Add methods called getArea and getPerimeter that return the area and perimeter of the rectangle. Instantiate the class with a rectangle's dimensions and call the getArea and getPerimeter methods.

Solution:
```
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50
console.log(rectangle.getPerimeter()); // 30

```

3. Create a class called BankAccount that has the following properties: balance and accountNumber. Add methods called deposit and withdraw that add and subtract funds from the account balance, respectively. Instantiate the class with an initial balance and account number, and call the deposit and withdraw methods.

Solution:
```
class BankAccount {
  balance: number;
  accountNumber: string;

  constructor(balance: number, accountNumber: string) {
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  }
}

// Example usage:
const myAccount = new BankAccount(1000, "123-456-789");
console.log(`Account balance: $${myAccount.balance}`);
myAccount.deposit(500);
console.log(`Account balance after deposit: $${myAccount.balance}`);
myAccount.withdraw(200);
console.log(`Account balance after withdrawal: $${myAccount.balance}`);
myAccount.withdraw(1500); // Should print "Insufficient balance."

```



### Interface
Interfaces in TypeScript are a powerful feature that allows developers to define contracts for objects, functions, or classes in a type-safe manner. An interface defines the shape of an object, specifying its properties and methods, without providing any implementation details.

In TypeScript, an interface can be defined using the interface keyword followed by the name of the interface and the properties and methods it contains. For example:

```
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}
```

In this example, we define an interface called Person with three properties: name, age, and sayHello. The name property is of type string, the age property is of type number, and the sayHello property is a function that takes no arguments and returns nothing.

To use an interface in TypeScript, we can create an object that conforms to the interface's shape. For example:



```
  const person: Person = {
  name: "Alice",
  age: 30,
  sayHello: () => {
    console.log("Hello!");
  },
};
```

In this example, we create an object called person that conforms to the Person interface, with a name property of type string, an age property of type number, and a sayHello method that logs "Hello!" to the console.

One of the benefits of interfaces is that they allow for type checking and code completion in development tools like Visual Studio Code. For example, if we try to create an object that does not conform to the Person interface, we will get a compile-time error:


```const person2: Person = {
  name: "Bob",
  age: "30", // Type 'string' is not assignable to type 'number'.
  sayHello: () => {
    console.log("Hello!");
  },
};
```

In this example, we get a compile-time error because the age property is of type string instead of number, which does not conform to the Person interface.

In summary, interfaces in TypeScript allow developers to define contracts for objects, functions, or classes in a type-safe manner, without providing any implementation details. Interfaces define the shape of an object, specifying its properties and methods, and can be used for type checking and code completion in development tools.

### Using Interface with Classes

In TypeScript, interfaces can be used with classes to define contracts for classes that implement the interface. This is useful when we want to ensure that a class conforms to a certain set of rules, properties, and methods defined in an interface.

To use an interface with a class, we can define the interface first, and then implement it in the class using the implements keyword. For example, let's say we have an interface called Vehicle that defines the properties and methods of a vehicle:

```
interface Vehicle {
  start: () => void;
  stop: () => void;
  speed: number;
}
```


In this example, the Vehicle interface defines three properties: start and stop, which are methods that take no arguments and return nothing, and speed, which is a number property.

We can then implement this interface in a class called Car using the implements keyword:

```
class Car implements Vehicle {
  speed: number = 0;

  start() {
    console.log("Starting car...");
  }

  stop() {
    console.log("Stopping car...");
  }
```

In this example, we implement the Vehicle interface in the Car class by defining the start and stop methods, and the speed property. We also initialize the speed property to 0.

Now, any instance of the Car class will be guaranteed to have the same properties and methods as defined in the Vehicle interface. We can also create functions that take a Vehicle object as a parameter, which can be any object that implements the Vehicle interface:


```
function accelerate(vehicle: Vehicle) {
  vehicle.speed += 10;
}

const car = new Car();
accelerate(car);
console.log(car.speed); // Output: 10

```

In this example, we create a function called accelerate that takes a Vehicle object as a parameter. We then create an instance of the Car class, and pass it to the accelerate function. The accelerate function increases the speed of the Vehicle object by 10, which in this case is the speed property of the car object. We then log the speed property of the car object to the console, which outputs 10.

In summary, using interfaces with classes in TypeScript allows us to define contracts for classes that implement the interface. This ensures that the class conforms to a certain set of rules, properties, and methods defined in the interface, and provides type checking and code completion in development tools.


### Interface vs Custom Types

In TypeScript, both custom types and interfaces can be used to define new types. While they may seem similar at first, there are some differences between the two.

A custom type is created using the type keyword and is used to create an alias for an existing type or to define a new type by combining existing types. For example:

```
type Age = number;
type Person = {
  name: string;
  age: Age;
};

```

In this example, we define a custom type called Age that is an alias for the number type. We also define a custom type called Person that combines the name property (which is a string) and the age property (which is the Age type alias we defined earlier).

An interface, on the other hand, is a way of defining a contract that a class or object must adhere to. It is created using the interface keyword and is used to define the structure and behavior of an object. For example:

```
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}
```

In this example, we define an interface called Person that requires any object that implements it to have a name property (which is a string), an age property (which is a number), and a sayHello method that takes no arguments and returns nothing.

One difference between custom types and interfaces is that custom types can be used to create new types by combining existing types, whereas interfaces can only define the structure and behavior of objects. For example, we could create a custom type that combines two interfaces:


```
type Student = Person & {
  grade: number;
};



```

In this example, we create a custom type called Student that combines the Person interface with a new grade property (which is a number). This creates a new type that has all the properties and methods of a Person object, as well as the grade property.

Another difference between custom types and interfaces is that custom types can be used to define union and intersection types, whereas interfaces cannot. For example, we could define a custom type that is a union of two types:


```
type Id = string | number;
```


In this example, we create a custom type called Id that is a union of the string and number types. This allows us to create variables or function parameters that can be either a string or a number.

In summary, both custom types and interfaces can be used to define new types in TypeScript, but they have different use cases. Custom types are used to create aliases for existing types or to define new types by combining existing types, while interfaces are used to define the structure and behavior of objects. Custom types can also define union and intersection types, whereas interfaces cannot.


### Readonly Interface Properties

In TypeScript, the readonly keyword can be used to define properties of an interface that can only be read, but not changed.

For example, let's say we have an interface called Person that defines a name property and a readonly age property:


```
interface Person {
  name: string;
  readonly age: number;
}

```

In this example, the age property is marked as readonly, which means that it can only be set once when the object is created, and cannot be changed afterwards. This is useful when you want to ensure that certain properties of an object cannot be accidentally modified.

Here's an example of how you could use this Person interface:

```
const person: Person = {
  name: 'John',
  age: 30
};

console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// This will throw an error because the age property is readonly
person.age = 31;
```

In this example, we create a new object that conforms to the Person interface, with a name property set to 'John' and an age property set to 30. We can read both properties using dot notation, but if we try to change the value of the age property, TypeScript will throw an error because it's marked as readonly.

Note that the readonly modifier can also be used with class properties, function parameters, and local variables, in addition to interface properties.


### Extending Interfaces

In TypeScript, an interface can extend another interface using the extends keyword. This allows us to create a new interface that inherits properties and methods from an existing interface, while also adding its own properties and methods.

Here's an example:

```
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const circle: Circle = {
  color: 'red',
  radius: 10
};
```

In this example, we define an interface called Shape that has a color property. We then define a new interface called Circle that extends the Shape interface using the extends keyword, and adds a new radius property.

By extending the Shape interface, the Circle interface inherits the color property. This means that any object that conforms to the Circle interface must also have a color property.

We can then create a new object that conforms to the Circle interface, with a color property set to 'red' and a radius property set to 10.

Extending interfaces can be useful when you want to reuse common properties and methods across multiple interfaces, while also adding additional properties and methods that are specific to each interface. It can help you write more concise and maintainable code, especially when working with complex object structures.


### Interface as Function Types

In TypeScript, interfaces can be used to define the signature of a function, which is called a function type. This allows you to specify the parameters and return type of a function in a reusable way.

Here's an example:

```
interface MyFunction {
  (x: number, y: number): number;
}

const add: MyFunction = (x, y) => {
  return x + y;
};

console.log(add(1, 2)); // Output: 3
```

In this example, we define an interface called MyFunction that specifies a function type. The function takes two parameters of type number and returns a value of type number.

We then create a new variable called add and assign it a function that conforms to the MyFunction interface. The function simply adds the two parameters together and returns the result.

We can then call the add function with two arguments and output the result to the console.

Using interfaces to define function types can be useful when you want to reuse the signature of a function across multiple functions. This can help you write more expressive and maintainable code, especially when working with complex function signatures.

### Optional Parameters and Properties
In TypeScript, you can make function parameters and object properties optional using the ? symbol. This allows you to define interfaces that have properties or parameters that may or may not be present.

Here's an example:

```
interface Person {
  name: string;
  age?: number;
}

function printPerson(person: Person) {
  console.log(`Name: ${person.name}`);
  if (person.age) {
    console.log(`Age: ${person.age}`);
  }
}

printPerson({ name: 'John' }); // Output: Name: John
printPerson({ name: 'Jane', age: 25 }); // Output: Name: Jane Age: 25

```

In this example, we define an interface called Person that has a required name property and an optional age property. We then define a function called printPerson that takes a Person object as a parameter and outputs the name and age (if present) to the console.

We can then call the printPerson function with two different Person objects. The first Person object only has a name property, while the second Person object has both a name and age property.

Using optional parameters and properties in interfaces can be useful when you want to define interfaces that have optional properties, and also when working with functions that may or may not require all parameters to be present. It can help you write more flexible and expressive code.

### Resources
These links might also be interesting:

More on (JS) Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

More on TS Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html

### Interview Questions
- What is object-oriented programming, and why is it important in software development?
- What is a class in TypeScript?
- What is inheritance, and how is it implemented in TypeScript?
- What is polymorphism, and how is it implemented in TypeScript?
- What is encapsulation, and how is it implemented in TypeScript?
- What is abstraction, and how is it implemented in TypeScript?
- What is the difference between abstract classes and interfaces in TypeScript?
- What are access modifiers in TypeScript, and how do they affect class members?
- What is the purpose of constructors in TypeScript classes?
- What is the difference between private and protected access modifiers in TypeScript?
- What is a static property or method in TypeScript, and how is it implemented?
- How do you implement an interface in a TypeScript class?
- What is the difference between a type and an interface in TypeScript?
- What are generic classes and functions in TypeScript, and how are they used?
- What is the purpose of the "this" keyword in TypeScript classes?
- How do you implement method overloading in TypeScript?
- What is a singleton pattern, and how is it implemented in TypeScript?
- How do you handle errors in TypeScript classes?
- What is the difference between an instance method and a static method in TypeScript?
- What is the purpose of the "readonly" keyword in TypeScript classes?
- What is the purpose of the "abstract" keyword in TypeScript classes?
- How do you implement composition in TypeScript classes?
- How do you implement dependency injection in TypeScript?
- How do you implement a factory pattern in TypeScript?
- What is the purpose of the "super" keyword in TypeScript classes, and how is it used?
- What is a mixin in TypeScript, and how is it used to combine functionality from multiple classes?
- What is a namespace in TypeScript, and how is it used to organize code?
- What is the difference between a class and an object in TypeScript?
- What is the "instanceof" operator in TypeScript, and how is it used to check the type of an object?
- What is the purpose of the "extends" keyword in TypeScript classes, and how is it used?
- What is the "implements" keyword in TypeScript, and how is it used to implement interfaces?
- What is a callback function, and how is it used in TypeScript classes?
- What is the difference between an abstract class and a regular class in TypeScript?


## Advanced Types
### INteraction types

In TypeScript, an intersection type is a type that combines multiple types into one by taking the common properties and methods of those types. It allows you to define a type that has all the properties and methods of two or more types.

To define an intersection type, you use the "&" operator to combine two or more types. For example:

```
type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  gender: string;
  email: string;
};

type CombinedType = FirstType & SecondType;

const user: CombinedType = {
  name: "John",
  age: 30,
  gender: "Male",
  email: "john@example.com"
};

```

In the above example, we define two types, FirstType and SecondType, and then combine them using the "&" operator to create a new type CombinedType. CombinedType now has all the properties of FirstType and SecondType.

When we create an object of type CombinedType, we must include all the properties defined in both types. In this case, we must include name, age, gender, and email.

Intersection types are useful when you want to create a type that combines the features of two or more types. They can also be used to create more complex types by combining multiple intersection types together.

For example:


```
type ThirdType = {
  phone: string;
  address: string;
};

type SuperType = CombinedType & ThirdType;

const superUser: SuperType = {
  name: "Jane",
  age: 25,
  gender: "Female",
  email: "jane@example.com",
  phone: "1234567890",
  address: "123 Main St"
};

```

In this example, we define a new type ThirdType with phone and address properties, and then combine it with CombinedType using the "&" operator to create a new type SuperType. SuperType now has all the properties of CombinedType and ThirdType.

When we create an object of type SuperType, we must include all the properties defined in all three types: name, age, gender, email, phone, and address.

Overall, intersection types allow you to create more powerful and flexible types in TypeScript by combining the features of multiple types.

### Type Guards
In TypeScript, type guards are a way to narrow down the type of a value within a conditional statement. They are used to improve type safety by allowing you to check the type of a variable at runtime and perform different actions based on its type.

Type guards come in several forms, including:

1. typeof type guards
The typeof type guard checks the type of a variable based on its runtime type. For example:

```
function printLength(strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
    console.log(strOrArray.length); // OK
  } else {
    console.log(strOrArray.length); // OK
  }
}

```


In this example, the typeof type guard checks whether strOrArray is a string or an array of string and then performs different actions based on the type.

2. instanceof type guards
The instanceof type guard checks whether an object is an instance of a particular class or interface. For example:

```
interface Dog {
  bark(): void;
}

class Labrador implements Dog {
  bark() {
    console.log("Woof!");
  }

  swim() {
    console.log("Swimming...");
  }
}

function petTheDog(dog: Dog) {
  if (dog instanceof Labrador) {
    dog.swim(); // OK
  }
  dog.bark(); // OK
}

```

In this example, the instanceof type guard checks whether the dog object is an instance of the Labrador class and then performs different actions based on whether it is or not.

3. User-defined type guards
User-defined type guards are functions that check the type of a value based on custom logic. They are created by defining a function that returns a boolean and then using it in a conditional statement. For example:

```
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function calculateArea(shape: Shape) {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

```

In this example, we define a Shape type that can be either a Circle or a Square. We then define a isCircle function that checks whether a Shape is a Circle and returns a boolean. We use this function in the calculateArea function to perform different calculations based on the type of Shape.

Overall, type guards are an important feature of TypeScript that help ensure type safety at runtime by allowing you to check the type of a variable and perform different actions based on its type. They can be used with typeof, instanceof, or user-defined functions.


### Discriminated Unions

Discriminated unions are a powerful feature of TypeScript that allow you to create a type that can represent a range of different possibilities. Discriminated unions make it easy to write code that is both type-safe and easy to read.

In a discriminated union, each variant of a type has a discriminant property that is unique to that variant. The discriminant property is a string literal type that describes the type of the value. For example:

```
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

```

In this example, the Shape type is a discriminated union of Square and Circle. The kind property is the discriminant property, and it has the value "square" for the Square type and "circle" for the Circle type.

Discriminated unions can be used to create type-safe code that is easy to read and understand. For example, you can use a switch statement with the discriminant property to handle each variant of the type:

```
function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

```

In this example, the calculateArea function uses a switch statement with the kind property to handle each variant of the Shape type. Because TypeScript knows that the discriminant property uniquely identifies each variant, it can ensure that the switch statement is type-safe and that all possible variants are handled.

Discriminated unions are a powerful feature of TypeScript that allow you to create type-safe code that is easy to read and understand. By using a discriminant property to identify each variant of a type, you can create code that is both flexible and easy to work with.

### Type Casting

Type casting in TypeScript is a way to tell the TypeScript compiler that you know more about the type of a value than it does. It allows you to change the type of a value from one type to another, and is useful when you need to work with a value in a different way than the type inferred by TypeScript.

Type casting is done using the as keyword or the < > syntax, and it tells the TypeScript compiler to treat the value as if it were of a different type. For example:

```
const someValue: any = "Hello, world!";
const strLength: number = (someValue as string).length;

```

In this example, the someValue variable is of type any, which means TypeScript doesn't know anything about its type. However, we know that it's a string, so we use type casting to tell TypeScript to treat it as a string. We use the as keyword to cast someValue to a string, and then we use the .length property to get its length.

Type casting can also be used with custom types and interfaces. For example:

```
interface Person {
  name: string;
  age: number;
}

const obj: any = { name: "John", age: 30 };
const person: Person = obj as Person;

```

In this example, we have an obj variable of type any, but we know that it has the properties name and age. We use type casting with the as keyword to tell TypeScript that obj should be treated as a Person object, and we assign it to the person variable, which is of type Person.

It's important to use type casting judiciously, as it can be a potential source of errors if used incorrectly. It's best to use type casting only when you are sure that the value being casted is of the correct type, or when you need to work with a value in a way that isn't directly supported by its inferred type.




### Index Properties
Index properties in TypeScript allow you to define object types with dynamic keys. In other words, they allow you to define object types that can have any number of properties, as long as they meet certain criteria.

There are two types of index properties in TypeScript: string index signatures and number index signatures.

String index signatures allow you to define an object type with a string index that can be used to access any property that has a string key:

```
interface StringMap {
  [key: string]: string;
}

const map: StringMap = {
  name: "John",
  age: "30"
};

console.log(map.name); // "John"
console.log(map.age); // "30"

```

In this example, we define a StringMap interface with a string index signature that says that any property with a string key must have a value of type string. We then create a map object that has two properties, name and age, both of which have string values. We can access these properties using dot notation.

Number index signatures work in a similar way, but they allow you to define an object type with a number index that can be used to access any property that has a number key:


```
interface NumberMap {
  [key: number]: string;
}

const map: NumberMap = {
  0: "John",
  1: "30"
};

console.log(map[0]); // "John"
console.log(map[1]); // "30"

```

In this example, we define a NumberMap interface with a number index signature that says that any property with a number key must have a value of type string. We then create a map object that has two properties, 0 and 1, both of which have string values. We can access these properties using bracket notation.

One important thing to note about index properties is that they cannot be used in conjunction with explicit property declarations. In other words, if you define a string or number index signature on an object type, you cannot also define specific properties with those same keys.

Index properties are a powerful feature of TypeScript that allow you to define flexible object types that can be used in a variety of situations. By using index signatures, you can create object types that can have any number of properties, as long as they meet certain criteria.

### Function Overloads

Function overloads in TypeScript allow you to define multiple signatures for a function, each with a different set of parameter and return types. This allows the TypeScript compiler to provide better type checking and inference when calling the function with different argument types.

To define function overloads, you start by providing a list of overload signatures for your function. Each signature should have a unique set of parameter types and a corresponding return type. For example:

```
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}

```

In this example, we define an add function with two overload signatures. The first signature takes two number parameters and returns a number. The second signature takes two string parameters and returns a string. The third and final signature is the implementation of the function, which takes two parameters of type any and returns a value of type any.

When you call the add function with arguments, TypeScript will automatically determine which overload to use based on the types of the arguments:

```
const result1 = add(1, 2); // result1 is inferred as a number
const result2 = add("Hello, ", "world!"); // result2 is inferred as a string

```

In this example, the first call to add passes two number arguments, so TypeScript uses the first overload and infers that the result should be a number. The second call passes two string arguments, so TypeScript uses the second overload and infers that the result should be a string.

Function overloads can be especially useful when working with APIs that accept multiple types of arguments and return different types of results based on those arguments. By defining multiple overload signatures, you can ensure that your code is type-safe and will work correctly with different argument types.

One important thing to note is that the implementation of the function (the final signature in the example above) must be compatible with all of the overload signatures. In other words, the implementation must accept all of the parameter types and return a value that is compatible with all of the return types. If the implementation does not meet these criteria, TypeScript will produce an error.

### Optional Chaining
Optional chaining in TypeScript is a feature that allows you to safely access properties or call methods on an object that may be undefined or null without causing a runtime error. It provides a more concise and readable syntax for handling null and undefined values.

To use optional chaining, you add a question mark (?) before the dot (.) operator when accessing properties or calling methods. Here's an example:


```
const user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};

const zipCode = user?.address?.zip;
```


In this example, we have an object called user with several properties, including an address object with a zip property. We use optional chaining to safely access the zip property, even if the user or address objects are undefined or null.

If the user or address objects are undefined or null, the expression user?.address?.zip will return undefined instead of throwing a runtime error. This allows you to write more robust and error-resistant code.

Optional chaining can also be used with method calls. For example:

```
const user = {
  name: "John",
  age: 30,
  getAddress(): string {
    return "123 Main St, Anytown, CA 12345";
  }
};

const zipCode = user?.getAddress?.()?.split(", ")[2];

```

In this example, we have an object called user with a method called getAddress that returns a string. We use optional chaining to safely call the getAddress method, even if the user object is undefined or null. We also use the ()?. syntax to invoke the split method on the result of getAddress, in case the result is undefined or null.

Optional chaining can greatly improve the readability and maintainability of your code, especially when dealing with complex object structures or API responses that may contain null or undefined values.


### Null Coalescing

Null coalescing in TypeScript is a feature that provides a shorthand syntax for checking if a value is null or undefined, and returning a default value in case it is. It helps to simplify and streamline the code that handles null and undefined values.

The null coalescing operator is represented by two consecutive question marks (??). Here's an example:

```
const name = null ?? "John";
console.log(name); // Output: "John"

```

In this example, we use the null coalescing operator to check if the name variable is null or undefined. Since it is null, the operator returns the default value of "John". The resulting value is then assigned to the name variable and printed to the console.

The null coalescing operator can also be used with expressions that may return null or undefined. For example:

```
const getUser = (id: number): { id: number; name?: string } => {
  return { id };
};

const userName = getUser(123)?.name ?? "Unknown";
console.log(userName); // Output: "Unknown"

```

In this example, we have a function called getUser that returns an object with an id property and an optional name property. We use the null coalescing operator to check if the name property is null or undefined, and return the default value of "Unknown" if it is.

The null coalescing operator can also be chained together with optional chaining for even more concise and readable code. For example:

```
const user = {
  name: null
};

const userName = user?.name ?? "Unknown";
console.log(userName); // Output: "Unknown"

```

In this example, we use optional chaining to safely access the name property of the user object, even if it is null or undefined. We then use the null coalescing operator to return the default value of "Unknown" if the name property is null or undefined.

Null coalescing can be a powerful tool for simplifying code that deals with null and undefined values. However, it should be used with caution, as it may hide bugs or unexpected behavior if not used appropriately.


### Resources
More on Advanced Types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html


### Exercises
1. Intersection Types
Create an interface called Person with the following properties:

firstName (string)
lastName (string)
age (number)
Create an interface called Student with the following properties:

id (number)
major (string)
Create a type called PersonWithStudentInfo that extends Person and Student, and adds the following properties:

enrollmentDate (Date)
status ("full-time" or "part-time")

2. Type Guards
Create a function called printPersonInfo that takes a parameter called person of type Person | Student. The function should print out the firstName, lastName, and age properties of the person object, and the major property if the object is of type Student.

Use a type guard to check if the person object is of type Student, and print out the major property if it is.

3. Discriminated Unions
Create a type called Shape that represents a shape, with the following properties:

kind ("circle" or "square" or "rectangle")
radius (number) - only present if kind is "circle"
width (number) - only present if kind is "square" or "rectangle"
height (number) - only present if kind is "rectangle"
Create a function called getArea that takes a parameter of type Shape and returns the area of the shape.

Use a switch statement and the kind property to handle each type of shape differently.

4. Type Casting
Create a variable called x of type any, and assign it the value "hello".

Cast x to the type number and store the result in a variable called y.

Print out the value of y.

5. Index Properties
Create an interface called Dictionary with the following properties:

length (number) - the number of entries in the dictionary
keys (string[]) - an array of keys in the dictionary
values (unknown[]) - an array of values in the dictionary, indexed by their corresponding keys
Create a function called getValue that takes two parameters: dict of type Dictionary and key of type string. The function should return the value in the dictionary corresponding to the given key, or undefined if the key is not found.

Use an index property to allow values to be indexed by keys.

6. Function Overloads
Create a function called add that takes two parameters of type number, and returns their sum.

Create a function overload for add that takes two parameters of type string, and concatenates them.

Create another function overload for add that takes two parameters of type boolean, and returns their logical AND.

7. Optional Chaining
Create an object called person with the following properties:

name (string)
address (object)
street (string)
city (string)
state (string)
zip (string)
Use optional chaining to print out the zip property of the address object, even if person or address is null or undefined.

8. Nullish Coalescing
Create a variable called `x` , and set its value to null.

Create another variable called y, and use nullish coalescing to set its value to x if x is not null or undefined, and 0 otherwise.

Print out the value of y.

### Interview Questions
- What are intersection types in TypeScript?
- How can you use intersection types to combine multiple types into a single type?
- Give an example of a scenario where you might use intersection types.
- What are type guards in TypeScript?
- How can you use a type guard to narrow down the type of a variable or parameter?
- Give an example of a scenario where you might use a type guard.
- What are discriminated unions in TypeScript?
- How can you use a discriminated union to define a type that can have multiple shapes with different properties?
- Give an example of a scenario where you might use a discriminated union.
- What is type casting in TypeScript?
- How can you use type casting to convert a value of one type to another?
- Give an example of a scenario where you might use type casting.
- What are index properties in TypeScript?
- How can you use an index property to create a dictionary-like object?
- Give an example of a scenario where you might use an index property.
- What are function overloads in TypeScript?
- How can you use function overloads to define multiple signatures for a function?
- Give an example of a scenario where you might use function overloads.
- What is optional chaining in TypeScript?
- How can you use optional chaining to access nested properties on an object that might be null or undefined?
- Give an example of a scenario where you might use optional chaining.
- What is nullish coalescing in TypeScript?
- How can you use nullish coalescing to provide a default value for a variable that might be null or undefined?
- Give an example of a scenario where you might use nullish coalescing.
- Can you combine more than two types using intersection types? If so, how?
- How do intersection types differ from union types in TypeScript?
- Are there any limitations or drawbacks to using intersection types?
- Can you use a custom function as a type guard in TypeScript? If so, how?
- How can you use the instanceof operator as a type guard?
- Are there any performance implications to using type guards?
- Can you have multiple discriminants in a discriminated union in TypeScript? If so, how?
- How can you use a discriminated union with switch statements in TypeScript?
- Are there any limitations or drawbacks to using discriminated unions?
- How can you use the as keyword for type casting in TypeScript?
- Are there any potential risks or pitfalls to using type casting?
- When might you prefer to use type guards instead of type casting?
- What is the difference between an index signature and an index property in TypeScript?
- Can you use an index property to enforce a specific data type for the keys of an object?
- Are there any limitations or drawbacks to using index properties?
- Can you use function overloads with arrow functions in TypeScript? If so, how?
- How can you use generic types with function overloads in TypeScript?
- Are there any limitations or drawbacks to using function overloads?
- Can you use optional chaining with functions in TypeScript? If so, how?
- How can you use optional chaining with arrays in TypeScript?
- Are there any performance implications to using optional chaining?
- Can you use nullish coalescing with functions in TypeScript? If so, how?
- How can you use nullish coalescing with objects in TypeScript?
- Are there any limitations or drawbacks to using nullish coalescing?
