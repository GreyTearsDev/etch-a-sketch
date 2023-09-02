//Creates a div element and gives it a class name
let squareDivs = document.createElement('div');
squareDivs.className = 'grid-element';

createGridOfDivs();

function changeDivColor(element) {
	//changes the color of the div if the mouse hovers over it
	element.target.style.backgroundColor = 'black';
}

function addEventToDivs(arrayOfDivs) {
	//adds the event listener to each of the divs;
	for (element in arrayOfDivs) {
		arrayOfDivs[element].addEventListener('mouseover', (event) => changeDivColor(event));
	}
}

function createArrayOfDivs(div) {
	//Creates an array of divs
	let arrayOfDivs = [];
	
	for (let i = 0; i < (16 * 16); i++) {
		arrayOfDivs.unshift(div.cloneNode(true));
	}
	// Add an event listener to ech of the divs in the array
	addEventToDivs(arrayOfDivs);
	return arrayOfDivs;
}

function createGridOfDivs() {
	//Appends the divs onto the Grid container to crate the grid
	let arrayOfDivs = createArrayOfDivs(squareDivs);
	let gridContainer = document.body.querySelector('.grid-container');

	for (element in arrayOfDivs) {
		gridContainer.appendChild(arrayOfDivs[element]);
	}
}








