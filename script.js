const myLibrary = [];

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