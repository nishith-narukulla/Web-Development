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