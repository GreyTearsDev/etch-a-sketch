function createDivs() {
	//Creates a div element and gives it a class name
	let squareDivs = document.createElement('div');
	squareDivs.className = 'grid-element';
	squareDivs.textContent = 'hi';

	createArrayOfDivs(squareDivs);
}

function createArrayOfDivs(div) {
	//Creates an array of divs
	let arrayOfDivs = []
	for (let i = 0; i < 16; i++) {
		arrayOfDivs.unshift(div);
	}
	createGridOfDivs(arrayOfDivs);
}

function createGridOfDivs(arrayOfDivs) {
	//Appends the divs onto the Grid container to crate the grid
	let gridContainer = document.querySelector('.grid-container');
	for (element in arrayOfDivs) {
		gridContainer.appendChild(arrayOfDivs[element]);
	}
}

createDivs()





