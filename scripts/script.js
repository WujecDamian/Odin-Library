const myLibrary = []
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const submitBtn = document.querySelector('#submit-btn')
const booksSection = document.querySelector('.books')
function Book (id, title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  }
  this.id = id
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.haveRead = function () {
    if (read) {
      return 'already read it'
    } else {
      return 'not read yet'
    }
  }
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${
        this.pages
      } pages, ${this.haveRead()} `
    )
  }
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
console.log(theHobbit.info())

submitBtn.addEventListener('click', addBookToLibrary)
function addBookToLibrary (event) {
  // take params, create a book then store it in the array
  let id = self.crypto.randomUUID()
  let title = titleInput.value
  let author = authorInput.value
  let pages = pagesInput.value
  if (title != '' && author != '' && pages != '') {
    const book1 = new Book(id, title, author, pages, false)
    myLibrary.push(book1)
  }
  event.preventDefault()
  console.table(myLibrary)
  renderBookCard()
}

function renderBookCard () {
  let bookCard = document.createElement('div')
  bookCard.classList.add('book__card')
  let bookTitle = document.createElement('h3')
  bookTitle.classList.add('book__title')
  bookCard.appendChild(bookTitle)
  let bookAuthor = document.createElement('h4')
  bookAuthor.classList.add('book__author')
  bookCard.appendChild(bookAuthor)
  let bookPages = document.createElement('h4')
  bookPages.classList.add('book__pages')
  myLibrary.forEach(element => {
    bookTitle.innerText = element.title

    bookAuthor.innerText = element.author

    bookPages.innerText = element.pages

    bookCard.appendChild(bookPages)
    booksSection.appendChild(bookCard)
  })
}
