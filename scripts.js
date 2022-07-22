// set global variable for defaults
const defaultColor = 'black';
const defaultMode = 'color';
let currentColor = defaultColor;
let currentMode = defaultMode;

// color buttons set color modes
const colorSelector = document.getElementById('colorSelector');
colorSelector.oninput = (e) => setCurrentColor(e.target.value);
const colorBtn = document.getElementById('colorBtn');
colorBtn.onclick = () => setCurrentMode('color');
const rainbowBtn = document.getElementById('rainbowBtn');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
const eraserBtn = document.getElementById('eraserBtn');
eraserBtn.onclick = () => setCurrentMode('eraser');
const blackBtn = document.getElementById('blackBtn');
blackBtn.onclick = () => setCurrentMode('black');
const gridDimension = document.getElementsByClassName('gridDimension');


// assume click is not being pressed
let click = false;
// when clicked
document.body.onmousedown = () => (click = true);
// when not being clicked
document.body.onmouseup = () => (click = false);

window.onload = () => {
    makeRows(16);
    activateButton(defaultMode);
}

function makeRows(size) {
    const container = document.querySelector('.grid-container');
    // declare a variable representing all new cells
    let cells = container.querySelectorAll('div');
    // remove these new cells when input is changed
    cells.forEach((div) => div.remove());
    // style the entered amount of cells
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    // create for loop to determine size of grid
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        // function to change cell color when mouseover each div
        cell.addEventListener('mouseover', colorCell);
        cell.addEventListener('mousedown', colorCell);
    };
};

function changeSize(input) {
    // set parameters for dimension size entry
    if (input >= 1 && input <= 100) {
        makeRows(input);
        displayDimension(input);
    } else {
        console.log('Enter a valid integer!');
    }
    
};

function displayDimension(input) {
    document.querySelector('.gridDimension').textContent = `Displaying: ${input} x ${input}`;
}

// this function sets the new mode when corresponding button is clicked and removes other active buttons
function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active')
    } else if (currentMode === 'black') {
        blackBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
        colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    } else if (newMode === 'black') {
        blackBtn.classList.add('active')
    }
};
  
function setCurrentColor(newColor) {
    currentColor = newColor
};

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
};

function colorCell(e) {
    if (e.type === 'mouseover' && !click) {
        return;
    };
    // 'this' refers to whatever cell gets hovered over
    if ((currentMode === 'rainbow')) {
        // random constant changing color
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') { 
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#ffffff'
    } else if (currentMode === 'black') {
        e.target.style.backgroundColor = '#000000'
    }
};

// function colorCell() {
//     // 'this' refers to whatever cell gets hovered over
//     if ((color === 'rainbow')) {
//         // random constant changing color
//         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     } else {
//         this.style.backgroundColor = color;
//     }
// };

// function changeColor(choice) {
//     let color = document.getElementById('colorSelector').value;
//     color = choice;

// };


function resetGrid() {
    const container = document.querySelector('.grid-container');
    let cells = container.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');
};

// makeRows(16);