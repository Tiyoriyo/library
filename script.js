const createBook = document.createElement('div');
const bookContainer = document.querySelector('.main');
const newItem = document.getElementById('newButton');
const confirmButton = document.querySelector('.confirmButton');
let activeTempBook = false;
let nodePosition = [];



const aboutFace = {
    name: 'About Face',
    author: 'David Hackworth',
    status: true,
};

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
    removeAllBooks();

    const BOOK = new Book(BOOKTITLE, BOOKAUTHOR, BOOKREAD);
    myLibrary.push(BOOK);

    activeTempBook = false;
    updateLiveLibrary(myLibrary);
}

function addTempBook() {
    const createBook = document.createElement('div');
    const inputName = document.createElement('input');
    const inputAuthor = document.createElement('input');
    const inputButtonSet = document.createElement('div');
    const inputStatus = document.createElement('input');
    const confirmItem = document.createElement('button');
    const cancelItem = document.createElement('button');
    const scroll = document.querySelector('.main');
    
    createBook.classList.add('book-item');
    addInputs(inputName, inputAuthor, inputButtonSet, inputStatus, confirmItem, cancelItem);
    appendInputs(bookContainer, createBook, inputName, inputAuthor, inputButtonSet, inputStatus, confirmItem, cancelItem);
    scroll.scrollTop = scroll.scrollHeight;
    activeTempBook = true;
};

function confirmBook(title, author) {
    if (title.value.length == 0 && author.value.length == 0) {
        title.value = 'Input Book Title Here';
        author.value = 'Input Author Here';
        return;
    } else if (title.value.length == 0 && author.value.length != 0) {
        title.value = 'Input Book Title Here';
        return;
    } else if (title.value.length != 0 && author.value.length == 0) {
        author.value = 'Input Book Author Here';
        return;
    } else {
        addBookToLibrary();
    };
}

function cancelBook() {
    activeTempBook = false;
    createBook.remove();
    removeAllBooks();
    updateLiveLibrary(myLibrary);
}

function addInputs(inputName, inputAuthor, inputButtonSet, inputStatus, confirmItem, cancelItem) {
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
    confirmItem.addEventListener('click', () => confirmBook(inputName, inputAuthor));

    cancelItem.classList.add('cancel-button');
    cancelItem.addEventListener('click', () => cancelBook())
}

function appendInputs(bookContainer, createBook, inputName, inputAuthor, inputButtonSet, inputStatus, confirmItem, cancelItem) {
    inputButtonSet.appendChild(inputStatus);
    inputButtonSet.appendChild(confirmItem);
    inputButtonSet.appendChild(cancelItem);

    createBook.appendChild(inputName);
    createBook.appendChild(inputAuthor);
    createBook.appendChild(inputButtonSet);
    bookContainer.appendChild(createBook);
}

function updateLiveLibrary(obj) {
    for (let i = 0; i < obj.length; i++) {
        const createBook = document.createElement('div');
        const bookName = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const statusSet = document.createElement('div');
        const bookRead = document.createElement(`input`);
        const remove = document.createElement('button');

        createBook.classList.add('book-item');
        createBook.setAttribute('id', `${i+1}`)

        bookName.textContent = obj[i]['name'];
        bookAuthor.textContent = obj[i]['author'];
        statusSet.classList.add('button-set');
        bookRead.type = 'checkbox';
        bookRead.textContent = obj[i]['status'];

        if ( obj[i]['status'] ) {
            bookRead.checked = true;
        } else {
            bookRead.checked = false;
        }

        remove.textContent = '✕';
        remove.classList.add('remove-button')
        remove.addEventListener('click', (e) => {
            let position = e.target.parentNode.parentNode.id - 1;
            myLibrary.splice(position, 1);
            removeAllBooks()
            updateLiveLibrary(myLibrary);
            console.table(myLibrary);
        });
        statusSet.appendChild(bookRead);
        statusSet.appendChild(remove);


        createBook.appendChild(bookName);
        createBook.appendChild(bookAuthor);
        createBook.appendChild(statusSet);
        createBook.classList.add('final-book');
        bookContainer.appendChild(createBook);
        nodePosition.push(i);
    }

}

function removeAllBooks() {
    const BOOKS = document.querySelectorAll('.book-item');
    BOOKS.forEach(book => {
        book.remove();
    });
}

updateLiveLibrary(myLibrary);

const FINALBOOK = document.querySelectorAll('.final-book');








