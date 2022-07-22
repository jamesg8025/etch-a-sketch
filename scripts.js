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
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
    };

};

function changeSize(input) {
    // set parameters for dimension size entry
    if (input >= 1 && input <= 100) {
        makeRows(input);
    } else {
        console.log('Enter a valid integer!');
    }
    
}



makeRows(16);