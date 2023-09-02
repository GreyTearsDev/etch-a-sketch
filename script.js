//Creates a div element and gives it a class name
let squareDivs = document.createElement('div');
squareDivs.className = 'grid-element';


squareDivs.addEventListener('mouseover', () => changeDivColor());

createGridOfDivs();

function changeDivColor() {
	//changes the color of the div if the mouse hovers over it
	let elements = createArrayOfDivs(squareDivs);
	for (element in elements) {
		elements[element].addEventListener('mouseover', () => elements[element].style.backgroundColor = 'black');
	}

}

function createArrayOfDivs(div) {
	//Creates an array of divs
	let arrayOfDivs = [];
	for (let i = 0; i < (16 * 16); i++) {
		arrayOfDivs.unshift(div.cloneNode(true));
	}
	return arrayOfDivs;
}

function createGridOfDivs() {
	//Appends the divs onto the Grid container to crate the grid
	let arrayOfDivs = createArrayOfDivs(squareDivs);
	let gridContainer = document.body.querySelector('.grid-container');

	for (element in arrayOfDivs) {
		arrayOfDivs[element].addEventListener('mouseover', () => arrayOfDivs[element].style.backgroundColor = 'black')
		gridContainer.appendChild(arrayOfDivs[element]);
	}
}

let hi = document.querySelector('.hi');
hi.addEventListener('mouseover', () => hi.style.backgroundColor = 'black');







