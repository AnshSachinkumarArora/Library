const showDialog = document.getElementById("add");
const dialog = document.getElementById("addBook"); 
const books = document.getElementById("books");
const name = document.getElementById("name");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const confirm = document.getElementById("confirm");

const myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBook(author, title, pages) {
    const temp = new Book(author, title, pages);
    myLibrary.push(temp);
}

showDialog.addEventListener("click", () => {
    dialog.showModal();
});