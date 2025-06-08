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
            divCol.dataset.r = Math.random() * 255;
            divCol.dataset.g = Math.random() * 255;
            divCol.dataset.b = Math.random() * 255;
            divCol.dataset.alpha = 0.0; // Initialize alpha value
            divRow.appendChild(divCol);    
        }    
    }

    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            alpha = parseFloat(e.target.dataset.alpha) || 0.0;
            alpha = Math.min(alpha + 0.1, 1.0);
            e.target.dataset.alpha = alpha;
            r = parseFloat(e.target.dataset.r);
            g = parseFloat(e.target.dataset.g);
            b = parseFloat(e.target.dataset.b);
            e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        });
    });
}

createGrids(16);

const gridSizeButton = document.querySelector('#set-grid-size');
gridSizeButton.addEventListener('click', () => {
    gridSize = parseInt(prompt("Enter grid size (e.g., 16 for 16x16):", "16"))
    if (isNaN(gridSize) || gridSize <= 0 || gridSize >= 100) {
        alert("Please enter a valid number greater than 0 and less than 100.");
        return;
    }
    createGrids(gridSize);
});

