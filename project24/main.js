// Init DOM elements
const form = document.querySelector('#form')

// EVENTS
form.addEventListener('submit', addBookmark)
document.body.addEventListener('DOMContentLoaded', displayBookmarks())


// FUNCTIONS

// to store bookmarks info in localStorage
function addBookmark() {
    var siteName = document.querySelector('#site-name').value
    var siteUrl = document.querySelector('#site-url').value

    // inputs validation
    if (!siteName || !siteUrl) {
        alert('Enter required fields')
        return
    }

    // match url RegEx
    const exp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const regex = new RegExp(exp)

    if (!siteUrl.match(regex)) {
        alert('Invalid Url')
        return
    }

    var bookmarkObj = {
        siteName,
        siteUrl
    }

    // check localStorage
    if (localStorage.getItem('bookmarks') === null) {
        // Init bookmarks array
        var bookmarksList = []

        // push new bookmark Object to array
        bookmarksList.push(bookmarkObj)

        localStorage.setItem('bookmarks', JSON.stringify(bookmarksList))
    } else {
        // fetch list from localStorage
        bookmarksList = JSON.parse(localStorage.getItem('bookmarks'))

        // push new bookmark Object
        bookmarksList.push(bookmarkObj)

        // reset localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarksList))
    }

    displayBookmarks()
}

// to remove bookmark from storage
function removeBookmark(url) {
    // fetch bookmarks list
    bookmarksList = JSON.parse(localStorage.getItem('bookmarks'))

    for (obj of bookmarksList) {
        if (obj.siteUrl === url) {
            bookmarksList.splice(bookmarksList.indexOf(obj), 1)
        }
    }

    // reset bookmarks in localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksList))

    // refresh bookmarks again
    displayBookmarks()
}

// to display saved Bookmarks
function displayBookmarks() {
    // fetch bookmarks list
    bookmarksList = JSON.parse(localStorage.getItem('bookmarks'))

    // check if no saved bookmarks
    if (bookmarksList === null || bookmarksList.length < 1) {
        // Display empty message
        const inner = `<h3 class="message">hurry up and save your favourite sites</h3>`
        document.querySelector('#bookmarks').innerHTML = inner
        document.querySelector('#bookmarks').classList.add('message')
    } else {
        document.querySelector('#bookmarks').innerHTML = ''
        for (obj of bookmarksList) {
            const siteName = obj.siteName
            const siteUrl = obj.siteUrl

            // create a div
            const div = document.createElement('div')
            div.className = 'bookmark-item'

            const inner = `
            <div class="site-logo">${siteName[0].toUpperCase()}</div>
            <div class="site-title">${siteName}</div>
            <div class="controls">
            <a href="${siteUrl}" target="_blank" class="btn visit-btn">visit</a>
            <button onclick=removeBookmark("${siteUrl}") class="btn dlt-btn" id="delete">delete</button>
            </div>`

            div.innerHTML = inner
            document.querySelector('#bookmarks').classList.remove('message')

            document.querySelector('#bookmarks').appendChild(div)
        }
    }
}