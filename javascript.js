let gridSize = 16;
const gridContainer = document.getElementById('gridContainer');
const gridSizeButton = document.getElementById('gridSizeButton')
const originalButton = document.getElementById('original')
const rainbowButton = document.getElementById('rainbow')
const fadeButton = document.getElementById('fade')
const eraserButton = document.getElementById('eraser')
const resetButton = document.getElementById('reset')

let gridStyleSelector = "original"

createGrid(gridSize)

originalButton.addEventListener('click', () => {
    gridStyleSelector = "original"
})

rainbowButton.addEventListener('click', () => {
    gridStyleSelector = "rainbow"
})

fadeButton.addEventListener('click', () => {
    gridStyleSelector = "fade"
})

eraserButton.addEventListener('click', () => {
    gridStyleSelector = "eraser"
})

const gridSquares = document.getElementsByClassName('gridSquare');


resetButton.addEventListener('click', () => {    
    // reset()
    Array.from(gridSquares).forEach((gridSquare) => {
        gridSquare.style.backgroundColor = 'rgb(255,255,255)'
    })
})

function createGrid (gridSize) {

    //subtracting 2px for border
    const gridContainerHeight = gridContainer.offsetHeight 
    const gridSquareHeight = (gridContainerHeight / gridSize) 
    
    for (let i=0; i < (gridSize*gridSize); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare')
        gridSquare.setAttribute('draggable',false)
        gridContainer.appendChild(gridSquare);
        gridSquare.style.height = gridSquareHeight + "px"
        gridSquare.style.width = gridSquareHeight + "px"
        gridSquare.style.backgroundColor = `rgb(255,255,255)`
    }
}

function hover (e) {
    if (e.target.className == 'gridSquare') {
        if (gridStyleSelector == "original") {
            // MAKE ALL BLOCKS BLACK //
            // e.target.classList.add('hovered')
            e.target.style.backgroundColor = `rgb(0,0,0)`;
        } else if (gridStyleSelector == "rainbow") {
            // MAKE BLOCKS RANDOM COLORS //
            let red = Math.random() * 255
            let blue = Math.random() * 255
            let green = Math.random() * 255
            e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        } else if (gridStyleSelector == "fade") {
            // MAKE BLOCKS GRADUALLY DARKER //
            let rgbColor = e.target.style.backgroundColor
            rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
            let red = rgbArr[0]
            let blue =rgbArr[1]
            let green=rgbArr[2]
            e.target.style.backgroundColor = `rgb(${red - (255/10)}, ${blue - (255/10)}, ${green - (255/10)})`;
        } else if (gridStyleSelector == "eraser") {
            e.target.style.backgroundColor = `rgb(255,255,255)`;
        } else {
            e.target.classList.add('hovered')
        }        
    }
}

gridContainer.addEventListener('mousedown', hover)

gridContainer.addEventListener('mousedown', () => {
    event.preventDefault()
    gridContainer.addEventListener('mouseover', hover)
})

gridContainer.addEventListener('mouseup', () => {
    gridContainer.removeEventListener('mouseover', hover)
})

gridSizeButton.addEventListener('click', () => {
    gridSize = prompt("How big do you want the grid??", 16);

    while (isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
        gridSize = prompt("Please enter a number between 1 and 100!")
    }

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(gridSize)
})

