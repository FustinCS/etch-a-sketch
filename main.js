function createGrid(size) {
    const grid = document.querySelector(".grid-container");

    for (let i = 0; i < size; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.style.cssText = "display: flex; flex: 1;";
        grid.appendChild(rowContainer);
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "paint");
            div.style.cssText = "display: flex; flex: 1; transition: all 0.5s ease;";
            rowContainer.appendChild(div);            
        }
    }
    // every time we create a new grid, we want to reassign the onHover features
    onHover();
}

function regHover(e) {
    this.style.backgroundColor = `rgb(75, 75, 75)`;
}

function rainbowHover(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function onHover() {
    const surface = document.querySelectorAll(".paint");
    const rainbow = document.querySelector(".rainbow-button");
    
    if (rainbow.classList.contains("active")) {
        // need to remove in order to add it back later
        surface.forEach((square) => square.removeEventListener('mouseover', regHover));
        surface.forEach((square) => square.addEventListener('mouseover', rainbowHover));
    }
    else {
        surface.forEach((square) => square.removeEventListener('mouseover', rainbowHover));
        surface.forEach((square) => square.addEventListener('mouseover', regHover));
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
}

function resize() {
    let newSize = prompt("Please enter the size you would like to change to.");
    
    if (newSize > 100) {
        alert("ERROR: The given size is too big!");
    }
    else {
        const grid = document.querySelector(".grid-container");
        removeAllChildNodes(grid);
        createGrid(newSize);
    }
}

function rainbow(e) {
    this.classList.toggle('active');
    onHover();
}

createGrid(16);
const resizeBtn = document.querySelector(".resize-button");
resizeBtn.addEventListener('click', resize);
const rainbowBtn = document.querySelector(".rainbow-button");
rainbowBtn.addEventListener('click', rainbow);