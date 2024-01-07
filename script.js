const myLibrary = [];
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");



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
function displayDialog(){
    
}
function displayLatestBook(){
    
}

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});
