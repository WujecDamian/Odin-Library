const myLibrary = []
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const submitBtn = document.querySelector('#submit-btn')

function Book (title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  }
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
function addBookToLibrary () {
  // take params, create a book then store it in the array
  let title = titleInput.value
  let author = authorInput.value
  let pages = pagesInput.value
  const book1 = new Book(title, author, pages, false)
  myLibrary.push(book1)
}
console.table(myLibrary)
