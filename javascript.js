let gridSize = 16;
// debugger
createGrid(gridSize)

function createGrid (gridSize) {
    const gridContainer = document.getElementById('gridContainer');
    //subtracting 2px for border
    const gridContainerHeight = gridContainer.offsetHeight - 2
    const gridSquareHeight = (gridContainerHeight / gridSize) - 2
    
    for (let i=0; i < (gridSize*gridSize); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare')
        gridContainer.appendChild(gridSquare);
        gridSquare.style.height = gridSquareHeight + "px"
        gridSquare.style.width = gridSquareHeight + "px"
    }
}

