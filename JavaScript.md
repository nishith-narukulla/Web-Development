# JavaScript

## What is JavaScript used for?

- DOM(Document Object Model) manipulation
    - it is a tree like structure consisiting of nodes where every node is a HTML element and JavaScript is used to manipulate content and styles of any node

- Events Handling
    - it allows us to do some actions based on users action
    - provides dyanamic functionality

- Asynchronous Requests
    - allows us to send http requests to a server or API and update data dynamically without refreshing the web page

- Animations & Effects

- Data Manipulation

- Storing Data
    - allows us to store data on client side
    - Cookies, LocalStorage etc

- Single Page Applications

- Creating API's & Web Services

## Console methods
```js
console.log('This is log message')

console.error('This is error message')

console.warn('this is warning')

console.info('this is info')

console.table({ 'name': 'nishith', email: 'xyz@gamil.com' })

console.group('group-1')
console.log('hi')
console.log('hi')
console.log('hi')
console.groupEnd()
```

## Commenting
```js
// Single line comment

/*
Multiline
comment
*/
```

## Variables
```js
// ways to declare variables
// var, let, const(cant be re-assigned)
```

## Datatypes
- JavaScript is dynamically-typed langauge means no need to define with datatype
### Primitive Datatypes
    - String
    - Number -> Int/float
    - Boolean
    - Null -> intentional absence of any object
    - Undefined -> undefined/un-assigned variable
    - Symbol -> Built in Object
    - BigInt -> for values greaterthan Number type
**type of --> to find the datatype of a variable**
```js
// String
const firstName = 'Nishith';

// Number
const num1 = 30
const num2 = 33.3

// Boolean
const flag = true
const hasBike = false

// Null
const cars = null

// Symbol
const sym = Symbol('id')

// Undefined
let num3
const num4 = undefined

// BigInt
const num5 = 123456789012345653n

const output = num5

console.log(output, typeof output)
```
### Reference Datatypes
    - Arrays
    - Object literals
    - functions
```js
// Arrays
const numbers = [1, 2, 3, 4, 5]

// Object literals
const student = {
    id: 'xyz',
    age: 20
}

// functions
function sayHello() {
    console.log('hello')
}

const output = sayHello
console.log(output, typeof output)
```

### Primitive vs Reference datatypes
**Primitive:**
    - stored directly in the stack where it is accessed from
```js
const name = 'Nishith'

let newName = name
newName = 'Mikey'

// name & newName are stored at different locations in the stack
// modification of one primitive type wont effect another
console.log(name, newName) // Nishith Mikey
```
**Reference:**
    - stored in the heap and accessed by reference
```js
const student = {
    id: 'xyz',
    age: 20
}

const newStudent = student
newStudent.id = 'abc'

// as student & newStudent points to the same reference
// modifying one will effect other
console.log(student, newStudent)
```

## Type Conversion
### String to Number
```js
let num = '100'
console.log(num, typeof num) // 100 string

// using parseInt for real numbers
// using parseFloat for decimals
num = parseInt(num)

// using unary operator
num = +num

// using Number constructor
num = Number(num)

console.log(num, typeof num) // 100 'number'
```
### Number to String
```js
let num = 100
console.log(num, typeof num) // 100 'number'

// using toString() method
// why it works: js creates a wrapper for the variable to allow us to use methods on a primitive type
num = num.toString()

// using String constructor
num = String(num)

console.log(num, typeof num) // 100 string
```

### Number to Boolean
```js
let num1 = 0
let num2 = 10
console.log(num2, typeof num2) // 0 'number'

// using Boolean constructor
num1 = Boolean(num1)
num2 = Boolean(num2)

console.log(num1, typeof num1) // false 'boolean'
console.log(num2, typeof num2) // true 'boolean'
```

## NaN (Not a Number)
- NaN is a special type of number which is not actually a number
- here are the five cases when you encounter NaN
```js
let num = '100e'
console.log(num, typeof num)

num = Number(num)

// type casting non-numeric String to Number
console.log(num, typeof num) // NaN 'number'

// performing sqrt on -ve Numbers
console.log(Math.sqrt(-1)) // NaN

// arithmetic operations on Strings (excluding `+`)
console.log('hello' - 1) // NaN

// Others
console.log(1 + NaN) // NaN
console.log(undefined + undefined) // NaN
```

## Operators
```js
// 1. Arithmetic
//  + - * / %

//2. Exponents
//  2 ** 3

//3. Assignment
// = += -= *= /= %=

//4. Comparison
//  == is not type specific
// === is type specific
// != is not type specific
// !== is type specific
x = 2 == 2
console.log(x) // true

y = 2 == '2'
console.log(y) // true

z = 2 === '2'
console.log(z) // false
```