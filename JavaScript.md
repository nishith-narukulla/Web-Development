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

// arithmetic operations on non-numeric Strings (excluding `+`)
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

## Type Coercion(implicit type conversion)
```js
let x

x = 5 + '5' // 55 String
x = 5 * '5' // 25 Number
x = 5 + null // 5 'number'
x = 5 + true // 6 'number'
x = 5 + false // 5 'number'
```

## Working with Strings
### Concatenation
```js
let name = 'Nishith'
let age = 21

const str = 'hello, my name is ' + name + ' and i am ' + age + ' years old.'

// Using Template Literals
const str2 = `Hi my name is ${name} and I am ${age} years old`
console.log(str2)
```

### Properties and Methods
```js
let str = 'John Doe'
// index:  01234567
// index:  87654321 --> negative

// creating String Object
const s = new String('String Object')
console.log(s) // String {'String Object'}
console.log(s.valueOf()) // getting true primitive value String Object

// length function
console.log(str.length) // 8

// Indexing
console.log(str[0]) // J
console.log(str.charAt(0)) // J

// listing all the methods using prototype
console.log(str.__proto__)

// Case of String
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// getting first occurence of char
console.log(str.indexOf('D')) // 5

// getting lastOccurence of char
console.log(str.lastIndexOf('o')) // 6

// getting subStrings
console.log(str.substring(3)) // 3 to end => n Doe
console.log(str.substring()) // start to end => John Doe
console.log(str.substring(1, 6)) // 1 to 6(excluding) => ohn D

// String slicing
console.log(str.slice(4)) // 4 to end => _Doe
console.log(str.slice()) // start to end => John Doe
console.log(str.slice(1, 7)) // 1 to 7(excluding) => ohn Do
console.log(str.slice(-1)) // first char from last => e
console.log(str.slice(-8, -4)) // -8 to -4 => John

// trimming
str.trim()
str.trimEnd()
str.trimStart()

// replacing characters/words
console.log(str.replace('Doe', 'Smith'))

// checking for availability of characters
console.log(str.includes('D')) // true
console.log(str.includes('Smith')) // false

// Splitting String
// @returns Array
let arr = str.split(' ') // splits at space
console.log(arr) // ['John', 'Doe']

arr = str.split('') // splits at every character
console.log(arr) // ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']
```

## Working with Numbers
```js
// Creating Number Object
let num = Number(5)
console.log(num)

// Rounding up decimals
// @returns String
let num2 = num.toFixed(2) // defines number of decimal digits
console.log(num2, typeof num2) // 5.00 string

let num3 = num.toPrecision(2) // defines total number of digits
console.log(num3, typeof num3) // 5.0 string
```

### Math Object Properties
```js
console.log(Math)

// Some Constatnts
// PI, E, LN10, LN2, SQRT2
console.log(Math.PI) // 3.141592653589793

// Methods
console.log(Math.abs(-10)) // 10
console.log(Math.cbrt(27)) // 3
console.log(Math.sqrt(16)) // 4
console.log(Math.ceil(2.45)) // 3
console.log(Math.floor(2.45)) // 2
console.log(Math.exp(1)) // e**1 => 2.71
console.log(Math.max(1, 2, 3, 4, 5)) // 5
console.log(Math.min(10, 20, 34, 24, 65, 78)) // 10
console.log(Math.pow(2, 3)) // 2 **3 => 8
console.log(Math.random()) // random b/w 0 to 1
console.log(Math.round(3.5)) // 4
// sin, cos, tan, sinh, log2, log10 etc..,
```

## Date & Time
```js
let d

d = new Date() // Tue Sep 05 2023 17:01:24 GMT+0530 (India Standard Time)

// d = typeof d => object

d = d.toString()

// Set a custom date
d = new Date(2023, 8, 5) // month index start from 0

d = new Date('2023-09-05T12:30:00') // Tue Sep 05 2023 12:30:00 GMT+0530 (India Standard Time)

d = new Date('2023/09/05 12:30:00') // Tue Sep 05 2023 12:30:00 GMT+0530 (India Standard Time)

d = new Date('2023-09-05') // Tue Sep 05 2023 05:30:00 GMT+0530 (India Standard Time)

// Getting individual values
d = new Date()
let x
x = d.getFullYear() // 2023
x = d.getDate() // 5
x = d.getMonth() // index of the month
x = d.getTime()
x = d.getDay() // order of the day {mon:1 ...}
// getHours, getMinutes, getSeconds, getMilliSeconds

x = d.toLocaleString('default', { month: 'long' }) // September
x = d.toLocaleString('default', { month: 'short' }) // Sept

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hourCycle: 'h24',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}) // Tuesday, 5 September, 2023 at 17:42:22
console.log(x)
```