const container = document.querySelector('.grid-container');

function makeRows(rows, cols) {
    // first rename rows and columns
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    // create for loop to determine size of grid
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
    };

};

makeRows(100, 100);