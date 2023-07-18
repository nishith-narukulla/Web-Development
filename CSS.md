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

### 