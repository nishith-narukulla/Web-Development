# CSS Readings

### Methods for adding CSS
- Inline CSS: directly in the html element
- Internal CSS: using style tags in head
- External CSS: linking an external .css file

### CSS Selectors
```css
h1{
    background-color:black;
    color:white;
}

/*
h1: selector,
background-color: property,
white: value
*/
```

### colors in css
- Color names
- HTML5 color names
- Hexadecimal
- RGB

### Id and Class
- there is no difference
- below are just assumptions for best practises
- Id
    - unique means cant be used for two elements
    - '#' symbol
- class
    - can be used anywhere
    - '.' symbol

### CSS Box Model
![Box Model](https://iq.opengenus.org/content/images/2020/03/css_box_model-1.png)

### positioning in CSS
- Static
    - default
- Relative
    - element position is relative to its parent
- Absolute
    - placing at a particular position
- Fixed
    - can place at a particular position and
    - it doesnt move
- Initial
    - sets the initial value
- Inherit
    - will inherit its parent property

### FlexBox in CSS
- a layout mode that provides clean and easy way to arrange items in a container
- built for small scale layouts

- Features
    - No Floats
    - Responsive and Mobile friendly
    - Positioning child elements is easier
    - fles container's margins do not collide with the margins of content
    - order of elements can be changed easily without changing HTML source
![FlexBox Layout](https://th.bing.com/th/id/R.8cf0398db589f682b3de61d018a461c9?rik=QmsmrxL5r92JIg&riu=http%3a%2f%2fsaki007ster.github.io%2fpublic%2fimages%2fflex-container.png&ehk=WvYolhg8Sn7BINC83PeroJWCr3b0LZa1MdpKEQcg0UI%3d&risl=&pid=ImgRaw&r=0)

#### Flex Properties
```css
display: flex | inline-flex;
/* puts elements in a container side by side */
flex-direction: row | column;
flex-wrap: wrap | nowrap| wrapreverse;
flex-basis: <length>;
justify-content: flex-start | flex-end | centre | space-between | space-around | space-evenly;
align-self: flex-start | flex-end | centre;
align-items: flex-start | flex-end | centre | stretch | first baseline;
/* adjusts height wrt items content */
align-content: flex-start | flex-end | centre;
flex-grow: <number>;
flex-shrink: <number>;
flex: <integer>;
/* increases the occupancy of item
like the number of columnspaces it occupies */
order: <integer>;
```
#### Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CSS FlexBox</title>
</head>
<body>
    <div class="container-1">

        <div id="box-1">
            <h3>Box One</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div id="box-2">
            <h3>Box Two</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div id="box-3">
            <h3>Box Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>
    </div>

    <div class="container-2">

        <div class="container-2-box">
            <h3>Box Four</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div class="container-2-box">
            <h3>Box Five</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div class="container-2-box">
            <h3>Box Six</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>
    </div>

    <div class="container-3">

        <div class="container-3-box">
            <h3>Box Seven</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div class="container-3-box">
            <h3>Box Eight</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div class="container-3-box">
            <h3>Box Nine</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>
        <div class="container-3-box">
            <h3>Box Ten</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div class="container-3-box">
            <h3>Box Eleven</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>

        <div class="container-3-box">
            <h3>Box Twelve</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam error, magnam omnis esse harum aut perspiciatis quam dolore consequatur voluptatum fugiat impedit ad architecto ab mollitia veritatis quibusdam odio?</p>
        </div>
    </div>
</body>
</html>
```
```css
/* Container One Section */
.container-1 div, .container-2 div, .container-3 div{
    border: black 1px solid;
    padding: 10px;
}

#box-1{
    flex: 2;
    order: 3;
}

#box-2{
    flex: 1;
    order: 1;
}

#box-3{
    flex: 1;
    order: 2;
}

/* Container Two Section */

.container-2-box{
    flex-basis: 20%;
}

/* Container-3 */

.container-3{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.container-3-box{
    flex-basis: 12%;
}

@media(min-width: 768px){
    
.container-1{
    display: flex;
    align-items: flex-start;
    flex-direction: row;
}

.container-2{
    display: flex;
    justify-content: space-between;
}

}
```

### Grid Layout in CSS
#### Grid properties
```css
display: grid;
grid-template-columns: 70% 30%;
/*
sets a two column grid with 70% for first element
and 30% for second element
 */
grid-template-columns: 40% 30% 30%;
/* 
sets an three column grid with given width
we can use repeat(times, value) for easy use
*/
grid-template-columns: repeat(3, 33%);
/* 
instead of using percentages
we can use fractions to define size of each element
*/
grid-template-columns: 1fr 2fr 1fr;
/* 
divides 4 parts to 3 elements
1fr 2fr 4fr 2fr
divides 9 parts to 4 elements
*/
grid-column-gap: 1em;
grid-row-gap: 1em;
/* 
sets a gap between columns and rows
we can use short form as below
*/
grid-gap: 1em;
/*  we can set height */
grid-auto-rows: 100px;
/* this will overflow the content if exceeds */
grid-auto-rows: auto;
/* this will adjust to the max size of element in a row
   all the elements in a row are at same height */

/* we can use nested grids by defining 
another child grids inside parent grids */

/* we can change alignment using */
align-items: start | end | centre | stretch(default); /* sets row wise */
align-self: " " ; /* this will sets for the current parent grid itself*/
justify-items: " "; /* sets column wise */

/* 
changing the position of a particular element
Note: These rows and columns are not actual
they are like span of the row/column

1
|1________2|________3|  <-- columns
2
|________|_________|
3
|________|_________|
4

^
|
rows

*/
grid-column: <number>;
/* changes the position to the given column */

grid-row: <number>;
/* changes the position to the given row */

grid-column: <column1>/<column2>;
grid-row: <row1>/<row2>;
/* position the element from column1 to column2 and row1 to row2 */
``` 
#### code
```html
<body>
<div class="grid">
        <div class="main">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dicta autem, accusamus vero necessitatibus sapiente eveniet nulla sequi quod molestias provident aperiam voluptatem deleniti culpa, nemo odio reprehenderit et sed!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium nulla quam praesentium officiis nostrum! Inventore velit at nemo aspernatur deserunt, a, beatae eligendi voluptates molestiae voluptas ex excepturi tempore!
        </div>
        <!-- This is nested grid -->
        <div class="nested-grid1">
                <div><p>Nested Item One</p></div>
                <div><p>Nested Item Two</p></div>
                <div><p>Nested Item Three</p></div>
                <div><p>Nested Item Four</p></div>
                <div><p>Nested Item Five</p></div>
                <div><p>Nested Item Six</p></div>
                <div><p>Nested Item Seven</p></div>
                <div><p>Nested Item Nine</p></div>
        </div>

        <div class="nested-grid2">
                <div class="box box1">Nested Box 1</div>
                <div class="box box1">Nested Box 2</div>
                <div class="box box1">Nested Box 3</div>
                <div class="box box1">Nested Box 4</div>
                <div class="box box1">Nested Box 5</div>
                <div class="box box1">Nested Box 6</div>
                <div class="box box1">Nested Box 7</div>
                <div class="box box1">Nested Box 8</div>
        </div>

        <!-- side bar One here -->
        <div class="sidebar bottom-box-1">
            <Strong>Bottom Box1:</Strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique optio vitae quas minima pariatur sit architecto ipsa ipsum dolorem.
        </div>

        <div class="main bottom-box-2">
                <Strong>Bottom Box2:</Strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dicta autem, accusamus vero necessitatibus sapiente eveniet nulla sequi quod molestias provident aperiam voluptatem deleniti culpa, nemo odio reprehenderit et sed!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium nulla quam praesentium officiis nostrum! Inventore velit at nemo aspernatur deserunt, a, beatae eligendi voluptates molestiae voluptas ex excepturi tempore!
        </div>

        <div class="sidebar bottom-box-3">
                <Strong>Bottom Box3: </Strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique optio vitae quas minima pariatur sit architecto ipsa ipsum dolorem.
        </div>
</div>
</body>
```
```css
.grid .main{
    background-color: burlywood;
    padding: 1em;
}

.grid .sidebar{
    background-color:coral;
    padding: 1em;
}

.grid{
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-gap: 1em;
    grid-auto-rows: auto;
}

/* nested grid one section */
.nested-grid1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    grid-auto-rows: auto;
    background-color:coral;
    padding: 1em;
}

.grid .nested-grid1 p{
    background-color:navajowhite;
    padding: 1em;
}

/* nested grid two section */
.nested-grid2{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1em;
    grid-auto-rows: auto;
    background-color:coral;
    padding: 1em;
    align-items: stretch;
}

.grid .nested-grid2 > div{
    background-color:navajowhite;
    padding: 1em;
}

/* bottom-box one section */
.bottom-box-1{
    align-self: center;
    grid-column: 1;
}

/* bottom-box two section */
.bottom-box-2{
    align-self: flex-start;
    grid-column: 3;
}

/* bottom-box three section */
.bottom-box-3{
    align-self: flex-end;
    grid-column: 2;
    grid-row: 2/3;
}
```

### Felx vs Grid
- Flexbox
    - One dimensional

- Grid
    - Two dimensional

![Flex vs Grid](https://www.bing.com/images/search?view=detailV2&ccid=SELCES4J&id=E92592BA30D435C6F35AFDDB1367D2D3268AF233&thid=OIP.SELCES4JfJhFTiTB3gR62QHaEs&mediaurl=https%3a%2f%2fcomingsoonwp.com%2fapp%2fwp-content%2fuploads%2f2018%2f10%2fflexbox-vs-grid.png&exph=558&expw=880&q=flexbox+vs+grid&simid=608053514333727520&FORM=IRPRST&ck=30D7477EF5F839D428A3F02221FAAD60&selectedIndex=0)

### css Variables

#### defining vars for the root elements
- root variables
- these can be used anywhere
- syntax:
```css
:root{
    --main-bg-color: black;
    --primary-text-color: white;
}
```

- usage:
```css
body{
    background: var(--main-bg-color);
    color: var(--primary-text-color);
}
```

#### defining variables for a particular class
- class variables
- these can be used only within and its subclasses.
- syntax:
```css
.container{
    --container-bg-color: #333;
    --container-text-color: #fff;
    --container-border-color: #000;
    --container-h1-color: blue;
}
```

- usage:
```css
.container{
    background: var(--container-bg-color);
    color: var(--container-text-color);
    border: 1ps solid var(--container-border-color);
}

/* this will apply only for
h1 in the container class
other h1s will not be effected
 */
h1{
    color: var(--container-h1-color);
}
```

#### variable overriding
- we can override variables for particular elements
```css
.container{
    --container-bg-color: #333;
    --container-text-color: black;
    --container-border-color: #000;
}

/* text color is black for every element */
.container{
    background: var(--container-bg-color);
    color: var(--container-text-color);
    border: 1ps solid var(--container-border-color);
}

/* text color for para elements
is now blue
and this will only apply for paras */
.container p {
    --container-text-color: blue;
    color: var(--container-text-color);
}
``` 

#### fallbacking variables
- if variable dosn't exist we can set a default value
```css
.containre{
    color: var(main-txt-color, black);
}
```

### CSS Properties
```css
/* hides scrollbar */
.container::-webkit-scrollbar{
    display: none;
}


```