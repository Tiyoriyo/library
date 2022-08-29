const createBook = document.createElement('div');
const bookContainer = document.querySelector('.main');
const newItem = document.getElementById('newButton');
const confirmButton = document.querySelector('.confirmButton');
let activeTempBook = false;



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

const kisAmk = {
    name: 'Can\'t Hurt Me: Master Your Mind and Defy the Odds.. Theres nothing going to hold us back',
    author: 'David Goggins',
    status: false,
}

let myLibrary = [aboutFace];


function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = Boolean(status);
};

newItem.addEventListener('click', () => {
    if (activeTempBook) {
        alert('No');
    } else {
        addTempBook();
    }
});

function addBookToLibrary() {
    const BOOKTITLE = document.querySelector('#bookTitle').value;
    const BOOKAUTHOR = document.querySelector('#bookAuthor').value;
    const BOOKREAD = document.querySelector('#bookRead').checked;

    createBook.remove();

    

    const BOOK = new Book(BOOKTITLE, BOOKAUTHOR, BOOKREAD);
    myLibrary.push(BOOK);

    activeTempBook = false;

    removeAllBooks();
    return;
}


function addTempBook() {
    const createBook = document.createElement('div');
    const inputName = document.createElement('input');
    const inputAuthor = document.createElement('input');
    const inputButtonSet = document.createElement('div');
    const inputStatus = document.createElement('input');
    const confirmItem = document.createElement('button');
    const cancelItem = document.createElement('button');
    
    createBook.classList.add('book-item');

    inputName.type = 'text';
    inputName.classList.add('input-item');
    inputName.setAttribute('id', 'bookTitle')

    inputAuthor.type = 'text';
    inputAuthor.classList.add('input-item');
    inputAuthor.setAttribute('id', 'bookAuthor');

    inputButtonSet.classList.add('button-set');

    inputStatus.type = 'checkbox';
    inputStatus.classList.add('input-check');
    inputStatus.setAttribute('id', 'bookRead')

    confirmItem.classList.add('confirmButton');
    confirmItem.addEventListener('click', () => {

        let errorMsg1 = 'Input Book Title Here';
        let errorMsg2 = 'Input Book Author Here';
        
        if (inputName.value.length == 0 && inputAuthor.value.length == 0) {
            inputName.value = 'Input Book Title Here';
            inputAuthor.value = 'Input Author Here';
            return;
        } else if (inputName.value.length == 0 && inputAuthor.value.length != 0) {
            inputName.value = 'Input Book Title Here';
            return;
        } else if (inputName.value.length != 0 && inputAuthor.value.length == 0) {
            inputAuthor.value = 'Input Book Author Here';
            return;
        } else {
            addBookToLibrary();
        };
    });

    cancelItem.classList.add('cancel-button');
    
    inputButtonSet.appendChild(inputStatus);
    inputButtonSet.appendChild(confirmItem);
    inputButtonSet.appendChild(cancelItem);

    createBook.appendChild(inputName);
    createBook.appendChild(inputAuthor);
    createBook.appendChild(inputButtonSet);
    bookContainer.appendChild(createBook);

    activeTempBook = true;
};

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

function removeAllBooks() {
    const BOOKS = document.querySelectorAll('.book-item');
    
    BOOKS.forEach(book => {
        book.remove();
    });

    updateLiveLibrary(myLibrary);
}

updateLiveLibrary(myLibrary);






