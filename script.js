const createBook = document.createElement('div');
const bookContainer = document.querySelector('.main');



const aboutFace = {
    name: 'About Face',
    author: 'David Hackworth',
    status: 'Reading',
}

const aboutPace = {
    name: 'Can\'t Hurt Me: Master Your Mind and Defy the Odds.. Theres nothing going to hold us back',
    author: 'David Goggins',
    status: false,
}

let myLibrary = [aboutFace, aboutPace];


function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = Boolean(status);
};

function addBookToLibrary(book) {
    myLibrary.push(book)
};

function propertyToDiv(element) {
    const bookName = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookRead = document.createElement('div');

   
}

function updateLiveLibrary(obj) {

    for (let i = 0; i < obj.length; i++) {
        const createBook = document.createElement('div');
        const bookName = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookRead = document.createElement(`input`);

    
        createBook.classList.add('book-item');

        bookName.textContent = obj[i]['name'];
        createBook.appendChild(bookName);
        bookAuthor.textContent = obj[i]['author'];
        createBook.appendChild(bookAuthor);
        bookRead.type = 'checkbox';
        bookRead.textContent = obj[i]['status'];
        if ( obj[i]['status'] ) {
            bookRead.checked = true;
        } else {
            bookRead.checked = false;
        }

        createBook.appendChild(bookRead);
        bookContainer.appendChild(createBook);
    }



};

updateLiveLibrary(myLibrary);






