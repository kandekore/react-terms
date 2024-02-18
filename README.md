
### Variables

Variables in JavaScript are used to store data values. JavaScript has three ways to declare variables:

- **var**: Declares a variable, optionally initializing it to a value.
  ```javascript
  var name = "John";
  ```
- **let**: Declares a block-scoped, local variable, optionally initializing it to a value.
  ```javascript
  let age = 30;
  ```
- **const**: Declares a block-scoped, read-only named constant.
  ```javascript
  const birthday = "01/01/1990";
  ```

### Data Types

JavaScript variables can hold different types of data, such as:

- **String**: Represents textual data.
  ```javascript
  let greeting = "Hello, World!";
  ```
- **Number**: Represents both integer and floating-point numbers.
  ```javascript
  let score = 25;
  ```
- **Boolean**: Represents a logical entity having two values: true and false.
  ```javascript
  let isAdult = true;
  ```
- **Object**: Used to store collections of data and more complex entities.
  ```javascript
  let person = { firstName: "John", lastName: "Doe" };
  ```
- **Array**: Used to store multiple values in a single variable.
  ```javascript
  let colors = ["Red", "Green", "Blue"];
  ```
- **Null**: Represents the intentional absence of any object value.
  ```javascript
  let empty = null;
  ```
- **Undefined**: Indicates that a variable has not been assigned a value.
  ```javascript
  let und;
  ```

### Operators

Operators are used to perform operations on variables and values:

- **Arithmetic**: Perform mathematical calculations.
  ```javascript
  let sum = 10 + 5; // 15
  ```
- **Assignment**: Assign values to JavaScript variables.
  ```javascript
  let x = 10;
  ```
- **Comparison**: Compare two values and return true or false.
  ```javascript
  let isEqual = x == 10; // true
  ```
- **Logical**: Used to determine the logic between variables or values.
  ```javascript
  let isGreater = x > 5 && x < 15; // true
  ```
- **Unary**: Operate on a single operand.
  ```javascript
  x++;
  ```
- **Ternary (Conditional)**: Assign a value to a variable based on some condition.
  ```javascript
  let result = x > 10 ? "Greater than 10" : "Less than or equal to 10";
  ```

### Control Flow

Control flow statements are used to specify the order in which the code executes:

- **if statement**: Executes a block of code if a specified condition is true.
  ```javascript
  if (x > 10) {
    console.log("x is greater than 10");
  }
  ```
- **else statement**: Executes a block of code if the same condition is false.
  ```javascript
  else {
    console.log("x is not greater than 10");
  }
  ```
- **else if statement**: Specifies a new condition to test if the first condition is false.
  ```javascript
  else if (x == 10) {
    console.log("x is equal to 10");
  }
  ```
- **switch statement**: Specifies many alternative blocks of code to be executed.
  ```javascript
  switch (x) {
    case 10:
      console.log("x is 10");
      break;
    default:
      console.log("x is not 10");
  }
  ```
- **for loop**: Loops through a block of code a number of times.
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```
- **while loop**: Loops through a block of code as long as a specified condition is true.
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```
- **do-while loop**: Also loops through a block of code as long as a specified condition is true.
  ```javascript
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

### Functions

Functions are blocks of code designed to perform a particular task:

- **Function declaration**: Defines a function with the specified parameters.
  ```javascript
  function greet(name) {
    return "Hello, " + name;
  }
  ```
- **Function expression**: A function can also be defined using an expression.
  ```javascript
  let greet = function(name
  ```

) {
return "Hello, " + name;
};

````
- **Arrow function**: Allows a short syntax for writing function expressions.
```javascript
let greet = (name) => "Hello, " + name;
````

- **IIFE (Immediately Invoked Function Expression)**: A function that runs as soon as it is defined.
  ```javascript
  (function () {
    console.log("Immediately invoked");
  })();
  ```

### Scope

Scope determines the accessibility of variables:

- **Global scope**: Variables defined outside any function have global scope.
  ```javascript
  var globalVar = "I'm global";
  ```
- **Local scope**: Variables declared within a function are local to that function.
  ```javascript
  function localScope() {
    var localVar = "I'm local";
  }
  ```
- **Block scope**: `let` and `const` are scoped to the block in which they are defined.
  ```javascript
  if (true) {
    let blockVar = "I'm block-scoped";
  }
  ```
- **Lexical scope**: Defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
  ```javascript
  function outer() {
    var outerVar = "I'm outside!";
    function inner() {
      console.log(outerVar);
    }
    return inner;
  }
  var getInner = outer();
  getInner(); // Logs "I'm outside!"
  ```

### Arrays

Arrays in JavaScript are used to store multiple values in a single variable:

- **Array methods**:

  - `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
    ```javascript
    colors.push("Yellow"); // Adds 'Yellow' to the end
    ```
  - `pop()`: Removes the last element from an array and returns that element.
    ```javascript
    colors.pop(); // Removes the last element
    ```
  - `shift()`: Removes the first element from an array and returns that removed element.
    ```javascript
    colors.shift(); // Removes the first element
    ```
  - `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.
    ```javascript
    colors.unshift("Purple"); // Adds 'Purple' to the beginning
    ```
  - `splice()`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    ```javascript
    colors.splice(2, 0, "Orange"); // Adds 'Orange' at index 2
    ```
  - `slice()`: Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
    ```javascript
    let newColors = colors.slice(1, 3); // Copies elements at index 1 to 2
    ```
  - `concat()`: Is used to merge two or more arrays.
    ```javascript
    let moreColors = ["Pink", "Black"];
    let combinedColors = colors.concat(moreColors); // Merges two arrays
    ```

- **Array iteration**:
  - `forEach()`: Executes a provided function once for each array element.
    ```javascript
    colors.forEach((color) => console.log(color));
    ```
  - `map()`: Creates a new array populated with the results of calling a provided function on every element in the calling array.
    ```javascript
    let lengths = colors.map((color) => color.length);
    ```
  - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
    ```javascript
    let longColors = colors.filter((color) => color.length > 4);
    ```
  - `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.
    ```javascript
    let totalLength = colors.reduce((acc, color) => acc + color.length, 0);
    ```

### Objects

Objects in JavaScript are collections of properties:

- **Object properties**:

  - **Dot notation**: Access properties using a dot.
    ```javascript
    console.log(person.firstName); // "John"
    ```
  - **Bracket notation**: Access properties using brackets.
    ```javascript
    console.log(person["lastName"]); // "Doe"
    ```

- **Object methods**:

  - `Object.keys()`: Returns an array of a given object's own property names.
    ```javascript
    let keys = Object.keys(person);
    ```
  - `Object.values()`: Returns an array of a given object's own enumerable property values.
    ```javascript
    let values = Object.values(person);
    ```
  - `Object.entries()`: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```javascript
    let entries = Object.entries(person);
    ```

- **Object destructuring**: A JavaScript expression that allows unpacking values from arrays, or properties from objects, into distinct variables.
  ```javascript
  let { firstName, lastName } = person;
  ```

### Promises

Promises are used for asynchronous computations:

- **Promise states**:

  - **Pending**: Initial state, neither fulfilled nor rejected.
  - **Fulfilled**: Meaning that the operation completed successfully.
  - **Rejected**: Meaning that the operation failed.

- **Promise methods**:

  - `then()`: Adds fulfillment and rejection handlers to the promise.
    ```javascript
    promise.then(
      (value) => console.log(value),
      (error) => console.log(error)
    );
    ```
  - `catch()`: Adds a rejection handler.
    ```javascript
    promise.catch((error) => console.log(error));
    ```
  - `finally()`: Adds a handler to be called when the promise is settled, regardless of its outcome.
    ```javascript
    promise.finally(() => console.log("Completed"));
    ```

- `Promise.all()`: Takes an iterable of promises as an input, and returns a single Promise that resolves when all of the promises in the iterable have resolved.
  ```javascript
  Promise.all([promise1, promise2]).then((values) => console.log(values));
  ```

### Asynchronous JavaScript

Asynchronous JavaScript enables performing long network requests without blocking the main thread:

- **Callbacks**: A function passed into another function as an argument to be executed later.
  ```javascript
  function fetchData(callback) {
    setTimeout(() => callback("Data fetched"), 1000);
  }
  ```
- **Promises**: An object representing the eventual completion or failure of an asynchronous operation.
  ```javascript
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
  ```
- **Async/Await**: A syntactic sugar built on top of promises, making asynchronous code look and behave a little more like synchronous code.
  ```javascript
  async function fetchData() {
    let data = await promise;
    console.log(data);
  }
  ```

### Error Handling

JavaScript provides mechanisms for handling errors:

- **try...catch statement**: Marks a block of statements to try, and specifies a response, should an exception be thrown.
  ```javascript
  try {
    nonExistentFunction();
  } catch (error) {
    console.error("An error occurred:", error);
  }
  ```
- **throw statement**: Throws a user-defined exception.
  ```javascript
  if (!user) {
    throw new Error("User not found!");
  }
  ```

### JSON (JavaScript Object Notation)

JSON is a syntax for storing and exchanging data.

```javascript
let json = '{"name": "John", "age": 30}';
let user = JSON.parse(json); // Converts JSON text into a JavaScript object
```

### Modules

Modules are used in JavaScript to break up code into manageable pieces:

- **import**: Allows you to bring modules or specific features into your current file.
  ```javascript
  import { moduleFunction } from "./module.js";
  ```
- **export**: Allows you to make parts of your module available to be imported into other files.
  ```javascript
  export function moduleFunction() { ... }
  ```

### DOM Manipulation

The Document Object Model (DOM) is an interface for HTML and XML documents:

- **Selecting elements**: Accessing elements from the DOM.
  ```javascript
  let element = document.getElementById("myElement");
  ```
- **Modifying elements**: Changing the content or style of elements.
  ```javascript
  element.textContent = "New content";
  ```
- **Creating elements**: Adding new elements to the DOM.
  ```javascript
  let newElement = document.createElement("div");
  document.body.appendChild(newElement);
  ```

### Events

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way:

- **Event listeners**: Add a function that will be called whenever a specified event occurs.
  ```javascript
  element.addEventListener("click", function () {
    console.log("Element clicked!");
  });
  ```
- **Event propagation**: The way some events bubble up through the DOM or capture down to the target element.
- **Event delegation**: A technique of using a single event listener to manage all of a particular type of event for child elements.

### AJAX (Asynchronous JavaScript and XML)

AJAX is a technique for creating fast and dynamic web pages:

```javascript
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.open("GET", "url", true);
xhr.send();
```

### Fetch API

The Fetch API provides a JavaScript interface for accessing and manipulating parts of

the HTTP pipeline, such as requests and responses:

```javascript
fetch("url")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### ES6+ Features

ES6 and later versions introduced several new features:

- **Template literals**: Allow embedded expressions and multi-line strings.
  ```javascript
  let greeting = `Hello, ${name}!`;
  ```
- **Destructuring assignment**: Allows unpacking values from arrays or properties from objects.
  ```javascript
  let [first, second] = [1, 2];
  let { firstName, lastName } = person;
  ```
- **Spread/rest operator**: Allows an iterable to expand in places where 0+ arguments are expected.
  ```javascript
  let parts = ["shoulders", "knees"];
  let lyrics = ["head", ...parts, "and", "toes"];
  ```
- **Arrow functions**: Provide a concise syntax for writing function expressions.
  ```javascript
  let add = (a, b) => a + b;
  ```
- **Classes**: A template for creating objects.
  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  ```
- **let and const**: Block-scope variable declarations.
- **Default parameters**: Allow named parameters to be initialized with default values if no value or undefined is passed.
  ```javascript
  function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  ```
- **Modules**: Support for `import` and `export` statements.
- **Promises**: For asynchronous operation.

### Web APIs

Web APIs provide capabilities to interact with the browser and perform various tasks:

- **Local Storage**: Allows web applications to store data persistently in the browser.
  ```javascript
  localStorage.setItem("key", "value");
  let value = localStorage.getItem("key");
  ```
- **Session Storage**: Similar to Local Storage but with a shorter lifecycle.
  ```javascript
  sessionStorage.setItem("key", "value");
  ```
- **Web Storage API**: Provides mechanisms by which browsers can store key/value pairs.

### Libraries and Frameworks

JavaScript libraries and frameworks are pre-written code snippets or rules to help ease development:

- **React**: A library for building user interfaces.
- **Angular**: A platform and framework for building single-page client applications using HTML and TypeScript.
- **Vue.js**: A progressive framework for building user interfaces.

### Debugging

Debugging is the process of finding and fixing errors in software:

- **Console.log()**: Logs information to the browser's console.
  ```javascript
  console.log("Debug message");
  ```
- **Breakpoints**: Points at which the code execution can be paused.
- **DevTools**: Browser tools that provide a range of features for debugging web applications.

### Others

- **Closures**: A feature where an inner function has access to the outer (enclosing) function’s variables.
- **Callbacks**: Functions passed as arguments to other functions to be executed at a later time.
- **Prototypes**: The mechanism by which JavaScript objects inherit features from one another.
- **this keyword**: Refers to the object it belongs to.
- **Hoisting**: The behavior of moving declarations to the top of their scope before code execution.
- **Strict mode**: A way to opt in to a restricted variant of JavaScript.

