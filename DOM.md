# DOM (Document Object Model)

- programming interface for Web/HTML elements
- Structure that we can interact with JavaScript
- includes tags, attributes, text nodes etc
- represented as a tree structure

## DOM Visualization
![](https://github.com/nishith-narukulla/Web-Development/blob/mainline/images/DOM_structure.png)

## Useful methods
### Accessing Content
```js
// this will log all the content inside body tag
// including tags & attributes
output = document.body.innerHTML

// this will return a list of all link objects
output = document.links
output = document.links[1] // 2nd link

// This will override the existing content
document.body.innerHTML = '<h1>Content changed</h1>\n<h1>Now what to do</h1>'

// this text node will be added to the end of file
document.write('Hello from write method')

// this will log all the direct children inside class
output = document.querySelector('.sample-class')
output = output.children // [p, h1#h1, h2.h2, h3, h1: h1#h1]

// getting id/class name of a  element
console.log(output[1].id) // h1
console.log(output[2].className) // h2

// can change id/class names
output[1].id = 'new-id'
console.log(output[1].id) // new-id
output[2].className = 'new-class'
console.log(output[2].className) // new-class

// URL
output = document.URL
```

### Targetting id/class
```js
// this will target the id with #links
// @return object with all properties
output = document.getElementById('links')
// @return only element and its content
output = document.querySelector('#links')

// this will target class with .sample-clss
// @return first element with this class
output = document.querySelector('.sample-class')
// @return list of elements
output = document.querySelectorAll('.sample-class')
```

### Targetting specific element inside a id/class
```js
/* 
<div class="sample-class">
    <p>Hello from paragraph</p>
    <h1 id="h1">Hello from h1</h1>
    <h2 class="h2">Hello from h2</h2>
    <h3>Hello from h3</h3>
</div>
*/
output = document.querySelector('.sample-class p') // <p>Hello from paragraph</p>
output = document.querySelector('.sample-class h3') // <h3>Hello from h3</h3>
```

## Traversing DOM Elements
![DOM Traversal](https://github.com/nishith-narukulla/Web-Development/blob/mainline/images/DOM_traversal.png)

```html
<div class="parent">
    <div class="child">Child 1</div>
    <div class="child">Child 2</div>
    <div class="child">Child 3</div>
</div>
```
```js
let output

// GET CHILDRENS OF AN PARENT ELEMENT
let parent = document.querySelector('.parent')

// @return HTMLCollection
let children = parent.children // [div.child, div.child, div.child]

// HTMLCollection to Array
let childrenArray = Array.from(children) // [div.child, div.child, div.child]

// loop through childrens
childrenArray.forEach((child, index) => {
    console.log(child.innerHTML) // Child 1, Child 2, Child 3
    console.log(child.className) // child

    if (index == 1) {
        child.style.color = 'blue' // sets 2nd child color to blue
    }
})

// change content of childrens
children[0].innerText = 'Children One'
children[1].innerText = 'Children Two'
children[2].innerText = 'Children Three'

// we can target first & last children
let firstChild = parent.firstElementChild // Children One
let lastChild = parent.lastElementChild // Children Three

// GET PARENT FROM CHILD ELEMENTS
let child = document.querySelector('.child') // Child One
let parent1 = child.parentElement

// styling parent
parent1.style.border = '1px solid #333'
parent1.style.padding = '10px'
parent1.style.borderRadius = '10px'

// GET SIBLINGS OF AN ELEMENT
let secondChild = document.querySelector('.child:nth-child(2)') // Child Two

let prevSibling = secondChild.previousElementSibling // Child One
let nextSibling = secondChild.nextElementSibling // Child Three

let prevSiblingPrev = prevSibling.previousElementSibling // null
let nextSiblingNext = nextSibling.nextElementSibling // null

output = nextSibling
console.log(output)
```

## Traversing DOM All Nodes

### DOM Node Types
- Element
- Attr
- Text
- Comment
- document
- DocumentType etc..,

### DOM Node relations
![DOM Node Relation](https://github.com/nishith-narukulla/Web-Development/blob/mainline/images/DOM_Node_traversal.png)

```html
<div class="parent">
    <!-- This is Comment -->
    <div class="child">Child 1</div>
    <div class="child">Child 2</div>
    <div class="child">Child 3</div>
</div>
```
```js
// GET CHILD NODES OF AN PARENT NODE
let parentNode = document.querySelector('.parent')

// list with all nodes
// whitespaces & comments are also nodes
let childNodes = parentNode.childNodes // [text, comment, text, div.child, text, div.child, text, div.child, text]

let comment = childNodes[1].textContent // This is Comment
```

## Create, Append, Replace, Remove DOM Elements

### Appending New element to end of an element
```js
// CREATE NEW ELEMENT
const div = document.createElement('div')
div.className = 'new-parent'
output = document.body.children // [div.parent, script]

// append it to the body node
document.body.appendChild(div)
output = document.body.children // [div.parent, script, div.new-parent]

div.setAttribute('id', 'new-parent')

// lets create an text Node and append to it
const textNode = document.createTextNode('New Text')
div.appendChild(textNode)
output = div // <div class="new-parent" id="new-parent">New Text</div>
```

### Appending after/before an element
```js
const parent = document.querySelector('.parent')

const div = document.createElement('div')
const text = document.createTextNode('New Child')

div.appendChild(text)

// @positions: beforebegin, beforeend, afterbegin, afterend
/*
** beforebegin
<div class="parent">
** afterbegin
    <div class="child">Child 1</div>
**beforeend
</div>
** afterend
*/

// insertAdjacentElement --> Elements
parent.insertAdjacentElement('afterend', div)

// insertAdjacentText --> TextNodes
parent.insertAdjacentText('beforebegin', 'New child')

// insertAdjacentHTML --> HTML markup
parent.insertAdjacentHTML('afterend', '<h2>New child</h2>')

// insertBefore
// applies on parent elmnt and place it before reference elmnt
const refElement = document.querySelector('.child:nth-child(2)')

parent.insertBefore(div, refElement)

console.log(document.body.innerHTML)
```

### Replace Elements
```js
const parent = document.querySelector('.parent')
const firstChild = document.querySelector('.child:first-child')
const secondChild = document.querySelector('.child:nth-child(2)')
const thirdChild = document.querySelector('.child:last-child')

const newChild = document.createElement('div')
newChild.className = 'new-child'
const text = document.createTextNode('New Child')
newChild.appendChild(text)

// USING replaceWith()
// element with element
firstChild.replaceWith(newChild)

// All children of a parent with element
parent.replaceChildren(newChild)

// specific children of parent with elmnt
parent.replaceChild(newChild, thirdChild)

// USING outerHTML()
// replace entire element including tags & id/classes
firstChild.outerHTML = newChild.outerHTML
thirdChild.outerHTML = '<h3>New Child</h3>'

// USING innerHTML()
// replace only inner content excluding tag & id/class
secondChild.innerHTML = 'New Child'
thirdChild.innerHTML = newChild.innerHTML

console.log(document.body.innerHTML)
```

### Removing Elements
```js
// remove specific elmnt
firstChild.remove()

// remove specific child of parent elmnt
parent.removeChild(secondChild)
```

## Adding/removing classes
```js
/*

// className
element.className => returns string with all classes
element.className = 'new' => override existing with new

// classList
element.classList => returns list of classes
element.classList.add('new') => adds new to the existing
element.classList.remove('new') => removes class
elelement.classList.toogle('new') => toggles the class
element.classList.replace('old', 'new') => replaces old with new

*/
```

## Working with styles
```js
/*

element.style.<propertyName> = 'propertyValue'
element.style.color = 'red'

// use Camelcase for multi-word properties
element.style.borderRadius = '10px'

*/
```

## Events

### Using inline event listeners (not recommended)
```html
<button class="btn" onclick="clicked()">Click Me</button>
```
```js
function clicked() {
    alert('Button clicked')
}
```

### JavaScript Event Listener
```js
const btn = document.querySelector('.btn')

btn.onclick = function () {
    alert('Clicked')
}
```

### addEventListener()
```js
// using anonymous fuction
btn.addEventListener('click', function () {
    alert('clicked')
})

// adding a named function
btn.addEventListener('click', clicked)

function clicked() {
    alert('clicked')
}
```

### Automatically triggering an click event
```js
// triggers after specified time
setTimeout(
    () => {
        btn.click()
    },
    5000
)
```

### Mouse Events
```js
/*

'click' => on mouse click
'dblclick' => double click
'contextmenu' => right click
'mousedown' => mouse left key click & hold
'mouseup' => mouse left key click,hold & release
'wheel' => on mouse scroll
'mouseover' => on mouse hover
'mouseout' => on mouse out
'dragstart' => on start dragging an element
'drag' => keeps firing off until you release
'dragend' => on releasing dragged item

*/
```

### Event Object
```js
/*

'target' => the element that triggered the event
'currentTarget' => the element attached to the event listener
'type' => type of event
'timeStamp' => timing of the trigger
'clientX', 'clientY' => position relative to the window
'offsetX', 'offsetY' => position relative to the element
'pageX', 'pageY' => position relative to the page
'screenX', 'screenY' => position relative to the screen

*/
const btn = document.querySelector('.btn')

function onClick(e) {
    let output

    output = e.target // <button class="btn">Click Me</button>
    output = e.currentTarget // <button class="btn">Click Me</button>
    output = e.type // click
    output = e.timeStamp
    output = e.clientX
    output = e.clientY
    output = e.offsetX

    console.log(output)
}

btn.addEventListener('click', onClick)
```

### Keyboard Events
```js
/*
 * keypress => on pressing
 * keyup => on releasing
 * keydown => on holding down
 */

/*
 * e.key => returns pressed key
 * e.keycode => returns keycode
 * e.code => returns code of the key
 * e.repeat => returns true if you hold any key
 * e.shiftKey, e.ctrlKey, e.altKey => return true if these keys are pressed
 */

const btn = document.querySelector('.btn')

btn.addEventListener('keyup', (e) => {
    console.log(e.key)
})
```

### Input Events
```html
<input type="text" id="input">
    <select name="" id="dropdown">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
<input type="checkbox" name="" id="checkbox">
```
```js
const input = document.querySelector('#input')
const dropDown = document.querySelector('#dropdown')
const checkBox = document.querySelector('#checkbox')

// for input fields, deropdowns
function onInput(e) {
    console.log(e.target.value)
}

// for checkboxes
function onChecked(e) {
    console.log(e.target.checked)
}

function onFocus(e) {
    console.log('Focused')
}

function onBlur(e) {
    console.log('Out of Focus')
}

// when input is entered
input.addEventListener('input', onInput)
dropDown.addEventListener('input', onInput)
checkBox.addEventListener('input', onChecked)

// on focus
input.addEventListener('focus', onFocus)

// on out of focus
input.addEventListener('blur', onBlur)
```

### Event Bubbling
- when an element is clicked the click event bubbles upto its root element even the element only was clicked
- to prevent that bubbling further use
```js
e.stopPropagation()
```

### Page Load Events
```js
/*

// window.onload 
// window.addEventListener('load', ()=> do something) => waits for the entire page loading includes DOM, resources
// window.addEventListener('DOMContentLoaded', ()=> do something) => waits until DOM is parsed

*/
```