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





