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