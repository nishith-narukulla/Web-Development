# HTML Readings

### HTML Page Structure
```html
<!DOCTYPE html>
<html>
    
    <head>
        <title>Page Title</title>
        <!-- consists meta data, description -->
        <!-- links to styling files like css, js -->
    </head>

    <body>
        <h1>...</h1>
        <p>.... </p>
    </body>

</html>
```
### HTML comments
```html
<!-- single line comment here -->
```
### Heading tags
- there were total 6 heading tags
```html
<h1>Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>
```
### paragraph tag
```html
<p>This is a paragraph</p>
```
### paragraph formatting
- Strong tag
    - bold text
- emphasise tag
    - iitallic text
- anchor tag
    - for hyper linking
- abbreviation tag
    - displays abbreviation
```html
<p>
    Lorem ipsum dolor sit amet <strong>consectetur</strong> adipisicing elit.
    Ipsam sequi, <em>laborum quis distinctio quasi</em> facere officiis!
    Sequi nesciunt, ullam, iure optio cumque quos repudiandae laboriosam, 
    repellat <abbr title="World Wide Web">WWW</abbr> blanditiis voluptates nihil.<a href="http://google.com" target="_blank">Click here</a>
</p>
```
### Inline vs Block level
- **Inline:**
    - do not start on a new line
    - take only necessary width
    - Ex: ```html <span>, <img>, <a> ```
- **Block level:**
    - start on a new line
    - take full width available
    - Ex: ```html html <div>, <h1>...<h6>, <p>, <form> ```
### anchor tag
- for hyper links and quick links
```html
<!-- this will create a hyperlink-->
<a href="">Click here</a>

<!-- give a link to tell where to redirect
as href attribute-->
<a href="www.google.com">Google</a>

<!-- the above link will open in same tab-->
<!-- to open in a new tab pass target attribute-->
<a href="www.google.com" target="_blank">Google</a>
```
### Lists
- un-ordered lists
    - bullets etc
    ```html
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
    </ul>
    ```
- ordered lists
    - numbering etc
    ```html
    <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
    </ol>
    ```
### Table
```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nishith</td>
            <td>21</td>
        </tr>
        <tr>
            <td>Mike</td>
            <td>20</td>
        </tr>
    </tbody>
</table>
```
### Form tag and attributes
- **Attributes:**
    - action: where to submit the filled data in backend
    - method: "POST"(submits to backend), "GET"(displays field values in URL)
#### Label tag
- acts as label for the input field
#### input tag
- used to take the input
- specifies the type of input and more
- **Attributes:**
    - type: text,email,number,date,submit
    - name: to identify field name in backend
    - value: sets a default value
    - placeholder: displays a placeholder text whenever the input field is empty
#### textarea tag
- provides expandable text area to enter multiline text
#### Select tag
- for dropdown list
- sub tag: option
- attribute: value=""
### Button tag
- builds a button
```html
<button onclick="btnFunction">Don't click me</button>
```
### Image tag
```html
<img src="sample.jpg">
<!-- alt attribute shows placeholder for image-->
<img src="sample.jpg" alt="My sample image">
<!-- we can embedd image as hyperlink to open the image when clicked-->
<a href="sample.jpg">
    <img src="sample.jpg" alt="my sample image">
</a>
```
### HTML5 semantic tags
![semantic tags](https://res.cloudinary.com/practicaldev/image/fetch/s--lWxKW9Y3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://firebasestorage.googleapis.com/v0/b/hackinbits.appspot.com/o/semantic_tags.png%3Falt%3Dmedia%26token%3De108af6b-a0b2-4c1d-9538-6146411f9471)
```html
<!-- semantic tags -->
<header></>
<footer></>
<aside></>
<main></>
<article></>
<nav></>
<section></>
<details></>
```
```html
<header id="main-header">
    <h1>My Blog</h1>
</header>
<section>
    <article>
        <h3>Blog Post One</h3>
        <small>by Nishith 13th July 2023</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis numquam quasi ut doloribus natus, cum dolores quo exercitationem quis commodi, officiis delectus mollitia hic maiores! Nostrum in ratione voluptatem.</p>
        <a href="">Read more...</a>
    </article>
    <article>
        <h3>Blog Post Two</h3>
        <small>by Nishith 13th July 2023</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis numquam quasi ut doloribus natus, cum dolores quo exercitationem quis commodi, officiis delectus mollitia hic maiores! Nostrum in ratione voluptatem.</p>
        <a href="">Read more...</a>
    </article>
    <article>
        <h3>Blog Post Three</h3>
        <small>by Nishith 13th July 2023</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis numquam quasi ut doloribus natus, cum dolores quo exercitationem quis commodi, officiis delectus mollitia hic maiores! Nostrum in ratione voluptatem.</p>
        <a href="">Read more...</a>
    </article>
</section>
<aside>
    <ul>
        <li><a href="">Category 1</a></li>
        <li><a href="">Category 2</a></li>
        <li><a href="">Category 3</a></li>
    </ul>
</aside>
<footer id="main-footer">
    <p>Copyright &copy; 2023 Nishith</p>
</footer>
```
### Head tag
- includes title of the page, meta data, style sheets, pther links
- internal CSS
```html
<head>
    <meta name="description" content="sample html5 semantic structure">
    <meta name="keywords" content="html5, html5 semantic structure, web designing">
    <style type="text/css">
        #main-header{
            text-align: center;
            background-color: rgb(12, 12, 12);
            color: aliceblue;
            padding: 10px;
        }
        
        #main-footer{
            text-align: center;
            font-size: 18px;
        }
        </style>
        <title>Page Title here</title>
</head>
```
### Linking External Styling files
```html
<link rel="stylesheet" href="style.css">
```
###