let myLibrary = []
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const submitBtn = document.querySelector('#submit-btn')
const booksSection = document.querySelector('.books')

class Book {
  constructor (id, title, author, pages, read) {
    this.id = id ?? crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = Number(pages)
    this.read = !!read
  }
  info () {
    console.log(
      `${this.title} by ${this.author}, ${
        this.pages
      } pages, ${this.haveRead()} `
    )
  }
  toogleRead () {
    this.read = !this.read
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

//! form
const form = document.querySelector('.form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const title = titleInput.value.trim()
  const author = authorInput.value.trim()
  const pages = pagesInput.value.trim()

  if (title && author && pages) {
    const book = new Book(null, title, author, pages, false)
    myLibrary.push(book)
    renderBookCardArray()
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
  }
})

function renderBookCardArray () {
  booksSection.replaceChildren()
  myLibrary.forEach(element => {
    let bookCard = document.createElement('div')
    bookCard.classList.add('book__card')
    bookCard.dataset.id = element.id
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
}

function attachLibraryListeners () {
  booksSection.addEventListener('click', e => {
    const card = e.target.closest('.book__card')
    if (!card) return

    const id = card.dataset.id
    const book = myLibrary.find(b => b.id === id)
    if (!book) return

    //delete btn
    if (e.target.closest('.delete__btn')) {
      myLibrary = myLibrary.filter(book => book.id !== id)
      renderBookCardArray()
      return
    }
    //toggle read btn
    if (e.target.closest('.haveRead__btn')) {
      book.toogleRead()
      renderBookCardArray()
      return
    }
  })
}
attachLibraryListeners()
