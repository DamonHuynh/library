const myLibrary = [];
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector(".confirm");
const form = document.querySelector("form");



function Book(name, author, imgUrl, pages, hasRead) {
    this.name = name;
    this.author = author;
    this.imgUrl = imgUrl;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(name, author, imgUrl, pages, hasRead) {
    myLibrary.push(new Book(name, author, imgUrl, pages, hasRead));
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
    dialog.close();
});