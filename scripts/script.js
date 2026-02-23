let myLibrary = []
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const submitBtn = document.querySelector('#submit-btn')
const booksSection = document.querySelector('.books')

class Book {
  constructor (id, title, author, pages, read) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  info () {
    console.log(
      `${this.title} by ${this.author}, ${
        this.pages
      } pages, ${this.haveRead()} `
    )
  }
  haveRead () {
    if (this.read) {
      return 'already read it'
    } else {
      return 'not read yet'
    }
  }
}
/* add books manually (starting array) */
const theHobbit = new Book(
  self.crypto.randomUUID(),
  'The Hobbit',
  'J.R.R. Tolkien',
  295,
  false
)
const sellOrBeSold = new Book(
  self.crypto.randomUUID(),
  'Sell Or Be Sold',
  'Grant Cardone',
  212,
  true
)
const fortyEightLawsOfPower = new Book(
  self.crypto.randomUUID(),
  '48 Laws of Power',
  'Robert Greene',
  266,
  true
)
myLibrary.push(theHobbit, sellOrBeSold, fortyEightLawsOfPower)
renderBookCardArray()

/* submit button - add book button eventListener and Function */
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

  renderBookCardArray()
}

function renderBookCardArray () {
  booksSection.replaceChildren()
  myLibrary.forEach(element => {
    let bookCard = document.createElement('div')
    bookCard.classList.add('book__card')
    bookCard.dataset.indexNumber = element.id
    let bookTitle = document.createElement('h3')
    bookTitle.classList.add('book__title')
    bookCard.appendChild(bookTitle)
    let bookAuthor = document.createElement('h4')
    bookAuthor.classList.add('book__author')
    bookCard.appendChild(bookAuthor)
    let bookPages = document.createElement('h4')
    bookPages.classList.add('book__pages')
    bookCard.appendChild(bookPages)
    /* deleteBtn */
    let buttonsSection = document.createElement('div')
    buttonsSection.classList.add('buttons__section')
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete__btn')
    let deleteSvg = document.createElement('img')
    deleteSvg.src = './images/delete.svg'
    deleteBtn.appendChild(deleteSvg)
    bookCard.appendChild(deleteBtn)
    /* haveread Button */
    let haveReadBtn = document.createElement('button')
    haveReadBtn.classList.add('haveRead__btn')
    let haveReadSvg = document.createElement('img')
    haveReadSvg.classList.add('haveRead__svg')

    haveReadSvg.src = './images/book_ribbon.svg'
    if (element.read) {
      haveReadSvg.classList.add('readed')
    } else {
      haveReadSvg.classList.add('not-readed')
    }
    haveReadBtn.appendChild(haveReadSvg)

    /* // haveread button end */
    buttonsSection.appendChild(deleteBtn)
    buttonsSection.appendChild(haveReadBtn)
    bookCard.appendChild(buttonsSection)
    bookTitle.innerText = element.title

    bookAuthor.innerText = element.author

    bookPages.innerText = element.pages

    booksSection.appendChild(bookCard)
  })
  console.table(myLibrary)
  removeButtons()
  haveReadButtons()
}

function removeButtons () {
  const deleteButtons = document.querySelectorAll('.delete__btn')

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', e => {
      console.log(
        e.currentTarget.parentElement.parentElement.dataset.indexNumber
      )
      const isSameId = element =>
        element.id ===
        e.currentTarget.parentElement.parentElement.dataset.indexNumber
      let indexToDelete = myLibrary.findIndex(isSameId)
      console.log(indexToDelete)

      myLibrary.splice(indexToDelete, 1)

      renderBookCardArray()
    })
  }
}
function haveReadButtons () {
  const haveReadButtons = document.querySelectorAll('.haveRead__btn')

  for (let i = 0; i < haveReadButtons.length; i++) {
    haveReadButtons[i].addEventListener('click', e => {
      if (myLibrary[i].read === true) {
        myLibrary[i].read = false
      } else {
        myLibrary[i].read = true
      }
      renderBookCardArray()
    })
  }
}
