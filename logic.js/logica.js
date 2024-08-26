const myLibrary = [];

function Book(Title, Author, Pages, Read){
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
    this.info = function (){
        console.log(`The ${this.title} by ${this.author}, ${this.pages} pages ${this.read === true? "Read it": "not read yet"}`);
    };
}

function addBookToLibrary() {
    let title = prompt("Por favor ingrese el titulo");
    let author = prompt("Por favor ingrese el nombre del autor");
    let pages = prompt("Por favor ingrese el numero de paginas");
    let read = prompt("Por favor ingrese con (true) o (false) si ya lo ha leido");
    const book = new Book(title, author, pages , read);
    myLibrary.push(book);
}

function ShowBook(){
    myLibrary.forEach(book =>{
        book.info();
    });
}

window.onload = addBookToLibrary(); 