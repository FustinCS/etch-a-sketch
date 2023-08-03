function createGrid(size) {
    const grid = document.querySelector(".grid-container");

    for (let i = 0; i < size; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.style.cssText = "display: flex; flex: 1;";
        grid.appendChild(rowContainer);
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "paint");
            div.style.cssText = "display: flex; flex: 1; transition: all 0.7s ease;";
            rowContainer.appendChild(div);            
        }
    }
    // every time we create a new grid, we want to reassign the onHover features
    onHover();
}

function hovered(e) {
    this.classList.add("hovered");
}

function onHover() {
    const surface = document.querySelectorAll(".paint");

    surface.forEach((square) => square.addEventListener('mouseover', hovered));
}

function removeAllChildNodes(parent) {
    while (parent.firstElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
}

function resize() {
    let newSize = prompt("Please enter the size you would like to change to.");
    
    const grid = document.querySelector(".grid-container");
    removeAllChildNodes(grid);
    createGrid(newSize);

}


createGrid(16);
const resizeBtn = document.querySelector(".resize-button");
resizeBtn.addEventListener('click', resize);