// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class Storage {
    static getBooks() {
        let books
        if (localStorage.getItem('books') === null) {
            books = []
        }
        else {
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }

    static addBook(book) {
        const books = Storage.getBooks()
        books.push(book)

        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn) {
        const books = Storage.getBooks()
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        })

        localStorage.setItem('books', JSON.stringify(books))
    }
}

// UI class
class UI {
    static displayBooks() {
        // fetch from local storage
        const storedBooks = Storage.getBooks()

        storedBooks.forEach(book => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const parent = document.querySelector('tbody')
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td colspan="4">${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.isbn}</td>
                            <td class="close-cell"><span class="close delete">x</span></td>`

        newRow.classList.add('data')
        parent.appendChild(newRow)
    }

    static showMessage(message, status = 'added') {
        const messageDiv = document.querySelector('.message')
        messageDiv.textContent = message
        if (status === 'removed') {
            messageDiv.style.backgroundColor = 'red'
        }
        else {
            messageDiv.style.backgroundColor = ''
        }
        messageDiv.classList.add('show')
        setTimeout(() => messageDiv.classList.remove('show'), 3000)
    }

    static removeBook(item) {
        if (item.classList.contains('delete')) {
            item.parentElement.parentElement.remove()
            // show msg
            UI.showMessage('Book Removed', 'removed')
        }
    }

    static clearInputs(title, author, isbn) {
        title.value = ''
        author.value = ''
        isbn.value = ''
    }

    static inputFieldError(title, author, isbn) {
        const border = '2px solid red'
        const borderRadius = '5px'
        if (title.value === '') {
            title.style.border = border
            title.style.borderRadius = borderRadius
        }
        if (author.value === '') {
            author.style.border = border
            author.style.borderRadius = borderRadius
        }
        if (isbn.value === '') {
            isbn.style.border = border
            isbn.style.borderRadius = borderRadius
        }
    }

    static clearErrors(title, author, isbn) {
        title.style.border = ''
        title.style.borderRadius = ''
        author.style.border = ''
        author.style.borderRadius = ''
        isbn.style.border = ''
        isbn.style.borderRadius = ''
    }
}

// INIT DOM elements
const addBtn = document.querySelector('#add-btn')

// EVENTS
document.addEventListener('DOMContentLoaded', UI.displayBooks())

// Add Book Event
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const isbn = document.querySelector('#isbn')

    const titleInput = title.value
    const authorInput = author.value
    const isbnInput = isbn.value

    if (titleInput != '' && authorInput != '' && isbnInput != '') {
        // clear error signs
        UI.clearErrors(title, author, isbn)

        const newBook = new Book(titleInput, authorInput, isbnInput)

        // Add book to UI
        UI.addBookToList(newBook, true)

        // show msg
        UI.showMessage('Book Added')

        // Add book to storage
        Storage.addBook(newBook)

        // clear input fields
        UI.clearInputs(title, author, isbn)
    } else {
        UI.inputFieldError(title, author, isbn)
    }

})

// remove Book Event
const tbody = document.querySelector('tbody')
tbody.addEventListener('click', (e) => {
    // remove from UI
    UI.removeBook(e.target)

    // remove from storage
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent)
})