# Undedrstanding TypeScript
## Problems with JavaScript

Consider the following code in JavaScript:

```js
function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
```
The above code is available [here](code/1. Getting Started/1.1. JavaScript Drawbacks/first-project/js-only.js).

Here we're adding two input values which are provided by the user. Load the HTML file in the folder `code/1. Getting Started/1.1. JavaScript Drawbacks/first-project` in your browser by double-clicking on it. 

Open the Chrome console. In the two input boxex provide the input as 10 and 5. We expect 15 to be printed on the Console but instead we get 105. This is because the above function is not considering the input type as integer or number and is instead performing string concatenation.

Modify the code as shown below:

```js
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else {
        return +num1 + +num2; //converts the string to number.
    }
  
}
```

Reload the HTML page and perform the same calculation as before. This time you should get the result as `15`.


## Installing TypeScript
In order to install TypeScript we need Node Package Manager (NPM) which is part of NodeJS. Hence, first install NodeJS:
1. Navigate to https://nodejs.org/en/
2. Download the latest LTS and install it.

Once NodeJS is installed, open command line and execute the following command:

```
sudo npm install -g typescript
```

This installs TypeScript on your machine globally and it can be invoked irrespective of the directory.

Now, let's add a TypeScript file to the folder `first-project` called `using-ts.ts`. Copy all the code from `js-only.js` and paste it in the file `using-ts.ts`.

You should start to see some errors immediately. The reason for the errors is something we'll discuss later in the course. For now, add the type to the variables `input1` and `input2` as shown below:

```
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
```

Modify the `add` function to add the type to the input variables:

```
function add(num1: number, num2: number) {
  return num1 + num2;
}
```

Now compile the `TypeScript` code by running the following command `tsc using-ts.ts` from Terminal or command line.

It will result in the following error:

```
using-ts.ts:10:19 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

10   console.log(add(input1.value, input2.value));
                     ~~~~~~~~~~~~


Found 1 error in using-ts.ts:10
```

This is because the function `add` is expecting two numbers and not strings.

Modify the code as shown below:

```
button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

```

And the code should compile file and generate a JavaScript file with the name `using-ts.js`.

Note: Full code for this demo is in the folder: `code/1. Getting Started/1.1. JavaScript Drawbacks/adjusted-project`.

## Setting up Course Project
Create a new directory where you want to store the project code. 

Copy the contents from `code/1. Getting Started/1.2 Course Project/course-starting-project` to the newly created folder.

The code contains a file called `package.json` which has the dependencies listed. One of the dependency in the file is `lite-server` which will allow us to run a lite weight server to host the web files.

Note: All the code folders here on will include the file called `package.json` but not `node_modules`. You should run the command `npm install` to install the required dependencies to your project folder.


Now, run the commands `tsc app.ts` and `npm start` to compile the TypeScript and launch the project in a local browser.
# TypeScript Basics and Basic Types
Syntax to specify the type of data is : `variable_name : data_type`. For example, consider the following function to add two numbers:

```
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

## TypeScript types vs JavaScript Types
Consider the following function in JavaScript:

```
function add(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
     throw new Error('Incorrect input!');
  }
  return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

In this function we are ysing the `typeof` operator to check for the type of input and throwing error if the type is not a number.

This behavior is totally unnecessary because it is only invoked during runtime and stops the other parts of the project/application from running.

This can be made better when using TypeScript which helps prevent the errors during development itself rather than adding any additonal checks. The above function in TypeScript is as shown below:

```
function add(n1: number, n2: number) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

Here, we're only specifying the type of the input and not performing any checks at all.


## Type Casing

In TypeScript, you work with types like `string` or `number` all the times.

Important: It is `string` and `number` (etc.), NOT `String`, `Number` etc.

**The core primitive types in TypeScript are all lowercase!**

## Working with Numbers, Strings and Booleans
The `add` function from before is modified to add other types of data i.e `number` and `string`, and `boolean`

```
function add(n1: number, n2: number, showResult: boolean, phrase: string)
```

In the code below, we're passing a `boolean` and a `string` that control how the final result is handled. Towards the bottom of the code, check the way the functions is invoked:

```
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

```

## Type Assignment and Type Inference
Consider the following code:

```
const number1 = 5;
```
Here we're not specifying any type for the variable `number1` but TS automatically infers the type based on what is assigned to the variable.

We can also specify the type of the variable by using the `:` syntax from before as show below:

```
const number1: number = 5;
```

## Object Types
The keyword `object` can be used to specify the type of a variable as an Object in TypeScript.

Consider the following code:

```
const person: {
name: string;
age: number;
} = {
  name: 'Some Name',
  age: 30
};
// console.log(person.nickname); Will throw a compilation error
console.log(person.name);

```

Here the `console.log(person.nickname)` will throw an error because the property `nickname` is not defined on the object called `person`. 

Notice the way the `person` object is defined:
```
person: {
name: string;
age: number;
}
```

We're specifying that the `person` variable will hold an object which has a `name` property and an `age` property with types as `string` and `number` respectively`.

If you try to assign anything else to the `person` variable, TS will complain.

It is not recommended to specify the type of object like this and instead let TS inter the type.

## Nested Objects & Types

Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

```
const product = {
      id: 'abc1',
      price: 12.99,
      tags: ['great-offer', 'hot-and-new'],
      details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
      }
    }
```

This would be the type of such an object:
```
    {
      id: string;
      price: number;
      tags: string[];
      details: {
        title: string;
        description: string;
      }
    }
```

So you have an object type in an object type so to say.

## Arrays
Consider the following modified definition of the person object above:

```
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};
```

When you hover your mouse over the `hobbies` property, you'll notice that it is of type `string[]`.

Here, we can only assign a string array to the property called `hobbies`. We can also define a variable as an array as shown below:

```
let favoriteActivities: string[];
favoriteActivities = ['Sports'];
```

All the following will throw an error:

```
favoriteActivities = 1;
favoriteActivities = ['Sports', 1];
```

The last line throws an error because we're assigning an array of string and number. We can fix this by specifying the type as `any[]` but when using `any` we're losing the type-power of TS.

## Working with Tuples

Let's consider that we want to add a new attribute to the person called `role` and the value for this role should consist of two values: a number and a string.

```
role: [2, 'author']
```

When you add this property to the `person` object, TypeScript is going to infer the `role` as `(number | string)[]` which means, it is an array of either number or string. It is called `union` type which we will discuss later.

When defined like this the following are all valid:

```
// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];
```

But for now, we really want to define a role that has 2 parts: a number and a string. That's it!

For this we need to use a special type called `tuple`. Tuples are not inferred by TS correctly and hence we have to specify the type of person object.

```
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // THIS IS THE TUPLE TYPE
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};
```

We define tuple using the `[]` within which we can specify the type of data we're expecting.

In short this means, we need an array where the first element is a `number` and the second element is a `string`. Adding anymore elements or modifying the first two elements to other types than expected will result in an error.

## Working with Enums
Enums allow us to define constants.

```
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN , READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
```

By default, the constants in the `enum` get the values as 0, 1 etc. We can also modify these as shown below:

```
enum Role { ADMIN = 5, READ_ONLY , AUTHOR};
```

Here, `ADMIN` get the value as 5 and the rest get a value incremented by 1 ie. `READ_ONLY` is 6, `AUTHOR` is 7.

We can specify our own values to all the constants as shown below:

```
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
```

