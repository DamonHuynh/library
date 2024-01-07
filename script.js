const myLibrary = [];
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector(".confirm");
const form = document.querySelector("form");
const nameForm = document.querySelector("#name");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const hasReadForm = document.querySelector("#hasRead");



function Book(name, author, pages, hasRead) {
    this.name = name;
    this.author = author;

    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(name, author, pages, hasRead) {
    myLibrary.push(new Book(name, author, pages, hasRead));
}

function displayBook(){
    
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
    let hasRead = hasReadForm.value;
    addBookToLibrary(name, author, pages, hasRead);
    console.log(myLibrary);
    dialog.close();
});

confirmBtn.addEventListener("click", () => {

} );

