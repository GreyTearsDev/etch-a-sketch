//MENU buttons

const btnDimensions = document.getElementById('btn-dimension').addEventListener('click', () => getDimensions());
const btnRainbowMode = document.getElementById('btn-rainbow').addEventListener('click', addRainbowEventToDivs);
const btnEraser = document.getElementById('btn-eraser').addEventListener('click', addEraserEventToDivs);
const btnCLear = document.getElementById('btn-clear').addEventListener('click', addClearEventToDivs);
const btnGhost = document.getElementById('btn-ghost').addEventListener('click', addGhostEventToDivs);
const btnHover = document.getElementById('btn-hover').addEventListener('click', addHoverEventToDivs);
const btnGrid = document.getElementById('btn-grid').addEventListener('click', toggleGrid);


//creates default grid
createRowOfElements();

function getDimensions() {
	let dimensions = Number(prompt('Write a number form 2-100 to set the dimensions'));
	
	//Regular expression checking if all of the characters are numbers
	if (/^\d+$/.test(dimensions) === false) {
		dimensions = 4;
	} else if (dimensions < 2) {
		dimensions = 4;
	} else if (dimensions > 100) {
		dimensions = 100;
	}
	removeHoverEventOfDivs();
	removeRainbowEventToDivs()
	createRowOfElements(dimensions);
}

function createDivElement() {
	const divElement = document.createElement('div');
	divElement.classList.add('element');
	return divElement;
}

function createRow() {
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
	
	arrayOfDivs.forEach((div) => row.appendChild(div));
	createGrid(row);
}

function createGrid(row) {
	const dimension = row.children.length;
	const grid = document.querySelector('.master-container');
	let arrayOfRows = [];
	grid.innerHTML = ''; // delete if there is already one on the screen
	
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

function hideGrid() {
	const btnGrid = document.getElementById('grid')
	btnGrid.textContent = 'Show grid'
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.style.border = '0px none rgba(0, 0, 0, 0)');
}

function showGrid(){
	const btnGrid = document.getElementById('grid')
	btnGrid.textContent = 'Hide grid'
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.style.border = '1px solid rgba(0, 0, 0, 0.05)');
}

function toggleGrid() {
	const sampleDiv = document.querySelector('.element');
	let divBorder = window.getComputedStyle(sampleDiv, null).getPropertyValue('border')
	
	if (divBorder == '1px solid rgba(0, 0, 0, 0.05)') {
		hideGrid()
	} else showGrid();
}



function addHoverEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'black';
		}));
	removeHoverEventOfDivs() 
}

function removeHoverEventOfDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.removeEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'black'
		}));
}

function addRainbowEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = generateRandomColor()
		}));
	removeRainbowEventToDivs()
}

function removeRainbowEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.removeEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = generateRandomColor()
		}));
}

function addEraserEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'white';
		}));
	removeEraserEventToDivs()
}

function removeEraserEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.removeEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'white';
		}));
}

function addGhostEventToDivs() {
	removeGhostEventToDivs()

	let a = 0;
	if (a > 1.0) {
		a = a - (a - 1.0);
	}

	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.addEventListener('mouseover', (e) => {
		let b = a;
			e.target.style.backgroundColor = `rgb(0, 0, 0, ${b + 0.1})`;
			
			if (a <= 1.0) {
				a = b + 0.1;
			} 
		}));
}

function removeGhostEventToDivs() {
	let a = 0;
	if (a > 1.0) {
		a -=(a - 1.0);
	}
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.removeEventListener('mouseover', (e) => {
		let b = a;
			e.target.style.backgroundColor = `rgba(0, 0, 0, ${b + 0.1})`;			
			if (a <= 1.0) {
				a = b + 0.1;
			} 
		}));
}

function addClearEventToDivs() {
	const paintableDivs = document.querySelectorAll('.element');
	paintableDivs.forEach((div) => div.style.backgroundColor = 'white');
}