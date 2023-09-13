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

// 5. Logical
// && => returns first falsy value or last value
// || => returns first truthy value or last value
// ?? => returns the right side operand if left is null/undefined

// 6. Logical Assignment
// ||= assigns right side value if left is falsy => a ||= 10
// &&= assigns right side value if left is truthy
// ??= assigns right side value if left is  only null/undefined

// 7. Ternary Operator
// (condition) ? statement1 : statement2
// age >= 18 ? clg('Major') : clg('Minor')
// a = age>=18 ? 'Major' : 'Minor'
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

## Arrays & Objects

### Arrays
- An array in Js can store mixed datatypes
**Declaration**
```js
// Array Literal
const numbers = [1, 2, 3, 4, 5]

// can be also mixed datatypes
const mixed = [10, 'Ten', true, null]

// Array constructor
const numbers2 = new Array('5', '4', '3', '2', '1')
```
**Accessing Elements:** Asusual with indices
```js
// using index
x = numbers[1] // 2

mixed[1] = 20 // [10, 20, true, null]

// Adding element at end
mixed[4] = 'New'
mixed[mixed.length] = 100 // [10, 'Ten', true, null, 'New', 100]
```
**Basic Array Methods**
```js
// length property
x = mixed.length // 4

// pushing element at end
mixed.push('New')

// Adding at begining
mixed.unshift('New Begining')

// popping last element
x = mixed.pop()

// popping first element
x = mixed.shift()

// Reversing array
x = mixed.reverse() // [null, true, 'Ten', 10]

// checking availability of an element
x = mixed.includes(true) // true

// finding index of an element
//  returns -1 if not found
x = mixed.indexOf('Ten') // 2
mixed.push('Ten')
x = mixed.indexOf('Ten') // First Occurence => 2
x = mixed.lastIndexOf('Ten') // last Occurence => 4

// Array slicing
// doesn't effect original array
x = mixed.slice() // [null, true, 'Ten', 10, 'Ten']
x = mixed.slice(2) // ['Ten', 10, 'Ten']
x = mixed.slice(2, 4) // ['Ten', 10]

// Array splicing
// effects original array
x = mixed.splice(1, 4) // [true, 'Ten', 10, 'Ten']
// @mixed => [null]

// removing a element at pos using splice
mixed.splice(2, 1) // [null, true, 10, 'Ten']

// Array concatenation
const num1 = [1, 2, 3]
const num2 = [4, 5]
x = num1.concat(num2) // [1, 2, 3, 4, 5]

// Spread Operator
x = [...num1, ...num2] // [1, 2, 3, 4, 5]
x = [...num1, num2] // [1, 2, 3, [4, 5]]

// Flatten Array
x = [1, 2, 3, [4, 5], 6, 7, [8, 9, 10]]
x = x.flat() // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
**Static Methods on Array Object**
```js
// checking for an array
x = Array.isArray(mixed) // true

// String to Array
x = Array.from('Nishith') // ['N', 'i', 's', 'h', 'i', 't', 'h']

// Forming array from variables
const a = 1
const b = 2
const c = 3
x = Array.of(a, b, c) // [1, 2, 3]
```
**Destructuring**
```js
const numbers = [1, 2, 3, 4, 5]

let [first, second] = numbers
console.log(first, second) // 1 2

let [first, second, ...rest] = numbers
console.log(first, second, rest) // 1 2 [3, 4, 5]
```

### Object Literals
-A common data structure that holds key, value pairs
**Declaration**
```js
// 1
person = {
    name: 'Nishith',
    age: 21,
    isAdmin: true,
    hobbies: ['music', 'gaming'],
    adress: {
        city: 'Hyd',
        State: 'TS',
        Country: 'IN'
    }
}
 // 2
student = {
    'first name': 'Nishith',
    'last': 'Narukulla'
}
// 3
const person2 = new Object()

// 4
const fname = 'Nishith'
const lname = 'Narukulla'
const age = 21
// if key & pair naming is same then
// we can declare like this
person = {
    fname,
    lname,
    age
}
// {fname: 'Nishith', lname: 'Narukulla', age: 21}
```
**Accessing Elements**
```js
// getting vlaues
x = person.name // Nishith
x = person['name'] // Nishith
x = person.adress.city // Hyd
x = person.hobbies[1] // gaming

// updation
person.isAdmin = false

// Deletion
delete person.isAdmin

// Adding new pair
person.isAdmin = true

// we can add functions as well
person.intro = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
}

person.intro() // Hello, my name is Nishith and I'm 21 years old
```
**Object Methods**
```js
obj1 = { a: 1, b: 2 }
obj2 = { c: 3, d: 4 }
let x

x = { obj1, obj2 } // { {a: 1, b: 2}, {c: 3, d: 4}}

// Spread operator
x = { ...obj1, ...obj2 } // {a: 1, b: 2, c: 3, d: 4}
x = Object.assign(obj1, obj2) // {a: 1, b: 2, c: 3, d: 4}

// getting all keys
// @returns array
x = Object.keys(person) // ['name', 'age', 'isAdmin', 'hobbies', 'adress']

// getting values
x = Object.values(person)

// length of the object
//  == length of keys array
x = Object.keys(person).length // 5

// getting all Pairs as individual list
x = Object.entries(person)

// checking existence of property
x = person.hasOwnProperty('name') // true
x = person.hasOwnProperty('id') // false
```
**Destructuring**
```js
let x = person.age // 21
let { name, age, isAdmin } = person // Nishith 21 true
let { adress: { city, Country } } = person // Hyd IN
console.log(city, Country)
```

## JSON(JavaScript Object Notation)
- it is a light-weight data interchange format
- it stores data in a human redable form like API data
**Format**
```json
[
    {
        "key1": 'value1',
        "key2": 'value2'
    }
]
```

**Conversion from Js Object to JSON String**
```js
// Single Object
const user = {
    id: 1,
    login: 'abc',
    type: 'user',
    isAdmin: false
}

// Convert to JSON fromat
let str = JSON.stringify(user)
// {"id":1,"login":"abc","type":"user","isAdmin":false}

// convert back to JS Object
const newObj = JSON.parse(str)
// {id: 1, login: 'abc', type: 'user', isAdmin: false}

// Multiple Objects
const users = [
    {
        id: 1,
        login: 'abc',
        type: 'user',
        isAdmin: false
    },
    {
        id: 2,
        login: 'abc',
        type: 'user',
        isAdmin: false
    },
    {
        id: 3,
        login: 'abc',
        type: 'user',
        isAdmin: false
    },
]

// Convert to JSON fromat
let str = JSON.stringify(users)
// [{"id":1,"login":"abc","type":"user","isAdmin":false},{"id":2,"login":"abc","type":"user","isAdmin":false},{"id":3,"login":"abc","type":"user","isAdmin":false}]

// convert back to JS Object
const newObj = JSON.parse(str)
// 0 : { id: 1, login: 'abc', type: 'user', isAdmin: false }
// 1 : { id: 2, login: 'abc', type: 'user', isAdmin: false }
// 2 : { id: 3, login: 'abc', type: 'user', isAdmin: false }
```

## Functions
**Declaration & Invoking**
```js
function greet() {
    console.log("Hello")
}

greet()
```
**Passing Arguments**
```js
function add(num1, num2) {
    console.log(num1 + num2)
}

add(2, 3)
```
**Default Parameters**
```js
function register(user = 'Bot') {
    console.log(`${user} is registered`)
}

register('Nishith') // Nishith is registered
register() // Bot is registered
```
**Returning something**
```js
function add(num1, num2) {
    return num1 + num2
}

console.log(add(2, 3))
```
**Function Declaration vs Expression**
```js
// Declaration
function add(num1, num2) {
    console.log(num1 + num2)
}
add(2, 3) // 5

// Expression
const multiply = function (num1, num2) {
    console.log(num1 * num2)
}
multiply(2, 3) // 6
```
- we can call function declarations before declaration but not function expressions

### Arrow Functions
**Declaration & Usage**
```js
// Incase having multiple params & executions
const add = (num1, num2) => {
    const res = num1 + num2
    console.log(res)
}
add(2, 3) // 5

// Incase having single execution statement
const add1 = (num1, num2) => console.log(num1 + num2)
add1(2, 3) // 5

// Incase having single param
const double = num => console.log(num * 2)
double(2) // 4
```

### Immediately Invoked Function Expressions
- These functions run as soon as the page reloads
```js
// Declaration
(function () {
    console.log('Hello')
})(); // Hello

// Passing Arguments
(function (name) {
    console.log(`Hello ${name}`)
})('Nishith'); // Hello Nishith
```

## Scope of Variables
- block scope, function scope,global scope
- any variable declared as let/const are restricted to use beyond their scope
- but variables declared with var and in block level/global are free to use anywhere in the program

## Execution Context
- when you run any js code, a special environment is created to handle transformation & execution of code
- it contains currently running code and everything aids in it
- global execution context, function execution context

- js is a single threaded language & synchronous

### Execution Context Phases
**Memory creation phase**
- creates the global Object(window)
- create the 'this' object and bind it to global object
- set up memory heap for storing variables & function references
- store functions & variables in global execution context and set to "undefined" 
**Execution phase**
- execute code line by line
- create a new execution context for each function call

### Call Stack
- stack of functions to be executed
- it manages execution contexts

## Logic & Control Flow
### If statement
```js
if (true) {
    console.log('This will execute')
}

if (false) {
    console.log('This will not Execute')
}
```
### if else
```js
const x = 10
const y = '10'

if (x == y) { console.log('True') } // True
else { console.log('False') }

if (x === y)  console.log('True') 
else  console.log('False')  // False
```
### else if
```js
const d = new Date()
const hour = d.getHours()

if (hour < 12) {
    console.log('Good Morning')
}
else if (hour < 18) {
    console.log('Good Afternoon')
}
else {
    console.log('Good Night')
}
```

### Switch
```js
const ch = 1

switch (ch) {
    case 1:
        console.log('One')
        break
    case 2:
        console.log('Two')
        break
    default:
        console.log('Default')
}
```

## Truthy & Falsy values
```js
/*  Falsy Values
-> false
-> 0
-> '' || ""
-> null
-> undefined
-> NaN
*/

// Truthy values other than falsy
```

## Loops
### for loop
```js
for(let i = 0; i<10; i++){
    statements;
}
```

### While & do-while
```js
let i = 0
// While
while (i <= 10) {
    console.log(i)
    i++
}

let j = 11
// Do while
do {
    console.log(j)
    j++
} while (j <= 10)
```

### Looping through array
```js
const numbers = [1, 2, 3, 4, 5]

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// while
let j = 0
while (j < numbers.length) {
    console.log(numbers[j])
    j++
}

// for each
numbers.forEach(item => console.log(item))

// for of
for (const item of numbers) {
    console.log(item)
}

// for in
for (const index in numbers) {
    console.log(numbers[index])
}
```

### Looping through Strings
```js
const str = 'Nishith'

// for loop
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

// while
let j = 0
while (j < str.length) {
    console.log(str[j])
    j++
}

// for of
for (const item of str) {
    console.log(item)
}

// for in
for (const index in str) {
    console.log(str[index])
}
```

### Looping through Objects
```js
const person = {
    id: 1,
    name: 'Nishith',
    age: 21
}

// for loop
for (let i = 0; i < Object.keys(person).length; i++) {
    console.log(person[Object.keys(person)[i]])
}

// for in
for (const key in person) {
    console.log(person[key])
}
```

## Higher Order Array methods
### for each
### filter()
- it filters the array based on the condition and return an array
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNums = numbers.filter(num => num % 2 == 0)
console.log(evenNums) // [2, 4, 6, 8, 10]
```
### map()
- it populate a new array with result based on the condition
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNums = numbers.map(num => num % 2 == 0)
console.log(evenNums) // [false, true, false, true, false, true, false, true, false, true]

const map1 = numbers.map(num => num * 2)
console.log(map1) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const eightMultiples = numbers.map(num => num * 2).filter(num => num % 8 == 0)
console.log(eightMultiples) // [8, 16]
```

### sort()
```js
const arr = [3, 5, 21, 2, 1, 3, 57, 8, 6, 5, 4, 3]

const ar = arr.sort((a, b) => {
    return a > b ? 1 : -1
})
console.log(ar) // [1, 2, 3, 3, 3, 4, 5, 5, 6, 8, 21, 57]
```
### reduce()
- this will reduce the entire array to a single value based on condition
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// this returns sum of all the elements
// with initial sum given
const sum1 = numbers.reduce((num1, num2) => num1 + num2, 0)
console.log(sum1) // 55
const sum2 = numbers.reduce((num1, num2) => num1 + num2, 10)
console.log(sum2) // 65
const sum3 = numbers.reduce((num1, num2) => num1 + num2, -5)
console.log(sum3) // 50

// using for each
let sum = 0
numbers.forEach(item => {
    sum += item
})
console.log(sum)
```

## OOPs
**Old Version**
### Constructor functions
```js
// constructor functions
function person() {
    this.name = 'Nishith'
    this.age = 21
    this.admin = true
}

// instantiating object
const person1 = new person()
console.log(person1.name, person1.age) // Nishith 21
```

### passing arguments
```js
function person(name, age, isAdmin) {
    this.name = name
    this.age = age
    this.admin = isAdmin
}

// creating object and passing arguments
const person1 = new person('Nishith', 21, true)
console.log(person1.name, person1.age) // Nishith 21
```

**New version**
### Creating classes
```js
// creating class
class person {
    // constructor
    constructor(fname, lname, age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }

    // methods
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

// creating object
const person1 = new person('Nishith', 'Narukulla', 21)
console.log(person1.getFullName(), person1.age) // Nishith Narukulla 21
```