let createGrids = (gridDimensions) => {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    for (let i = 0; i < gridDimensions; i++) {
        const container = document.querySelector(".content");
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box"); // Add a class here
        const divRow = document.createElement("div");
        divRow.setAttribute("style", "display: flex;");
        container.appendChild(gridBox);
        gridBox.appendChild(divRow);
        for (let j = 0; j < gridDimensions; j++) {
            const divCol = document.createElement("div");
            divCol.setAttribute("style", "padding: 20px; outline: 2px solid black;");
            divRow.appendChild(divCol);    
        }    
    }

    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

const gridSizeButton = document.querySelector('#set-grid-size');
gridSizeButton.addEventListener('click', () => {
    gridSize = parseInt(prompt("Enter grid size (e.g., 16 for 16x16):", "16"))
    if (isNaN(gridSize) || gridSize <= 0 || gridSize >= 100) {
        alert("Please enter a valid number greater than 0 and less than 100.");
        return;
    }
    createGrids(gridSize);
});

