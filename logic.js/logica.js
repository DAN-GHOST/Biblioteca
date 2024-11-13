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

/*Funciones en desarrollo*/
function generarDiv(){
    const divContenedor = document.querySelector('.Contenedor_viewCradsBooks');
    myLibrary.forEach((book, index) =>{
        const newDiv = document.createElement('div');
        newDiv.className = `div-${index}`;
        divContenedor.appendChild(newDiv);
        const infoInToDiv = document.querySelector(`.div-${index}`);
    });
}

function limpiarDiv(){
    let evaluar = false,
    i = 0;
    while(evaluar === false){
        const divCambiante = document.querySelector(`.divs-${i}`);
        if(divCambiante === null){
            evaluar = true;
        }else{
            ++i;
            divCambiante.remove();
        }
    }
}
/*-------------------------*/

const btnNewBook = document.querySelector(".btnAddBook");
btnNewBook.addEventListener("click",()=>{addBookToLibrary()});
//window.onload = addBookToLibrary();
//window.onload = generarDiv();