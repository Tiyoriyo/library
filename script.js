const createBook = document.createElement('div');
const bookContainer = document.querySelector('.main');
const newItem = document.getElementById('newButton');

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

function addBookToLibrary(book) {
    myLibrary.push(book)
};

newItem.addEventListener('click', () => {
    if (activeTempBook) {
        alert('No');
    } else {
        addTempBook();
    }
});


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

    inputAuthor.type = 'text';
    inputAuthor.classList.add('input-item');

    inputButtonSet.classList.add('button-set');

    inputStatus.type = 'checkbox';
    inputStatus.classList.add('input-check');

    confirmItem.classList.add('confirmButton');

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

updateLiveLibrary(myLibrary);






