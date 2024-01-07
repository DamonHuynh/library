const myLibrary = [];
const bookContainer = document.querySelector(".book-cont");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector(".confirm");
const form = document.querySelector("form");
const nameForm = document.querySelector("#name");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const hasReadForm = document.querySelector("#hasRead");



function Book(name, author, pages, hasRead, bookNum) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.bookNum = bookNum;
}

function addBookToLibrary(name, author, pages, hasRead, bookNum) {
    myLibrary.push(new Book(name, author, pages, hasRead, bookNum));
}

function createBookCard(book){
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const hasRead = document.createElement("div");
    const remove = document.createElement("button");
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(hasRead);
    card.appendChild(remove);
    name.textContent = `Title: ${book.name}`;
    author.textContent = `By: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    hasRead.textContent = book.hasRead;
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        card.remove();
        myLibrary.splice(book.bookNum, 1);
        console.log(myLibrary);
    });
    bookContainer.appendChild(card);
}

addBtn.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = nameForm.value;
    let author = authorForm.value;
    let pages = pagesForm.value;
    let hasRead = hasReadForm.checked ? "Read" : "Has not Read";
    addBookToLibrary(name, author, pages, hasRead, myLibrary.length);
    console.log(myLibrary);
    createBookCard(myLibrary[myLibrary.length - 1]);
    dialog.close();
});

confirmBtn.addEventListener("click", () => {

} );

