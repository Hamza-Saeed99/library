class Book {
    title;
    author;
    numPages;
    publishDate;
    read;

    constructor(title, author, numPages, publishDate, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.publishDate = publishDate;
        this.read = read;
    }
}

function displayBooks() {
    let section = document.querySelector("#book-list");
    for (let i = 0; i < books.length; i++) {
        let newBook = document.createElement("div");
        newBook.classList.add("book-card");
        if (!books[i].read) {
            newBook.classList.add("unread");
        }

        let title = document.createElement("h4");
        title.textContent = books[i].title;

        let author = document.createElement("p");
        author.textContent = "Author: " + books[i].author;

        let numPages = document.createElement("p");
        numPages.textContent =
            "Number of Pages: " + books[i].numPages;

        let date = document.createElement("p");
        date.textContent = "Published: " + books[i].publishDate;

        let toggle = document.createElement("label");
        toggle.classList.add("toggle");
        let read = document.createElement("input");
        read.name = "toggleswitch";
        read.type = "checkbox";
        if (books[i].read) {
            read.checked = true;
        }
        read.classList.add("toggleswitch");
        read.addEventListener("change", readEventListener);
        let readSwitch = document.createElement("span");
        readSwitch.classList.add("roundbutton");
        toggle.appendChild(read);
        toggle.appendChild(readSwitch);

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(numPages);
        newBook.appendChild(date);
        newBook.appendChild(toggle);
        section.appendChild(newBook);
    }
}

function readEventListener(event) {
    let card = event.target.parentElement.parentElement;
    card.classList.toggle("unread");
    if (event.target.checked) {
        readBooks++;
        unreadBooks--;
        displayNum();
    } else {
        readBooks--;
        unreadBooks++;
        displayNum();
    }
}

function displayNum() {
    let bookCount = document.querySelector("#book-count");
    bookCount.innerHTML =
        `<p> Number of Books: ${books.length} </p>` +
        `<p> Read Books: ${readBooks} </p>` +
        `<p> Unread Books: ${unreadBooks} </p>`;
}

var books = [];
var readBooks = 1;
var unreadBooks = 1;
books.push(
    new Book(
        "Ultralearning: Master Hard Skills, Outsmart the Competition, and Accelerate Your Career",
        "Scott Young",
        304,
        "2019-08-06",
        true
    )
);
books.push(
    new Book(
        "Ultralearning: Master Hard Skills, Outsmart the Competition, and Accelerate Your Career",
        "Scott Young",
        304,
        "2019-08-06",
        false
    )
);
displayBooks();
displayNum();
