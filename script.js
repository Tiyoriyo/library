const bookContainer = document.querySelector('.main');

const aboutFace = {
    name: 'About Face',
    author: 'David Hackworth',
    status: 'Reading',
}

let myLibrary = [aboutFace];


function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = Boolean(status);
};

function addBookToLibrary(book) {

}




