# JavaScript Readings

### variables
```js
const val = 2;
```

### Functions
```JS
function sampleFunction(){
    // write your code here
}
```

### some useful properties
```js
// getting class of an element
console.log(this.class);
// getting id
console.log(this.id);
// using variables to set a class
const currentItem = document.querySelector(`#${this.class}-content`);
currnetItem.classList.add('sampleClass');   
```

### getting all elements with given class
```js
const tabs = document.querySelectorAll('.current-tab');
```

### adding/removing classes when the item is clicked with eventListener
```js
// first iterate over all elements to know which tab is clicked
// and add what to do when item is clicked
// here changeColor is a function
tabs.forEach(item => item.eventListener('click', changeColor))
```

### toggling b/w classes
```js
// toggling class of a single element when it is clicked
const item = document.querySelector('.sample-class');

function toggleClass(e){
    // toggling the same element class when clicked
    this.classList.toggle('sample-class2');

    // toggling the different element classes when clicked
    const item2 = document.querySelector('.sample-class');
    item2.classList.toggle('sample-class2');
}
item.addEventListener('click', toggleClass);

// shortHand form for above example
doucument.querySelector('.sample-class').addEventListener('click', () => document.querySelector('.sample-class').classList.toggle('sample-class2'));
```

### accessing css varaibles

#### getting the values
```js
// query the class
// get styles of the class
// get the specific property
const container = document.querySelector('.container');

const containerStyles = getComputedStyles(container);
// this gives all the properties of container class
console.log(containerStyels);

const containerTextColor = containerStyles.getPropertyValue('--container-text-color');
// this gives a specific property value
console.log('containerTextColor');
```

#### updating the variables
```js
// get the element we want to update
// set property to new from old

const containerHeader = document.querySelector('#main-header');
containerHeader.style.setProperty('--header-background-color', 'blue');
```