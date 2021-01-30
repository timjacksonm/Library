let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
       return (this.title + this.author + this.pages + this.read);
    }
}

const theHobbit = new Book('the Hobbit', ' by J.R.R. Tolkien,', ' 295 pages,', ' not read yet');
const hatchet = new Book('Hatchet', ' Gary Paulsen', ' 195 pages,', ' yes read');

function addBookToLibrary(book) {
    myLibrary.push(book);
};
function bookLoopToScreen() {
    const container = document.querySelector('#container');

    for(let i = 0 ; i < myLibrary.length; ++i) {
      let createBox = container.appendChild(document.createElement('ul'));
      createBox.setAttribute('id', 'child');
    
      let createTitle = createBox.appendChild(document.createElement('li'));
      createTitle.textContent = myLibrary[i].title;
      let createAuthor = createBox.appendChild(document.createElement('li'));
      createAuthor.textContent = myLibrary[i].author;
      let createPages = createBox.appendChild(document.createElement('li'));
      createPages.textContent = myLibrary[i].pages;
      let createReadQ = createBox.appendChild(document.createElement('li'));
      createReadQ.textContent = myLibrary[i].read;

      createBox;
      createTitle;
      createAuthor;
      createPages;
      createReadQ;
    }
};

    const addABook = document.querySelector('.button');
    addABook.addEventListener('click', () => { openForm();})

    function openForm() {
        const selectBody = document.querySelector('body');
        const createDivContainer = document.createElement('div');
        createDivContainer.setAttribute('id', 'formContainer');
        
        selectBody.appendChild(createDivContainer)

        const selectDivContainer = document.querySelector('#formContainer');

        let QOne = selectDivContainer.appendChild(document.createElement('div'));
        QOne.textContent = 'What is the books name?';
        QOne;
        let QOneInput = selectDivContainer.appendChild(document.createElement('input'));
        QOneInput.setAttribute('class', 'inputStyle');
        QOneInput;

        let QTwo = selectDivContainer.appendChild(document.createElement('div'));
        QTwo.textContent = 'Who is the author of the book?';
        QTwo;
        let QTwoInput = selectDivContainer.appendChild(document.createElement('input'));
        QTwoInput.setAttribute('class', 'inputStyle');
        QTwoInput;

        let QThree = selectDivContainer.appendChild(document.createElement('div'));
        QThree.textContent = 'How many pages does the book have?';
        QThree;
        QThreeInput = selectDivContainer.appendChild(document.createElement('input'));
        QThreeInput.setAttribute('class', 'inputStyle');
        QThreeInput;

        let QFour = selectDivContainer.appendChild(document.createElement('div'));
        QFour.textContent = 'Have you read the book yet? yes/no';
        QFour;
        let QFourInput = selectDivContainer.appendChild(document.createElement('input'));
        QFourInput.setAttribute('class', 'inputStyle');
        QFourInput;
    }
