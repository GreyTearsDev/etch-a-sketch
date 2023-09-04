let btn = document.querySelector('.btn');
btn.addEventListener('click', () => getDimensions());

//creates default grid
createRowOfElements();

function getDimensions() {
	// Prompts the user to get the dimensions for the canvas
	let dimensions = Number(prompt('Write a number form 2-100 to set the dimensions'));
	if (dimensions < 2) {
		dimensions = 4;
	} else if (dimensions > 100) {
		dimensions = 100;
	}
	createRowOfElements(dimensions);
}

function createDivElement() {
	//Creates a div element and gives it a class name
	let divElement = document.createElement('div');
	divElement.classList.add('element');
	return divElement;
}

function createRow() {
	//Creates a div element and gives it a class name
	let row = document.createElement('div');
	row.classList.add('row');
	return row;
}

function createRowOfElements(dimensions = 16) {
	//Appends the divs onto the Grid container to crate the grid
	let div = createDivElement();
	let arrayOfDivs = [];
	let row = createRow();

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
	let dimension = row.children.length;
	let arrayOfRows = [];
	let grid = document.querySelector('.master-container');
	deleteGrid(grid); // delete if there is already one on the screen
	
	for (let i = 0; i < (dimension); i++) {
		arrayOfRows.unshift(row.cloneNode(true));
	}

	arrayOfRows.forEach((row) => grid.appendChild(row));
	addEventToDivs()
}


function addEventToDivs() {
	//selects all divs with the class of .element and adds the event listener 
	let paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			//changes the color of the div if the mouse hovers over it
			e.target.style.backgroundColor = 'black'
		}));
}









