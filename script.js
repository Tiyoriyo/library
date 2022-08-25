const bookContainer = document.querySelector('.main');

const aboutFace = {
    name: 'About Face',
    author: 'David Hackworth',
    status: 'Reading',
}

let myLibrary = [aboutFace];

const book1 = document.createElement('div');
const book1Title = document.createElement('div');
const book1Author = document.createElement('div');
const book1Status = document.createElement('status');

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = Boolean(status);
};

function addBookToLibrary(book) {

}




