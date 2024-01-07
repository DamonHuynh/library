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
const green = "#D1FFBD";
const red = "#FF7074";



function Book(name, author, pages, hasRead, bookNum) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.bookNum = bookNum;
}


function createBookCard(book){
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const hasRead = document.createElement("button");
    const remove = document.createElement("button");
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(hasRead);
    card.appendChild(remove);
    name.textContent = `Title: ${book.name}`;
    author.textContent = `By: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    hasRead.textContent =  book.hasRead ? "Read" : "Has not Read";
    hasRead.style.backgroundColor = book.hasRead ? green : red;
    hasRead.addEventListener("click", () => {
        changeReadStatus(book, hasRead);
    })
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        removeBook(book, card)
    });
    bookContainer.appendChild(card);
}

function removeBook(book, card){
    card.remove();
    myLibrary.splice(book.bookNum, 1);
    /* All of the items get pushed back, so the index needs to be updated */
    for(let x = book.bookNum; x < myLibrary.length; x++){
        myLibrary[x].bookNum--;
    }
    console.log(myLibrary);
}

function changeReadStatus(book, hasRead){
    book.hasRead = !book.hasRead
    hasRead.textContent = book.hasRead ? "Read" : "Has not Read";
    hasRead.style.backgroundColor = book.hasRead ? green : red;
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
    let hasRead = hasReadForm.checked;
    /* Using the length of the array as the last parameter so that each 
    book is asscioated with an index from the array*/
    myLibrary.push(new Book(name, author, pages, hasRead, myLibrary.length));
    createBookCard(myLibrary[myLibrary.length - 1]);
    dialog.close();
});

confirmBtn.addEventListener("click", () => {

} );

