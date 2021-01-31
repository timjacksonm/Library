let myLibrary = [];
function game(title, platform, owned, completed) {
    this.title = title,
    this.platform = platform,
    this.owned = owned,
    this.completed = completed,
    this.info = function() {
       return (this.title + this.platform + this.owned + this.completed);
    }
};
function addGameToLibrary(game) {
    myLibrary.push(game);
};
function gameLoopToScreen() {
    const container = document.querySelector('#container');

    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for(let i = 0 ; i < myLibrary.length; ++i) {
      let createBox = container.appendChild(document.createElement('ul'));
      createBox.setAttribute('id', 'child');

      let createDiv = createBox.appendChild(document.createElement('button'));
      createDiv.setAttribute('class', 'deleteButton');
      createDiv.setAttribute('id', i);
      createDiv.setAttribute('onclick', 'removeGame(event)');
      createDiv.textContent = 'x'
      let createTitle = createBox.appendChild(document.createElement('li'));
      createTitle.textContent = myLibrary[i].title;
      createTitle.setAttribute('class', 'gameTitle');
      let createPlatform = createBox.appendChild(document.createElement('li'));
      createPlatform.textContent = myLibrary[i].platform;
      let createOwned = createBox.appendChild(document.createElement('li'));
      createOwned.textContent = myLibrary[i].owned;
      let createCompleted = createBox.appendChild(document.createElement('li'));
      createCompleted.textContent = myLibrary[i].completed;

      let createSwitch = createBox.appendChild(document.createElement('label'));
      createSwitch.setAttribute('class', 'switch');
      let createCheckbox = createSwitch.appendChild(document.createElement('input'));
      createCheckbox.setAttribute('type', 'checkbox');
      createCheckbox.setAttribute('id', ('input'+i));
      createCheckbox.setAttribute('onclick', 'changeReadStatus(event)')

    if (myLibrary[i].completed == ' yes completed') {
          createCheckbox.checked = true;
          createBox.style.backgroundColor = '#4381c1';
      }else {
        createCheckbox.checked = false;
        createBox.style.backgroundColor = '#4e4b5c';
      }
      
      let createSlider = createSwitch.appendChild(document.createElement('span'));
      createSlider.setAttribute('class', 'slider');

      createBox;
      createDiv;
      createTitle;
      createPlatform;
      createOwned;
      createCompleted;
      createSwitch;
      createCheckbox;
      createSlider;
    }
};
function changeReadStatus(event) {
    let selectElementParent = document.getElementById(event.target.id).parentElement.parentElement;
    let num = selectElementParent.children[0].id;

    if (document.getElementById(event.target.id).checked) {
        selectElementParent.style.backgroundColor = '#4381c1';
        selectElementParent.children[4].textContent = ' yes completed';
        myLibrary[num].owned = " yes completed";
    } else {
        selectElementParent.style.backgroundColor = '#4e4B5c';
        selectElementParent.children[4].textContent = ' not completed';
        myLibrary[num].owned = " not completed";
    } 
}
function removeGame(event) {
    let result = confirm('Are you sure you want to delete this game?');
    
    if(result == true){
    let num = event.target.id;
    document.getElementById(num).parentElement.remove();
    myLibrary.splice(num, 1);
    gameLoopToScreen();
    }else {

    }
};
function openForm() {
    const selectBody = document.querySelector('body');
    const createDivContainer = document.createElement('form');
    createDivContainer.setAttribute('id', 'formContainer');
    selectBody.appendChild(createDivContainer)

    const selectDivContainer = document.querySelector('#formContainer');

    let createDiv = selectDivContainer.appendChild(document.createElement('button'));
    createDiv.setAttribute('class', 'deleteButton');
    createDiv.setAttribute('onclick', 'removeForm()');
    createDiv.textContent = 'x'

    
    const QOne = selectDivContainer.appendChild(document.createElement('div'));
    QOne.textContent = 'What is the games title?';
    
    const QOneInput = selectDivContainer.appendChild(document.createElement('input'));
    QOneInput.setAttribute('class', 'inputStyle');
    QOneInput.setAttribute('name', 'input1');
    QOneInput.setAttribute('id', 'input1');
    QOneInput.setAttribute('autocomplete', 'off');

    const QTwo = selectDivContainer.appendChild(document.createElement('div'));
    QTwo.textContent = 'Adding under what platform?';
    
    const QTwoInput = selectDivContainer.appendChild(document.createElement('input'));
    QTwoInput.setAttribute('class', 'inputStyle');
    QTwoInput.setAttribute('name', 'input2');
    QTwoInput.setAttribute('id', 'input2');
    QTwoInput.setAttribute('autocomplete', 'off');
    
    const QThree = selectDivContainer.appendChild(document.createElement('div'));
    QThree.textContent = 'Do you own this game?';
    
    QThreeInput = selectDivContainer.appendChild(document.createElement('input'));
    QThreeInput.setAttribute('class', 'inputStyle');
    QThreeInput.setAttribute('name', 'input3');
    QThreeInput.setAttribute('id', 'input3');
    QThreeInput.setAttribute('autocomplete', 'off');
    
    const QFour = selectDivContainer.appendChild(document.createElement('div'));
    QFour.textContent = 'Have you completed the game?';
   
    const QFourInput = selectDivContainer.appendChild(document.createElement('input'));
    QFourInput.setAttribute('class', 'inputStyle');
    QFourInput.setAttribute('name', 'input4');
    QFourInput.setAttribute('id', 'input4');
    QFourInput.setAttribute('autocomplete', 'off');
    
    const submitButton = selectDivContainer.appendChild(document.createElement('input'));
    submitButton.setAttribute('class', 'inputStyle');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');

    QOne;
    QOneInput;
    QTwo;
    QTwoInput;
    QThree;
    QThreeInput;
    QFour;
    QFourInput;
    submitButton;
    
    let form = document.getElementById('formContainer');
    form.addEventListener('submit', (event) => {
    addGameToLibrary(new game(`${form.input1.value}`, ` ${form.input2.value}`, ` ${form.input3.value}`, ` ${form.input4.value}`));
    event.preventDefault();
    gameLoopToScreen();
    removeForm();
        }
    )
};
function removeForm() {
    const selectBody = document.querySelector('body');
    selectBody.children[4].remove();
};
const addAGame = document.querySelector('.button');
addAGame.addEventListener('click', () => { openForm();})
addGameToLibrary(new game('Halo 2', ' Xbox', ' Owned: Yes', ' yes completed'));
addGameToLibrary(new game('BloodBourne', ' Playstation 4', ' Owned: Yes', ' yes completed'));
addGameToLibrary(new game('God Of War', ' Playstation 4', ' Owned: Yes', ' yes completed'));
addGameToLibrary(new game('Ghost Of Tsushima', ' Playstation 4', ' Owned: Yes', ' not completed'));
addGameToLibrary(new game('Crash Team Racing', ' Nintendo Switch', ' Owned: Yes', ' yes completed'));
gameLoopToScreen();