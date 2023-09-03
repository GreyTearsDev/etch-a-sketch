let btn = document.querySelector('.prompt');
btn.addEventListener('click', () => getDimensions());


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

function createRowOfElements(dimensions) {
	//Appends the divs onto the Grid container to crate the grid
	let div = createDivElement();
	let arrayOfDivs = [];
	let row = createRow();

	//Adds the divs into the array
	for (let i = 0; i < dimensions; i++) {
		addEventToDivs(div);
		arrayOfDivs.unshift(div.cloneNode(true));
	}
	//Appends the array elements onto the row
	arrayOfDivs.forEach((div) => row.appendChild(div));

	createGrid(row);
}

function addEventToDivs(div) {
	//adds the event listener to each of the divs;
	let event = div.addEventListener('mouseover', (e) => {
		e.target.style.backgroundColor = 'black';
	});

	return event;
}


function createGrid(row) {
	//Duplicates the row to always create a squared canvas
	let dimension = row.children.length;
	let arrayOfRows = [];
	let grid = document.querySelector('.master-container');
	
	for (let i = 0; i < dimension; i++) {
		arrayOfRows.unshift(row.cloneNode(true));
	}

	arrayOfRows.forEach((row) => grid.appendChild(row));

}










