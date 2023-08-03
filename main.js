function createGrid() {
    const grid = document.querySelector(".grid-container");

    for (let i = 0; i < 16; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.style.cssText = "display: flex; flex: 1;";
        grid.appendChild(rowContainer);
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "paint");
            div.style.cssText = "display: flex; flex: 1; transition: all 0.7s ease;";
            rowContainer.appendChild(div);            
        }
    }
}

function hovered(e) {
    this.classList.add("hovered");
}

function onHover() {
    const surface = document.querySelectorAll(".paint");

    surface.forEach((square) => square.addEventListener('mouseover', hovered));
}

createGrid();
onHover();