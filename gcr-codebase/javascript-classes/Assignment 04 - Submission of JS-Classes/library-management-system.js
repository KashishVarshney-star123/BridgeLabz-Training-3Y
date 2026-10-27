class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      return false;
    }
    this.isIssued = false;
    return true;
  }
}

const library = [
  new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "978-0135957059"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509"),
  new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244"),
];

function displayAvailableBooks() {
  const availableBooks = library.filter((book) => !book.isIssued);
  console.log(`Available books (${availableBooks.length}):`);

  if (availableBooks.length === 0) {
    console.log("  No books available right now");
    return;
  }

  availableBooks.forEach((book) => {
    console.log(`  ${book.title} by ${book.author} (ISBN: ${book.ISBN})`);
  });
}

function issueBookByISBN(isbn) {
  const book = library.find((item) => item.ISBN === isbn);

  if (!book) {
    console.log(`No book found with ISBN ${isbn}`);
    return;
  }

  if (book.issueBook()) {
    console.log(`Issued: "${book.title}" by ${book.author}`);
  } else {
    console.log(`Sorry, "${book.title}" is already issued`);
  }
}

function returnBookByISBN(isbn) {
  const book = library.find((item) => item.ISBN === isbn);

  if (!book) {
    console.log(`No book found with ISBN ${isbn}`);
    return;
  }

  if (book.returnBook()) {
    console.log(`Returned: "${book.title}"`);
  } else {
    console.log(`"${book.title}" was not issued`);
  }
}

displayAvailableBooks();

console.log("\nIssuing books:");
issueBookByISBN("978-0135957059");
issueBookByISBN("978-0135957059");
issueBookByISBN("000-0000000000");

console.log("");
displayAvailableBooks();

console.log("\nReturning a book:");
returnBookByISBN("978-0135957059");

console.log("");
displayAvailableBooks();

const userIsbn = process.argv[2];
if (userIsbn) {
  console.log(`\nSearching ISBN from user input: ${userIsbn}`);
  issueBookByISBN(userIsbn);
}