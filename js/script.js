class Book {
    title;
    author;
    numPages;
    publishDate;
    read;
    id;

    constructor(title, author, numPages, publishDate, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.publishDate = publishDate;
        this.read = read;
        this.id = count;
    }
}

function openBookForm() {
    let sec = document.querySelector(".add-book");
    sec.classList.toggle("invisible");
}

function displayBooks() {
    let section = document.querySelector("#book-list");
    section.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        let newBook = document.createElement("div");
        newBook.classList.add("book-card");
        if (!books[i].read) {
            newBook.classList.add("unread");
        }
        newBook.id = books[i].id;

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

        let removeButton = document.createElement("button");
        removeButton.classList.add("closeForm");
        removeButton.addEventListener("click", function () {
            removeBook(books[i].id);
        });
        removeButton.textContent = "x";

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(numPages);
        newBook.appendChild(date);
        newBook.appendChild(toggle);
        newBook.appendChild(removeButton);
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

    for (let i = 0; i < books.length; i++) {
        if (books[i].id == card.id) {
            books[i].read = !books[i].read;
        }
    }
}

function displayNum() {
    let bookCount = document.querySelector("#book-count");
    bookCount.innerHTML =
        `<p> Number of Books: ${books.length} </p>` +
        `<p> Read Books: ${readBooks} </p>` +
        `<p> Unread Books: ${unreadBooks} </p>`;
}

function addBook(title, author, numPages, publishDate, read) {
    let newBook = new Book(
        title,
        author,
        numPages,
        publishDate,
        read
    );
    books.push(newBook);
    if (read) {
        readBooks++;
    } else {
        unreadBooks++;
    }
    count++;
    displayBooks();
    displayNum();
}

function addNewBook() {
    let form = document.querySelector(".book-display form");
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let numPages = document.querySelector("#numPages").value;
    let publishDate = document.querySelector("#publishDate").value;
    let read = document.querySelector("#read").checked;
    addBook(title, author, numPages, publishDate, read);
    openBookForm();
    form.reset();
}

function removeBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            if (books[i].read) {
                readBooks--;
            } else {
                unreadBooks--;
            }
            books.splice(i, 1);
        }
    }
    displayBooks();
    displayNum();
}

var count = 0;
var books = [];
books.push(
    new Book(
        "Ultralearning: Master Hard Skills, Outsmart the Competition, and Accelerate Your Career",
        "Scott Young",
        304,
        "2019-08-06",
        true
    )
);
count++;
books.push(
    new Book(
        "Ultralearning: Master Hard Skills, Outsmart the Competition, and Accelerate Your Career",
        "Scott Young",
        304,
        "2019-08-06",
        false
    )
);
count++;
displayBooks();
var readBooks = 1;
var unreadBooks = 1;
displayNum();
