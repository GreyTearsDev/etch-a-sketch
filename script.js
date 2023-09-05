//MENU buttons

const btnDimensions = document.getElementById('btn-dimension');
btnDimensions.addEventListener('click', () => getDimensions());

const btnRainbowMode = document.getElementById('btn-rainbow');
btnRainbowMode.addEventListener('click', addRainbowEventToDivs)

const btnEraser = document.getElementById('btn-eraser');
btnEraser.addEventListener('click', addEraserEventToDivs)




//creates default grid
createRowOfElements();

function getDimensions() {
	// Prompts the user to get the dimensions for the canvas
	let dimensions = Number(prompt('Write a number form 2-100 to set the dimensions'));
	
	//Regular expression checking if all of the characters are numbers
	if (/^\d+$/.test(dimensions) === false) {
		dimensions = 4;
	}
	else if (dimensions < 2) {
		dimensions = 4;
	} else if (dimensions > 100) {
		dimensions = 100;
	}
	//removes the events of the old divs
	removeHoverEventOfDivs();
	removeRainbowEventToDivs()
	createRowOfElements(dimensions);
}

function createDivElement() {
	//Creates a div element and gives it a class name
	const divElement = document.createElement('div');
	divElement.classList.add('element');
	return divElement;
}

function createRow() {
	//Creates a div element and gives it a class name
	const row = document.createElement('div');
	row.classList.add('row');
	return row;
}

function createRowOfElements(dimensions = 16) {
	//Appends the divs onto the Grid container to crate the grid
	const row = createRow();
	const div = createDivElement();
	let arrayOfDivs = [];

	//Adds the divs into the array
	for (let i = 0; i < dimensions; i++) {
			arrayOfDivs.unshift(div.cloneNode(true));
		}
	
	//Appends the array elements onto the row
	arrayOfDivs.forEach((div) => row.appendChild(div));
	createGrid(row);
}


function deleteGrid(grid) {
	//deletes any existing child element of master-container deleting the grid in the process
	grid.innerHTML = '';
}

function createGrid(row) {
	//Duplicates the row to always create a squared canvas
	const dimension = row.children.length;
	const grid = document.querySelector('.master-container');
	let arrayOfRows = [];
	deleteGrid(grid); // delete if there is already one on the screen
	
	for (let i = 0; i < (dimension); i++) {
		arrayOfRows.unshift(row.cloneNode(true));
	}

	arrayOfRows.forEach((row) => grid.appendChild(row));
	addHoverEventToDivs()
}

function generateRandomColor() {
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}




//ADD EVENTS
//Normal Mode events
function addHoverEventToDivs() {
	//selects all divs with the class of .element and adds the event listener 
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			//changes the color of the div if the mouse hovers over it
			e.target.style.backgroundColor = 'black';
		}));
}

function removeHoverEventOfDivs() {
	//selects all divs with the class of .element and adds the event listener 
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.removeEventListener('mouseover', (e) => {
			//changes the color of the div if the mouse hovers over it
			e.target.style.backgroundColor = 'black'
		}));
}


//Rainbow mode events
function addRainbowEventToDivs() {
	removeHoverEventOfDivs()
	//selects all divs with the class of .element and adds the event listener 
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			//changes the color of the div if the mouse hovers over it
			e.target.style.backgroundColor = generateRandomColor()
		}));
}

function removeRainbowEventToDivs() {
	//selects all divs with the class of .element and adds the event listener 
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.removeEventListener('mouseover', (e) => {
			//changes the color of the div if the mouse hovers over it
			e.target.style.backgroundColor = generateRandomColor()
		}));
}


//eraser
function addEraserEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	//sets the color of the hovered divs to white
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'white';
		}));
}








