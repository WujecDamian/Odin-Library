function book (title, author, pages, read) {
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
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, false)
console.log(theHobbit.info())
