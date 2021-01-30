let myLibrary = [];
function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
       return (this.title + this.author + this.pages + this.read);
    }
};
function addBookToLibrary(book) {
    myLibrary.push(book);
};
function bookLoopToScreen() {
    const container = document.querySelector('#container');

    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

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
function openForm() {
    const selectBody = document.querySelector('body');
    const createDivContainer = document.createElement('form');
    createDivContainer.setAttribute('id', 'formContainer');
    
    selectBody.appendChild(createDivContainer)
    const selectDivContainer = document.querySelector('#formContainer');
    let QOne = selectDivContainer.appendChild(document.createElement('div'));
    QOne.textContent = 'What is the books name?';
    QOne;
    let QOneInput = selectDivContainer.appendChild(document.createElement('input'));
    QOneInput.setAttribute('class', 'inputStyle');
    QOneInput.setAttribute('name', 'input1');
    QOneInput.setAttribute('id', 'input1');
    QOneInput;
    let QTwo = selectDivContainer.appendChild(document.createElement('div'));
    QTwo.textContent = 'Who is the author of the book?';
    QTwo;
    let QTwoInput = selectDivContainer.appendChild(document.createElement('input'));
    QTwoInput.setAttribute('class', 'inputStyle');
    QTwoInput.setAttribute('name', 'input2');
    QTwoInput.setAttribute('id', 'input2');
    QTwoInput;
    let QThree = selectDivContainer.appendChild(document.createElement('div'));
    QThree.textContent = 'How many pages does the book have?';
    QThree;
    QThreeInput = selectDivContainer.appendChild(document.createElement('input'));
    QThreeInput.setAttribute('class', 'inputStyle');
    QThreeInput.setAttribute('name', 'input3');
    QThreeInput.setAttribute('id', 'input3');
    QThreeInput;
    let QFour = selectDivContainer.appendChild(document.createElement('div'));
    QFour.textContent = 'Have you read the book yet? yes/no';
    QFour;
    let QFourInput = selectDivContainer.appendChild(document.createElement('input'));
    QFourInput.setAttribute('class', 'inputStyle');
    QFourInput.setAttribute('name', 'input4');
    QFourInput.setAttribute('id', 'input4');
    QFourInput;
    let submitButton = selectDivContainer.appendChild(document.createElement('input'));
    submitButton.setAttribute('class', 'inputStyle');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton;
    let form = document.getElementById('formContainer');
    form.addEventListener('submit', (event) => {
    addBookToLibrary(new book(`${form.input1.value}`, ` ${form.input2.value}`, ` ${form.input3.value}`, ` ${form.input4.value}`));
    event.preventDefault();
    bookLoopToScreen();
    removeForm();
        }
    )
};
function removeForm() {
    const selectBody = document.querySelector('body');
    const selectDivContainer = document.querySelector('#formContainer');
    selectBody.removeChild(selectDivContainer);
};
const addABook = document.querySelector('.button');
addABook.addEventListener('click', () => { openForm();})
addBookToLibrary(new book('The Hobbit', ' J.R.R. Tolkien', ' 295 pages', ' not read yet'));
addBookToLibrary(new book('The Da Vinci Code', ' Dan Brown', ' 689 pages', ' not read yet'));
addBookToLibrary(new book('Charlotte\s Web', ' Garth Williams', ' 192 pages', ' not read yet'));
addBookToLibrary(new book('To Kill A Mockingbird', ' Harper Lee', ' 281 pages', ' not read yet'));
addBookToLibrary(new book('Hatchet', ' by Gary Paulsen', ' 195 pages', ' yes read'));
bookLoopToScreen();