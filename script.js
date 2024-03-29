//global data storage
let myLibrary = [];
let filteredGames = myLibrary;
let searchString = '';
function game(title, platform, owned, completed) {
	(this.title = title),
		(this.platform = platform),
		(this.owned = owned),
		(this.completed = completed),
		(this.info = function () {
			return this.title + this.platform + this.owned + this.completed;
		});
}
function addGameToLibrary(game) {
	myLibrary.push(game);
}
function gameLoopToScreen(filteredGames) {
	const container = document.querySelector('#container');
	//while loop checks to see if there are cards on the screen already. if so it deletes all of them.
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	//for loop re creates cards based on filteredGames current list of games in memory.
	for (let i = 0; i < filteredGames.length; ++i) {
		//create card box
		let createBox = container.appendChild(document.createElement('li'));
		createBox.setAttribute('id', 'child');
		//button inside cardbox that can delete the entire card from container.
		let createDiv = createBox.appendChild(document.createElement('button'));
		createDiv.setAttribute('class', 'deleteButton');
		createDiv.setAttribute('id', i);
		createDiv.setAttribute('onclick', 'removeGame(event)');
		createDiv.textContent = 'x';
		//title,platform,owned,completed read from memory and put on card.
		let createTitle = createBox.appendChild(document.createElement('li'));
		createTitle.textContent = filteredGames[i].title;
		createTitle.setAttribute('class', 'gameTitle, cardStyle');
		let createPlatform = createBox.appendChild(document.createElement('li'));
		createPlatform.textContent = filteredGames[i].platform;
		let createOwned = createBox.appendChild(document.createElement('li'));
		createOwned.textContent = filteredGames[i].owned;
		let createCompleted = createBox.appendChild(document.createElement('li'));
		createCompleted.textContent = filteredGames[i].completed;
		//Switch, Checkbox & Slider - creates slider button at the bottom of card.
		let createSwitch = createBox.appendChild(document.createElement('label'));
		createSwitch.setAttribute('class', 'switch');
		let createCheckbox = createSwitch.appendChild(
			document.createElement('input')
		);
		createCheckbox.setAttribute('type', 'checkbox');
		createCheckbox.setAttribute('id', 'input' + i);
		createCheckbox.setAttribute('onclick', 'changeCompletedStatus(event)');
		let createSlider = createSwitch.appendChild(document.createElement('span'));
		createSlider.setAttribute('class', 'slider');
		//if statement - Slider checkmark and color of card are assigned correctly based on memory of card being created.
		if (filteredGames[i].completed == ' yes completed') {
			createCheckbox.checked = true;
			createBox.style.backgroundColor = '#a40000';
			createBox.style.borderColor = '#ff0000';
		} else {
			createCheckbox.checked = false;
			createBox.style.backgroundColor = '#4e4b5c';
			createBox.style.borderColor = '#000000';
		}
		//runs variables from above.
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
}
function changeCompletedStatus(event) {
	//This function is used with the slider button of each card.
	let selectElementParent = document.getElementById(event.target.id)
		.parentElement.parentElement;
	let num = '';
	//if statement assigns num to an intiger so we can reference the correct game in memory to change it below.
	if (searchString == '') {
		num = selectElementParent.children[0].id;
	} else {
		for (let i = 0; i < myLibrary.length; i++) {
			if (myLibrary[i].title.toLowerCase().includes(searchString)) {
				num = i;
				break;
			}
		}
	}
	//updates DOM & memory
	if (document.getElementById(event.target.id).checked) {
		selectElementParent.style.backgroundColor = '#a40000';
		selectElementParent.style.borderColor = '#ff0000';
		selectElementParent.children[4].textContent = ' yes completed';
		myLibrary[num].completed = ' yes completed';
	} else {
		selectElementParent.style.backgroundColor = '#4e4B5c';
		selectElementParent.style.borderColor = '#000000';
		selectElementParent.children[4].textContent = ' not completed';
		myLibrary[num].completed = ' not completed';
	}
}
function removeGame(event) {
	let result = confirm('Are you sure you want to delete this game?');
	let num = '';
	//same method as changeCompletedStatus function. num intiger is determined so we can reference correct game in memory.
	if (result == true) {
		if (searchString == '') {
			num = event.target.id;
		} else {
			for (let i = 0; i < myLibrary.length; i++) {
				if (myLibrary[i].title.toLowerCase().includes(searchString)) {
					num = i;
					break;
				}
			}
		}

		document.getElementById(event.target.id).parentElement.remove();
		myLibrary.splice(num, 1);
		filteredGames.splice(event.target.id, 1);
		gameLoopToScreen(filteredGames);
	}
}
function openForm() {
	const selectBody = document.querySelector('body');
	const createFormContainer = document.createElement('form');
	createFormContainer.setAttribute('id', 'formContainer');
	selectBody.appendChild(createFormContainer);

	const SelectFormContainer = document.querySelector('#formContainer');

	let createDiv = SelectFormContainer.appendChild(
		document.createElement('button')
	);
	createDiv.setAttribute('class', 'deleteButton');
	createDiv.setAttribute('onclick', 'removeForm()');
	createDiv.setAttribute('type', 'reset');
	createDiv.style.alignSelf = 'flex-end';
	createDiv.textContent = 'x';

	const QOne = SelectFormContainer.appendChild(document.createElement('div'));
	QOne.style.fontSize = '2vh';
	QOne.textContent = 'What is the games title?';

	const QOneInput = SelectFormContainer.appendChild(
		document.createElement('input')
	);
	QOneInput.setAttribute('class', 'inputStyle');
	QOneInput.setAttribute('name', 'input1');
	QOneInput.setAttribute('id', 'input1');
	QOneInput.setAttribute('autocomplete', 'off');
	QOneInput.required = true;

	const QTwo = SelectFormContainer.appendChild(document.createElement('div'));
	QTwo.style.fontSize = '2vh';
	QTwo.textContent = 'Adding under what platform?';

	const QTwoInput = SelectFormContainer.appendChild(
		document.createElement('label')
	);
	QTwoInput.setAttribute('class', 'inputStyle');
	QTwoInput.setAttribute('name', 'input2');
	QTwoInput.setAttribute('id', 'input2');
	QTwoInput.setAttribute('for', 'platform1');
	QTwoInput.setAttribute('autocomplete', 'off');

	function QTwoInputSelection() {
		const selectionContainer = QTwoInput.appendChild(
			document.createElement('select')
		);
		selectionContainer.setAttribute('name', 'platform1');
		selectionContainer.setAttribute('class', 'inputStyle');
		selectionContainer;
		let optionOne = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionOne.textContent = 'Xbox';
		let optionTwo = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionTwo.textContent = 'Playstation 4';
		let optionThree = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionThree.textContent = 'Nintendo Switch';
		let optionFour = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionFour.textContent = 'Virtual Boy';
		let optionFive = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionFive.textContent = 'Super Nintendo';
		let optionSix = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionSix.textContent = 'Nintendo 64';

		optionOne;
		optionTwo;
		optionThree;
	}
	QTwoInputSelection();

	const QThree = SelectFormContainer.appendChild(document.createElement('div'));
	QThree.style.fontSize = '2vh';
	QThree.textContent = 'Do you own this game?';

	QThreeInput = SelectFormContainer.appendChild(
		document.createElement('label')
	);
	QThreeInput.setAttribute('class', 'inputStyle');
	QThreeInput.setAttribute('name', 'input3');
	QThreeInput.setAttribute('id', 'input3');
	QTwoInput.setAttribute('for', 'platform2');
	QThreeInput.setAttribute('autocomplete', 'off');

	function QThreeInputSelection() {
		const selectionContainer = QThreeInput.appendChild(
			document.createElement('select')
		);
		selectionContainer.setAttribute('name', 'platform2');
		selectionContainer.setAttribute('class', 'inputStyle');
		selectionContainer;
		let optionOne = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionOne.textContent = 'Owned: Yes';
		let optionTwo = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionTwo.textContent = 'Owned: No';

		optionOne;
		optionTwo;
	}
	QThreeInputSelection();

	const QFour = SelectFormContainer.appendChild(document.createElement('div'));
	QFour.style.fontSize = '2vh';
	QFour.textContent = 'Have you completed the game?';

	const QFourInput = SelectFormContainer.appendChild(
		document.createElement('label')
	);
	QFourInput.setAttribute('class', 'inputStyle');
	QFourInput.setAttribute('name', 'input4');
	QFourInput.setAttribute('id', 'input4');
	QTwoInput.setAttribute('for', 'platform3');
	QFourInput.setAttribute('autocomplete', 'off');

	function QFourInputSelection() {
		const selectionContainer = QFourInput.appendChild(
			document.createElement('select')
		);
		selectionContainer.setAttribute('name', 'platform3');
		selectionContainer.setAttribute('class', 'inputStyle');
		selectionContainer;
		let optionOne = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionOne.textContent = 'not completed';
		let optionTwo = selectionContainer.appendChild(
			document.createElement('option')
		);
		optionTwo.textContent = 'yes completed';

		optionOne;
		optionTwo;
	}
	QFourInputSelection();

	const submitButton = SelectFormContainer.appendChild(
		document.createElement('input')
	);
	submitButton.setAttribute('class', 'inputStyle, submitForm');
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
		addGameToLibrary(
			new game(
				`${form.input1.value}`,
				` ${form.platform1.value}`,
				` ${form.platform2.value}`,
				` ${form.platform3.value}`
			)
		);
		filteredGames = myLibrary;
		event.preventDefault();
		gameLoopToScreen(filteredGames);
		removeForm();
	});
}
function removeForm() {
	const selectBody = document.querySelector('body');
	selectBody.lastChild.remove();
	disableToggleAddAGame();
}
function disableToggleAddAGame() {
	const addAGame = document.querySelector('.button');

	if (addAGame.disabled) {
		addAGame.disabled = false;
	} else {
		addAGame.disabled = true;
	}
}

const addAGame = document.querySelector('.button');
addAGame.addEventListener('click', () => {
	openForm(), disableToggleAddAGame();
});

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
	searchString = e.target.value.toLowerCase();
	filteredGames = myLibrary.filter((myLibrary) => {
		return (
			myLibrary.title.toLowerCase().includes(searchString) ||
			myLibrary.platform.toLowerCase().includes(searchString) ||
			myLibrary.owned.toLowerCase().includes(searchString) ||
			myLibrary.completed.toLowerCase().includes(searchString)
		);
	});
	gameLoopToScreen(filteredGames);
});
addGameToLibrary(new game('Halo 2', ' Xbox', ' Owned: Yes', ' yes completed'));
addGameToLibrary(
	new game('BloodBourne', ' Playstation 4', ' Owned: Yes', ' yes completed')
);
addGameToLibrary(
	new game('God Of War', ' Playstation 4', ' Owned: Yes', ' yes completed')
);
addGameToLibrary(
	new game(
		'Ghost Of Tsushima',
		' Playstation 4',
		' Owned: Yes',
		' not completed'
	)
);
addGameToLibrary(
	new game(
		'Crash Team Racing',
		' Nintendo Switch',
		' Owned: Yes',
		' yes completed'
	)
);
addGameToLibrary(
	new game('Galactic Pinball', ' Virtual Boy', ' Owned: Yes', ' not completed')
);
addGameToLibrary(
	new game('Teleroboxer', ' Virtual Boy', ' Owned: Yes', ' not completed')
);
addGameToLibrary(
	new game('Mario Tennis', ' Virtual Boy', ' Owned: Yes', ' not completed')
);
addGameToLibrary(
	new game('Mario Clash', ' Virtual Boy', ' Owned: Yes', ' not completed')
);
addGameToLibrary(
	new game('Super Mario 64', ' Nintendo 64', ' Owned: Yes', ' not completed')
);
addGameToLibrary(
	new game(
		'Super Mario All Stars',
		' Super Nintendo',
		' Owned: Yes',
		' not completed'
	)
);
gameLoopToScreen(filteredGames);
