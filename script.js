const createBook = document.createElement('div');



const aboutFace = {
    name: 'About Face',
    author: 'David Hackworth',
    status: 'Reading',
}

const aboutPace = {
    name: 'About Pace',
    author: 'David Hackworth',
    status: 'Reading',
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

function updateLiveLibrary(obj) {
    const bookContainer = document.querySelector('.main');
    obj.forEach(element => {
        const createBook = document.createElement('div');
        createBook.style.display = 'grid';
        createBook.style.gridTemplateColumns = 'inherit';
        createBook.style.gridColumn = '1 / 4';
        
        propertyToDiv(obj, element);
       
        bookContainer.appendChild(createBook);
    });

};

updateLiveLibrary(myLibrary);

function propertyToDiv(obj, element) {
    const bookName = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookRead = document.createElement('div');

    bookName.textContent = element['name'];
    createBook.appendChild(bookName);
    bookAuthor.textContent = element['author'];
    createBook.appendChild(bookAuthor);
    bookRead.textContent = element['status'];
    createBook.appendChild(bookRead);
    
}





